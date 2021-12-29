import { Answer } from '../entity/Answer.js';
import { Users } from '../entity/Users.js';
import { Questions } from '../entity/Questions.js';
import { Reader } from '../utils/reader.js';
import { Printer } from '../utils/printer.js';
import { getConnection, getRepository } from 'typeorm';
import { question } from 'readline-sync';
export class AnswerService {
    constructor(connection) {
        this.connection = getConnection();
    }
    async addDataAnswer() {
        const answer = Reader.prepareDataAnswer();
        try {
            await this.connection.manager.save(answer);
            console.log(`Answer with id ${answer.answerId} has been saved`);
        }
        catch (err) {
            console.log(err);
        }
    }
    async editDataAnswer() {
        const id = +question('Answer id: ');
        try {
            const ansRepo = getRepository(Answer);
            let ansEdit = await ansRepo.findOne({
                where: {
                    answerId: id
                }
            });
            if (!ansEdit) {
                console.log(`There is no answer with id ${id}`);
            }
            else {
                const answer = Reader.prepareDataAnswer();
                const userRepo = getRepository(Users);
                const questionRepo = getRepository(Questions);
                const userRow = await userRepo.findOne({
                    where: { userI: answer.a_author_id }
                });
                const questRow = await questionRepo.findOne({
                    where: { questionId: answer.a_question_id }
                });
                if (!userRow || !questRow) {
                    console.log(`There is no user with id ${answer.a_author_id} or question with id ${answer.a_question_id}`);
                }
                else {
                    await this.connection
                        .createQueryBuilder()
                        .update(Answer)
                        .set({ ...answer })
                        .where('answerId = :id', { id })
                        .execute();
                    console.log(`Answer with id ${id} has been updated`);
                }
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    async deleteDataAnswer() {
        const id = +question('Answer id: ');
        try {
            const ansRepo = getRepository(Answer);
            const answer = await ansRepo.findOne({
                where: {
                    answerId: id
                }
            });
            if (!answer) {
                console.log(`There is no answer with id ${id}`);
            }
            else {
                await this.connection
                    .createQueryBuilder()
                    .delete()
                    .from(Answer)
                    .where('answerId = :id', { id })
                    .execute();
                console.log(`Answer with id ${id} has been deleted`);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    async showDataAnswer() {
        try {
            const answers = await this.connection.manager.find(Answer);
            Printer.printAnswers(answers);
        }
        catch (err) {
            console.log(err);
        }
    }
}
//# sourceMappingURL=AnswerService.js.map