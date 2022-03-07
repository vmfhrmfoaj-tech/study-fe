const messageService = require("./messageService"); // ref
const { sendEmail } = require("./messageService"); // val

exports.register = function register(user) {
  /* DB에 회원 추가 */
  const message = "회원 가입을 환영합니다!";
  console.log("ref : " + messageService.sendEmail);
  messageService.sendEmail(user.email, message); // call by reference
  console.log("drt : ", sendEmail);
  sendEmail(user.email, message); // call by val
};
