import { ToDo } from "./models/ToDo.model";


export const TodosProvider = [
    {
        provide: 'TODOS_REPOSITORY',
        useValue: ToDo,
    },
];
