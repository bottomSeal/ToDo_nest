import { ToDo } from "src/models/ToDo.model";

export const TodosProvider = [
    {
        provide: 'TODOS_REPOSITORY',
        useValue: ToDo,
    },
];
