console.stdlog = console.log.bind(console);
console.logs = [];
console.log = function () {
    console.logs.push(Array.from(arguments));
    console.stdlog.apply(console, arguments);
};

const intervalId = window.setInterval(function () {
    if (console.logs.length > 0) {
        let last = console.logs[console.logs.length - 1].toString();
        if (last !== undefined && last.startsWith("QUESTION SKILL: ") && !last.startsWith("DrCheat: ")) {
            const json = JSON.parse(last.substring(16));
            alert(JSON.stringify(json.answer) + "\n Refer to the console by pressing F12 for more information.");
        }
        console.logs.pop();

    }

}, 1000);
