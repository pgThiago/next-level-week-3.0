import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1604452742529 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table ({
            name : 'users',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'email',
                    type: 'varchar'
                },
                {
                    name: 'password',
                    type: 'text'
                },
                {
                    name: 'passwordResetToken',
                    type: 'text',
                    isNullable: true,
                },
                {
                    name: 'passwordResetExpires',
                    type: 'date',
                    isNullable: true,
                },
            ]
        }))
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}