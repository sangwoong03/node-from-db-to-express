const express = require("express");
const router = express.Router({ mergeParams: true }); // express 라우터 분리
// express 라우터를 분리하여 라우터 모듈 작성
// mergeParams >> 부모 라우터의 파라미터 상속

// middleware module
// function testMiddleware(req, res, next) {
// 	console.log("첫번째 미들웨어");
// 	next();
// }
// function testMiddleware2(req, res, next) {
// 	console.log("첫번째 미들웨어");
// 	next();
// }

// rotuer "/" url로 이동 >> testMiddleware1, 2를 거치고 >> router res.send 실행
router.get("/", (req, res) => {
	res.send("Main Page");
});

router.get("/lists", (req, res) => {
	// res.send("admin products"); >> 화면 메시지
	res.render("admin/lists.html");
});

router.get("/lists/write", (req, res) => {
	res.render("admin/write.html");
});

router.get("/edit/:id", (req, res) => {
	console.log(req.params);
	res.render("admin/edit.html");
});

router.get("/login", (req, res) => {
	res.render("admin/login.html");
});

// router.get("/mypage", (req, res) => {
// 	console.log(req.params.user);
// 	res.render("admin/mypage.html");
// });

router.post("/add", (req, res) => {
	res.redirect("/admin/lists");
});

router.delete("/delete", (req, res) => {
	res.redirect("/admin/lists");
});

router.put("/edit", (req, res) => {
	res.redirect("/admin/lists");
});

module.exports = router; // 작성한 모듈 내보내기
