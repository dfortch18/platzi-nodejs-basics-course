process.on("exit", () => console.log("Process ended"));

process.on("beforeExit", () => console.log("Process is about to end"));

process.on("uncaughtException", (err, origin) => console.error(err));

throw new Error();