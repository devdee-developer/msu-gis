import * as SQLite from "expo-sqlite";

import { Platform } from "react-native";

function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }
  const db = SQLite.openDatabase("db.db");
  return db;
}
const db = openDatabase();
export const createAllTable = () => {
  db.transaction((tx) => {
    // tx.executeSql(
    //   "drop table tb_news;"
    // );
    // tx.executeSql(
    //   "create table if not exists tb_news (id integer primary key not null, thumbnail text, header text,public_date text,banner text,detail text,vdo text);"
    // );
  });
};
