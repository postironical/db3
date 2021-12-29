import { Users } from '../entity/Users.js';
import { Reader } from '../utils/reader.js';
import { Printer } from '../utils/printer.js';
import { getConnection, getRepository } from 'typeorm';
import { question } from 'readline-sync';
export class UsersService {
    constructor(connection) {
        this.connection = getConnection();
    }
    async addDataUsers() {
        const user = Reader.prepareDataUser();
        try {
            await this.connection.manager.save(user);
            console.log(`User with id ${user.userId} has been saved`);
        }
        catch (err) {
            console.log(err);
        }
    }
    async editDataUsers() {
        const id = +question('User id: ');
        try {
            const userRepo = getRepository(Users);
            let userEdit = await userRepo.findOne({
                where: { userId: id }
            });
            if (!userEdit) {
                console.log(`There is no user with id ${id}`);
            }
            else {
                const user = Reader.prepareDataUser();
                await this.connection
                    .createQueryBuilder()
                    .update(Users)
                    .set({ ...user })
                    .where('userId = :id', { id })
                    .execute();
                console.log(`User with id ${id} has been updated`);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    async deleteDataUsers() {
        const id = +question('User id: ');
        try {
            const userRepo = getRepository(Users);
            let userEdit = await userRepo.findOne({
                where: { userId: id }
            });
            if (!userEdit) {
                console.log(`There is no user with id ${id}`);
            }
            else {
                await this.connection
                    .createQueryBuilder()
                    .delete()
                    .from(Users)
                    .where('userId = :id', { id })
                    .execute();
                console.log(`User with id ${id} has been deleted`);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    async showDataUsers() {
        try {
            const users = await this.connection.manager.find(Users);
            Printer.printUsers(users);
        }
        catch (err) {
            console.log(err);
        }
    }
}
//# sourceMappingURL=UsersService.js.map