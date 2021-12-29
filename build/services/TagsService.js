import { Tags } from '../entity/Tags.js';
import { Reader } from '../utils/reader.js';
import { Printer } from '../utils/printer.js';
import { getConnection, getRepository } from 'typeorm';
import { question } from 'readline-sync';
export class TagsService {
    constructor(connection) {
        this.connection = getConnection();
    }
    async addDataTags() {
        const tag = Reader.prepareDataTag();
        try {
            await this.connection.manager.save(tag);
            console.log(`Tag with id ${tag.tagId} has been saved`);
        }
        catch (err) {
            console.log(err);
        }
    }
    async editDataTags() {
        const id = +question('Tag id: ');
        try {
            const newTag = Reader.prepareDataTag();
            const tagRepo = getRepository(Tags);
            const tag = await tagRepo.findOne({
                where: { tagId: id }
            });
            if (!tag) {
                console.log(`There is no tag with id ${id}`);
            }
            else {
                await this.connection
                    .createQueryBuilder()
                    .update(Tags)
                    .set({ ...newTag })
                    .where('tagId = :id', { id })
                    .execute();
                console.log(`Tag with id ${id} has been updated`);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    async deleteDataTags() {
        const id = +question('Tag id: ');
        try {
            const tagRepo = getRepository(Tags);
            const tag = await tagRepo.findOne({
                where: { tagId: id }
            });
            if (!tag) {
                console.log(`There is no tag with id ${id}`);
            }
            else {
                await this.connection
                    .createQueryBuilder()
                    .delete()
                    .from(Tags)
                    .where('tagId = :id', { id })
                    .execute();
                console.log(`Tag with id ${id} has been deleted`);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    async showDataTags() {
        try {
            const tags = await this.connection.manager.find(Tags);
            Printer.printTags(tags);
        }
        catch (err) {
            console.log(err);
        }
    }
}
//# sourceMappingURL=TagsService.js.map