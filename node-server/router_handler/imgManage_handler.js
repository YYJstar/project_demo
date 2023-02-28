/**
 * 在这里定义和图片管理相关的路由处理函数
 * 供/router/imgManage.js模块进行调用
 * 包括获取图片、通过图片、拒绝图片、删除图片、置顶图片
 */
const db = require("../db/index");

//获取图片列表
exports.getImgs = (req, res) => {
  const sql = "select * from images order by id asc";
  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send({ error: "Database error" });
    } else {
      res.send({
        status: 200,
        data: results,
      });
    }
  });
};

//通过图片
exports.passImg = (req, res) => {
  const id = req.params.id;
  const status = true;
  const sql = "UPDATE images SET status = ? WHERE id = ?";
  db.query(sql, [status, id], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).end({ error: "Database error" });
    } else {
      res.send({
        status: 200,
        message: "pass image successfully",
      });
    }
  });
};

//拒绝图片
exports.rejectImg = (req, res) => {
  const id = req.params.id;
  const status = false;
  const sql = "UPDATE images SET status = ? WHERE id = ?";
  db.query(sql, [status, id], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).end({ error: "Database error" });
    } else {
      res.send({
        status: 200,
        message: "reject image successfully",
      });
    }
  });
};

//删除图片
exports.deleteImg = (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM images WHERE id = ?";
  db.query(sql, id, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).end({ error: "Database error" });
    } else {
      res.send({
        status: 200,
        message: "delete image successfully",
      });
    }
  });

  //置顶图片——待补充
};
