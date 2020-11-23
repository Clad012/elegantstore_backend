import {MigrationInterface, QueryRunner} from "typeorm";

export class ProductMigration1606066163667 implements MigrationInterface {
    name = 'ProductMigration1606066163667'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "photo" TO "photo22"`);
        await queryRunner.query(`CREATE TABLE "sub__category" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "description" text, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT 'now()', "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE DEFAULT null, "categoryId" integer, CONSTRAINT "PK_518f76be181e9953ee46bacb3cb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "description" text, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT 'now()', "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE DEFAULT null, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "ref" character varying(500), "name" character varying(50) NOT NULL, "price" double precision NOT NULL, "description" text, "quantity_stock" integer NOT NULL, "available" boolean NOT NULL, "quantity_alert" integer NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT 'now()', "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE DEFAULT null, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_aef63687048485d45524643c7a" ON "product" ("ref") `);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "sub__category" ADD CONSTRAINT "FK_7e1be4d7c0deb9f189c59763123" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sub__category" DROP CONSTRAINT "FK_7e1be4d7c0deb9f189c59763123"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT '2020-11-21 18:45:54.350082+00'`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createdAt" IS NULL`);
        await queryRunner.query(`DROP INDEX "IDX_aef63687048485d45524643c7a"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "sub__category"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "photo22" TO "photo"`);
    }

}
