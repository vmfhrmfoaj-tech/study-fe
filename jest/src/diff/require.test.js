const { register } = require("./requireService"); // fail
// const { register } = require("./requireRefService"); // success
const messageService = require("./messageService");

messageService.sendEmail = jest.fn();

const sendEmail = messageService.sendEmail;

const user = {
  email: "test@email.com",
  phone: "012-345-6789",
};

test("register sends messeges", () => {
  register(user);

  expect(sendEmail).toBeCalledTimes(2);
  expect(sendEmail).toBeCalledWith(user.email, "회원 가입을 환영합니다!");
});
