const handleSuccess = (res, data) => {
  // res.json({
  //   status: true,
  //   data,
  // });
  // res.end();

  //res.send會依據傳入型別來決定回傳的格式
  //也會預設關閉 .end()
  //但保守人可以再加.end()
  res
    .send({
      status: true,
      data,
    })
    .end();
};

module.exports = handleSuccess;

//const headers = require("./header");
// const handleSuccess = (res, data) => {
//   //res.writeHead(200, headers);
//   res.write(
//     JSON.stringify({
//       status: "success",
//       data: data,
//     })
//   );
//   res.end();
// };

// module.exports = handleSuccess;
