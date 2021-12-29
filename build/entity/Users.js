var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Answer } from "./Answer.js";
import { Questions } from "./Questions.js";
let Users = class Users {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Users.prototype, "userId", void 0);
__decorate([
    Column({ type: 'character varying', length: 50, nullable: false }),
    __metadata("design:type", String)
], Users.prototype, "username", void 0);
__decorate([
    Column({ type: 'date', nullable: false }),
    __metadata("design:type", String)
], Users.prototype, "reg_date", void 0);
__decorate([
    Column({ type: 'integer', nullable: false }),
    __metadata("design:type", Number)
], Users.prototype, "rating", void 0);
__decorate([
    Column({ type: 'boolean', nullable: false }),
    __metadata("design:type", Boolean)
], Users.prototype, "confirmed", void 0);
__decorate([
    OneToMany(() => Questions, questions => questions.authorId),
    __metadata("design:type", Array)
], Users.prototype, "questions", void 0);
__decorate([
    OneToMany(() => Answer, answers => answers.a_author_id),
    __metadata("design:type", Array)
], Users.prototype, "answers", void 0);
Users = __decorate([
    Entity({ name: 'Users' })
], Users);
export { Users };
//# sourceMappingURL=Users.js.map