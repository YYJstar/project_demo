/**
 * 在这里定义和上传图片相关的路由处理函数
 * 供/router/upload.js模块进行调用
 */
const db = require("../db/index");
exports.upload = (req, res) => {
  if (!req.files) {
    res.send({
      status: 400,
      message: "No image uploaded",
    });
    return;
  }
  const files = req.files;
  const sql = "INSERT INTO images (url, status) VALUES (?, ?)";
  let urls = [];
  const status = 0;
  for (let i = 0; i < files.length; i++) {
    //将上传的图片存入mysql数据库
    //这里有个坑，如果URL路径带public的话，会找不到静态资源，需要把public去掉
    const imgUrl = `http://localhost:3000/images/${files[i].filename}`;
    db.query(sql, [imgUrl, status], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send({ error: "Database error" });
      } else {
        urls.push(imgUrl);
      }
    });
  }
  res.json({
    status: 200,
    message: "Image uploaded successfully",
    url: urls,
  });
};
