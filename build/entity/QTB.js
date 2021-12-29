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
import { Tags } from "./Tags.js";
let QTB = class QTB {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], QTB.prototype, "qtId", void 0);
__decorate([
    Column({ type: 'integer', nullable: false }),
    ManyToOne(() => Tags, (tags) => tags.tagId),
    JoinColumn({ name: 'qt_tag_id' }),
    __metadata("design:type", Number)
], QTB.prototype, "qt_tag_id", void 0);
__decorate([
    Column({ type: 'integer', nullable: false }),
    ManyToOne(() => Questions, (questions) => questions.questionId),
    JoinColumn({ name: 'qt_question_id' }),
    __metadata("design:type", Number)
], QTB.prototype, "qt_question_id", void 0);
QTB = __decorate([
    Entity({ name: 'QuestionTagsBinding' })
], QTB);
export { QTB };
//# sourceMappingURL=QTB.js.map