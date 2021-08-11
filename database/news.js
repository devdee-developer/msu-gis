import * as SQLite from "expo-sqlite";

import { Platform } from "react-native";

function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {}
        };
      }
    };
  }
  const db = SQLite.openDatabase("db.db");
  return db;
}

const table = "tb_news";
const db = openDatabase();
export function intialNews(data) {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      console.log(`drop table ${table}`);
      tx.executeSql(`drop table ${table};`, [], (tx, results) => {
        db.transaction((tx) => {
          tx.executeSql(
            `create table if not exists ${table} (id integer primary key not null, thumbnail text, header text,public_date text,banner text,detail text,vdo text,top_news integer);`,
            [],
            (tx, results) => {
              let count = 0;
              data.map((row, index) => {
                insert({ row, index }, function () {
                  count++;
                  if (count == data.length) {
                    resolve({
                      table: table,
                      status: true,
                      message: "insert " + count + " record"
                    });
                  }
                });
              });
            }
          );
        });
      });
    });
  });
}
export function insert({ row, index }, callback) {
  db.transaction((tx) => {
    tx.executeSql(
      `insert into ${table} (thumbnail, header,public_date,banner,detail,vdo,top_news) values ( ?,?,?,?,?,?,${
        index < 3 ? 1 : 0
      })`,
      [
        row.thumbnail,
        row.header,
        row.publicDate,
        row.banner,
        row.detail,
        JSON.stringify(row.vdoLink)
      ],

      (tx, results) => {
        console.log(`insert to ${table} index :${index}`);
        callback(results);
      }
    );
  });
}
