import { Format } from './format.js';
export class Printer {
    static printUsers(users) {
        console.log('userId |        username       |  reg_date  | rating');
        console.log('____________________________________________________');
        users.forEach((item) => {
            let modUName = '';
            if (item.username.length > 23) {
                modUName = item.username.substr(0, 20) + '...';
            }
            else {
                modUName = Format.toField(23, item.username);
            }
            console.log(`${Format.toField(7, item.userId.toString())}|${modUName}|${Format.toField(12, Format.toDate(new Date(item.reg_date)))}|${item.rating}`);
            console.log('____________________________________________________');
        });
    }
    static printTags(tags) {
        console.log('tagId |      tName     |      description');
        console.log('_____________________________________________');
        tags.forEach((item) => {
            let modTName = '';
            let modDesc = '';
            if (item.tName.length > 16) {
                modTName = item.tName.substr(0, 13) + '...';
            }
            else {
                modTName = Format.toField(16, item.tName);
            }
            if (item.description.length > 20) {
                modDesc = item.description.substr(0, 17) + '...';
            }
            else {
                modDesc = Format.toField(20, item.description);
            }
            console.log(`${Format.toField(6, item.tagId.toString())}|${modTName}|${modDesc}`);
            console.log('_____________________________________________');
        });
    }
    static printGoogleProfiles(profiles) {
        console.log('gpId |      email     |     nickname     |   adIdentifier  | questionUser');
        console.log('_________________________________________________________________________');
        profiles.forEach((item) => {
            let modEmail = '';
            let modNickname = '';
            if (item.email.length > 16) {
                modEmail = item.email.substr(0, 13) + '...';
            }
            else {
                modEmail = Format.toField(16, item.email);
            }
            if (item.nickname.length > 18) {
                modNickname = item.nickname.substr(0, 15) + '...';
            }
            else {
                modNickname = Format.toField(18, item.nickname);
            }
            console.log(`${Format.toField(5, item.gpId.toString())}|${modEmail}|${modNickname}|${Format.toField(17, item.adIdentifier.toString())}|${item.questionUser}`);
            console.log('_________________________________________________________________________');
        });
    }
    static printAnswers(answers) {
        console.log('answerId |     aHeader    |       aText       | aCreationDate | a_author_id | a_question_id');
        console.log('___________________________________________________________________________________________');
        answers.forEach((item) => {
            let modHeader = '';
            let modText = '';
            if (item.aHeader.length > 16) {
                modHeader = item.aHeader.substr(0, 13) + '...';
            }
            else {
                modHeader = Format.toField(16, item.aHeader);
            }
            if (item.aText.length > 19) {
                modText = item.aText.substr(0, 16) + '...';
            }
            else {
                modText = Format.toField(19, item.aText);
            }
            console.log(`${Format.toField(9, item.answerId.toString())}|${modHeader}|${modText}|${Format.toField(15, Format.toDate(new Date(item.aCreationDate)))}|${Format.toField(13, item.a_author_id.toString())}|${item.a_question_id}`);
            console.log('___________________________________________________________________________________________');
        });
    }
    static printQuestion(questions) {
        console.log('questionId |     qHeader    |       qText       | creationDate | authorId');
        console.log('________________________________________________________________________');
        questions.forEach((item) => {
            let modHeader = '';
            let modText = '';
            if (item.qHeader.length > 16) {
                modHeader = item.qHeader.substr(0, 13) + '...';
            }
            else {
                modHeader = Format.toField(16, item.qHeader);
            }
            if (item.qText.length > 19) {
                modText = item.qText.substr(0, 16) + '...';
            }
            else {
                modText = Format.toField(19, item.qText);
            }
            console.log(`${Format.toField(11, item.questionId.toString())}|${modHeader}|${modText}|${Format.toField(14, Format.toDate(new Date(item.creationDate)))}|${item.authorId}`);
            console.log('________________________________________________________________________');
        });
    }
    static printQTBs(qtbs) {
        console.log('qtId |  qt_tag_id  | qt_question_id');
        console.log('___________________________________');
        qtbs.forEach((item) => {
            console.log(`${Format.toField(5, item.qtId.toString())}|${Format.toField(13, item.qt_tag_id.toString())}|${item.qt_question_id}`);
            console.log('___________________________________');
        });
    }
}
//# sourceMappingURL=printer.js.map