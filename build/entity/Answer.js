var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Questions } from "./Questions.js";
import { Users } from "./Users.js";
let Answer = class Answer {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Answer.prototype, "answerId", void 0);
__decorate([
    Column({ type: 'character varying', length: 50, nullable: false }),
    __metadata("design:type", String)
], Answer.prototype, "aHeader", void 0);
__decorate([
    Column({ type: 'character varying', length: 500, nullable: false }),
    __metadata("design:type", String)
], Answer.prototype, "aText", void 0);
__decorate([
    Column({ type: 'date', nullable: false }),
    __metadata("design:type", String)
], Answer.prototype, "aCreationDate", void 0);
__decorate([
    Column({ type: 'integer', nullable: false }),
    ManyToOne(() => Users, (users) => users.userId),
    JoinColumn({ name: 'a_author_id' }),
    __metadata("design:type", Number)
], Answer.prototype, "a_author_id", void 0);
__decorate([
    Column({ type: 'integer', nullable: false }),
    ManyToOne(() => Questions, (questions) => questions.questionId),
    JoinColumn({ name: 'a_question_id' }),
    __metadata("design:type", Number)
], Answer.prototype, "a_question_id", void 0);
Answer = __decorate([
    Entity({ name: 'Answer' })
], Answer);
export { Answer };
//# sourceMappingURL=Answer.js.map