import { question } from 'readline-sync';
import { Format } from './format.js';
import { Tags } from '../entity/Tags.js';
import { Answer } from '../entity/Answer.js';
import { QTB } from '../entity/QTB.js';
import { Questions } from '../entity/Questions.js';
import { Users } from '../entity/Users.js';
import { GoogleProfile } from '../entity/GoogleProfile.js';
export class Reader {
    static prepareDataTag() {
        const tag = new Tags();
        tag.tName = question('tName: ');
        tag.description = question('description: ');
        return tag;
    }
    static prepareDataUser() {
        const user = new Users();
        user.username = question('username: ');
        user.reg_date = Format.toDate(new Date(Date.now()));
        user.rating = +question('rating: ');
        return user;
    }
    static prepareDataGoogleProfile() {
        const googleProfile = new GoogleProfile();
        googleProfile.email = question('email: ');
        googleProfile.nickname = question('nickname: ');
        googleProfile.adIdentifier = +question('ad id: ');
        googleProfile.questionUser = +question('user id: ');
        return googleProfile;
    }
    static prepareDataQuestion() {
        const quest = new Questions();
        quest.qHeader = question('question header: ');
        quest.qText = question('question text: ');
        quest.creationDate = Format.toDate(new Date(Date.now()));
        quest.authorId = +question('author id: ');
        return quest;
    }
    static prepareDataQuestionTagsBinding() {
        const qtb = new QTB();
        qtb.qt_question_id = +question('question id: ');
        qtb.qt_tag_id = +question('tag id: ');
        return qtb;
    }
    static prepareDataAnswer() {
        const answer = new Answer();
        answer.aHeader = question('answer header: ');
        answer.aText = question('answer text: ');
        answer.aCreationDate = Format.toDate(new Date(Date.now()));
        answer.a_author_id = +question('author id: ');
        answer.a_question_id = +question('question id: ');
        return answer;
    }
}
//# sourceMappingURL=reader.js.map