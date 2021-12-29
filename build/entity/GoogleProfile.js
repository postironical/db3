var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users.js";
let GoogleProfile = class GoogleProfile {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], GoogleProfile.prototype, "gpId", void 0);
__decorate([
    Column({ type: 'character varying', length: 50, nullable: false }),
    __metadata("design:type", String)
], GoogleProfile.prototype, "email", void 0);
__decorate([
    Column({ type: 'character varying', length: 50, nullable: false }),
    __metadata("design:type", String)
], GoogleProfile.prototype, "nickname", void 0);
__decorate([
    Column({ type: 'integer', nullable: false }),
    __metadata("design:type", Number)
], GoogleProfile.prototype, "adIdentifier", void 0);
__decorate([
    Column({ type: 'integer', nullable: false }),
    OneToOne(() => Users),
    JoinColumn({ name: 'questionUser' }),
    __metadata("design:type", Number)
], GoogleProfile.prototype, "questionUser", void 0);
GoogleProfile = __decorate([
    Entity({ name: 'Google_Profile' })
], GoogleProfile);
export { GoogleProfile };
//# sourceMappingURL=GoogleProfile.js.map