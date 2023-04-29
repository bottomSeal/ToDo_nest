import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly authService: AuthService) {}

    async use(req: Request, res: Response, next: NextFunction) {
        const xAccessToken = req.headers['x-access-token'] as string;
        if (!xAccessToken) {
            return res.status(401).json({ message: 'Token not provided' });
        }

        try {
            const userId = await this.authService.verifyToken(xAccessToken);
            req['userId'] = userId;
            next();
        } catch (error) {
            return res.status(403).json({ message: 'Invalid token' });
        }
    }
}