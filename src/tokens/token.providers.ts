import { Token } from "src/models/Token.model";


export const TokensProvider = [
    {
        provide: 'TOKENS_REPOSITORY',
        useValue: Token,
    },
];