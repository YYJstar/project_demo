const express = require("express");
const router = express.Router();

const imgManageHandler = require("../router_handler/imgManage_handler");

//获取图片列表接口
router.get("/getImgs", imgManageHandler.getImgs);

//通过图片接口
router.put("/pass/:id", imgManageHandler.passImg);

//拒绝图片接口
router.put("/reject/:id", imgManageHandler.rejectImg);

//删除图片接口
router.delete("/delete/:id", imgManageHandler.deleteImg);

module.exports = router;
