import {MigrationInterface, QueryRunner} from "typeorm";

export class UserFullName1606050240556 implements MigrationInterface {
    name = 'UserFullName1606050240556'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "photo" TO "photo22"`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT '2020-11-21 18:45:54.350082+00'`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "photo22" TO "photo"`);
    }

}
