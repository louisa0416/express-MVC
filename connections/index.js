const mongoose = require("mongoose");
const dotenv = require("dotenv"); //集中在 .env 檔中管理它
dotenv.config({ path: "./config.env" });

// const DB = process.env.DATABASE.replace(
//   "<password>",
//   process.env.DATABASE_PASSWORD
// );
const DB = process.env.DATABASE;
mongoose.connect(DB).then(() => {
  console.log("資料庫連線成功");
});
