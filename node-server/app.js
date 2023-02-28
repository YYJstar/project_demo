const express = require("express");
const app = express();

//导入跨域处理的中间件
const cors = require("cors");
app.use(cors());

//告诉服务器去哪里找静态资源文件
const path = require("path");
app.use(express.static(path.join(__dirname, "/public")));

//图片上传相关的路由
const uploadRouter = require("./router/upload");
app.use("/api/", uploadRouter);

//管理图片相关的路由
const imgManageRouter = require("./router/imgManage");
app.use("/api/images", imgManageRouter);

app.listen(3000, () => {
  console.log("api server running at http://127.0.0.1:3000");
});
