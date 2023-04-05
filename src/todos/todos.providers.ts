import { ToDo } from "./models/ToDo.model";


export const todosProviders = [
    {
        provide: 'TODOS_REPOSITORY',
        useValue: ToDo,
    },
];
