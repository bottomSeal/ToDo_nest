import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from './database.config';
//import { ToDo } from 'src/models/ToDo.model';
//import { User } from 'src/models/User.model';
//import { Token } from 'src/models/Token.model';


export const databaseProviders = [{
    provide: Sequelize,
    useFactory: async () => {
        const sequelize = new Sequelize(databaseConfig);
        //sequelize.addModels([ToDo, User, Token]);
        sequelize.addModels([__dirname + 'src/models/*.model.ts']);
        await sequelize.authenticate();
        await sequelize.sync();
        return sequelize;
    },
}];