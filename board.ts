function greeter(fn: (a: string) => void, fn2: (msg: string) => string, name: string) {
  fn("Hello, World")
  console.log(fn2("Nice to meet you!"))

}

function printToConsole(s: string) {
  console.log(s);
}

function HelloMsg(msg: string): string {
  return msg
};

greeter(printToConsole, HelloMsg, "anh");