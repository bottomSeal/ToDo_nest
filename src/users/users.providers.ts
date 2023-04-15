import { User } from "src/models/User.model";


export const UsersProvider = [
    {
        provide: 'USERS_REPOSITORY',
        useValue: User,
    },
];
