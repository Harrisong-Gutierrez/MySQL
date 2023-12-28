import serverlessMysql from "serverless-mysql";

export const conn = serverlessMysql({
  config: {
    host: "localhost",
    user: "root",
    password: "smbs2023",
    port: 3306,
    database: "product",
  },
});
