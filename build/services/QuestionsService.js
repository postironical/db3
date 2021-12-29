import { Questions } from '../entity/Questions.js';
import { Users } from '../entity/Users.js';
import { Reader } from '../utils/reader.js';
import { getConnection, getRepository } from 'typeorm';
import { question } from 'readline-sync';
import { Printer } from '../utils/printer.js';
export class QuestionsService {
    constructor(connection) {
        this.connection = getConnection();
    }
    async addDataQuestions() {
        const quest = Reader.prepareDataQuestion();
        try {
            await this.connection.manager.save(quest);
            console.log(`Question with id ${quest.questionId} has been saved`);
        }
        catch (err) {
            console.log(err);
        }
    }
    async editDataQuestions() {
        const id = +question('Question id: ');
        try {
            const newQuestion = Reader.prepareDataQuestion();
            const questionRepo = getRepository(Questions);
            const userRepo = getRepository(Users);
            const quest = await questionRepo.findOne({
                where: { questionId: id }
            });
            if (!quest) {
                console.log(`There is no question with id ${id}`);
            }
            else {
                const user = await userRepo.findOne({
                    where: { userId: newQuestion.authorId }
                });
                if (!user) {
                    console.log(`There is no user with id ${newQuestion.authorId}`);
                }
                else {
                    await this.connection
                        .createQueryBuilder()
                        .update(Questions)
                        .set({ ...newQuestion })
                        .where('questionId = :id', { id })
                        .execute();
                    console.log(`Question with id ${id} has been updated`);
                }
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    async deleteDataQuestions() {
        const id = +question('Question id: ');
        try {
            const questionRepo = getRepository(Questions);
            const quest = await questionRepo.findOne({
                where: { questionId: id }
            });
            if (!quest) {
                console.log(`There is no question with id ${id}`);
            }
            else {
                await this.connection
                    .createQueryBuilder()
                    .delete()
                    .from(Questions)
                    .where('questionId = :id', { id })
                    .execute();
                console.log(`Question with id ${id} has been deleted`);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    async showDataQuestions() {
        try {
            const questions = await this.connection.manager.find(Questions);
            Printer.printQuestion(questions);
        }
        catch (err) {
            console.log(err);
        }
    }
}
//# sourceMappingURL=QuestionsService.js.map