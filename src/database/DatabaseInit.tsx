import { DatabaseConnection } from "./DatabaseConnection";

var db = null
export default class DatabaseIni {
    constructor() {
        db = DatabaseConnection.getConnection()
        db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
        console.log('foreign keys turned on')
        );
        this.IniDb()
    }
    private IniDb() {
        var sql = [
                `DROP TABLE IF EXISTS padrao;`,
                `DROP TABLE IF EXISTS jogada;`,

                `create table if not existe padrao (
                    id integer primary key autoincrement,
                    nome text,

                );`,
                `create table if not exists jogada(
                    id integer primary key autoincrement,
                    nome text,
                    jodo_id int,
                    foreign key (jodo_id) references padrao (id)
                );`,
                `insert into jogada(nome) values('');`
        ];

        db.transaction(
            tx => {
                for(var i = 0; i < sql.length; i++) {
                    console.log("execute sql : " + sql[i]);
                    tx.executeSql(sql[i]);
                }
            }, (error) = {
                console.log("error call back : " + JSON.stringify(error));
                console.log(error);
            }, () => {
                console.log("transaction complete call back ");
            }
        );
    }
}