const express = require("express");
const router = express.Router();

const multer = require("multer");

const storage = multer.diskStorage({
  //确定图片存储的位置
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  //确定图片存储时的名字
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });
const uploadHandler = require("../router_handler/upload_handler");

//接收上传图片请求的接口
router.post("/upload", upload.array("files"), uploadHandler.upload);

module.exports = router;
