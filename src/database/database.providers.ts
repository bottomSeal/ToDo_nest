import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from './database.config';
import { ToDo } from 'src/todos/models/ToDo.model';


export const databaseProviders = [{
    provide: Sequelize,
    useFactory: async () => {
        const sequelize = new Sequelize(databaseConfig);
        sequelize.addModels([ToDo]);
        await sequelize.authenticate();
        await sequelize.sync();
        return sequelize;
    },
}];