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
import { QTB } from "./QTB.js";
let Tags = class Tags {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Tags.prototype, "tagId", void 0);
__decorate([
    Column({ type: 'character varying', length: 50, nullable: false }),
    __metadata("design:type", String)
], Tags.prototype, "tName", void 0);
__decorate([
    Column({ type: 'character varying', length: 500, nullable: false }),
    __metadata("design:type", String)
], Tags.prototype, "description", void 0);
__decorate([
    OneToMany(() => QTB, qtb => qtb.qt_tag_id),
    __metadata("design:type", Array)
], Tags.prototype, "questions", void 0);
Tags = __decorate([
    Entity({ name: 'Tags' })
], Tags);
export { Tags };
//# sourceMappingURL=Tags.js.map