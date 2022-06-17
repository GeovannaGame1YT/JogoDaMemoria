import { Jogada } from "../models/Jogada";
import { DatabaseConnection } from "../database/DatabaseConnection";
import { resolve } from "path/posix";
import { SQLError } from "expo-sqlite";

const table = "jogada"
const db=DatabaseConnection.getConnection()

export default class servicesDados {

    static addData(param: Jogada) {
        return new Promise((resolve, reject) => db.transaction(
            tx => {
                tx.executeSql(`insert into ${table} (nome)
                values (?)`,
                [param.nome],
                (_, { insertId, row }) =>{
                    console.log("id insert: " + insertId);
                    resolve(insertId)
                }), (SQLError) => {
                    console.log(SQLError);
                }}, (txError) => {
                    console.log(txError);
            }));
    }

    static deleteById(id: number) {
        db.transaction(
            tx => {
                tx.executeSql(`delete from ${table} where id = ?;`, [id], (_, { rows }) => {
                }), (SQLError) => {
                    console.log(SQLError);
                }}, (txError) => {
                    console.log(txError);

                });
            }

            static updatById(param: Jogada) {
                return new Promise((resolve, reject) => db.transaction(tx => {
                    tx.executeSql(`update ${table} set nome = ? where id = ?;` , [param.nome,param.id], () => {
                    }), (SQLError) => {
                        console.log(SQLError);
                    }}, (SQLError) => {
                        console.log(SQLError);
                    }
                }));
            }
        )
    }
}