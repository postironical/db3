var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Answer } from "./Answer.js";
import { QTB } from "./QTB.js";
import { Users } from "./Users.js";
let Questions = class Questions {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Questions.prototype, "questionId", void 0);
__decorate([
    Column({ type: 'character varying', length: 50, nullable: false }),
    __metadata("design:type", String)
], Questions.prototype, "qHeader", void 0);
__decorate([
    Column({ type: 'character varying', length: 500, nullable: false }),
    __metadata("design:type", String)
], Questions.prototype, "qText", void 0);
__decorate([
    Column({ type: 'date', nullable: false }),
    __metadata("design:type", String)
], Questions.prototype, "creationDate", void 0);
__decorate([
    Column({ type: 'integer', nullable: false }),
    ManyToOne(() => Users, (users) => users.userId),
    JoinColumn({ name: 'authorId' }),
    __metadata("design:type", Number)
], Questions.prototype, "authorId", void 0);
__decorate([
    OneToMany(() => QTB, qtb => qtb.qt_question_id),
    __metadata("design:type", Array)
], Questions.prototype, "questions", void 0);
__decorate([
    OneToMany(() => Answer, answers => answers.a_question_id),
    __metadata("design:type", Array)
], Questions.prototype, "answers", void 0);
Questions = __decorate([
    Entity({ name: 'Questions' })
], Questions);
export { Questions };
//# sourceMappingURL=Questions.js.map