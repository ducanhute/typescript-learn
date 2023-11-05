function greeter(fn, fn2, name) {
    fn("Hello, World");
    console.log(fn2("Nice to meet you!"));
}
function printToConsole(s) {
    console.log(s);
}
function HelloMsg(msg) {
    return msg;
}
;
greeter(printToConsole, HelloMsg, "anh");
