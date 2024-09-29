function hello(name, callback) {
    setTimeout(function () {
        console.log(`Hello ${name}`);
        callback(name);
    }, 2000);
}

function speak(callback) {
    setTimeout(function () {
        console.log('Bla bla bla bla');
        callback();
    }, 1000);
}

function goodbye(name, callback) {
    setTimeout(function () {
        console.log(`Good bye ${name}`);
        callback();
    }, 4000);
}

function conversation(name, times, callback) {
    if (times >= 0) {
        speak(function () {
            conversation(name, --times, callback);
        });
    } else {
        goodbye(name, callback);
    }
}

console.log('Start');

hello('Daniel', function (name) {
    conversation('Daniel', 8, function () {
        console.log('Process ended');
    });
});

/* hello('Daniel', function () {
    speak(function () {
        speak(function () {
            speak(function () {
                speak(function () {
                    speak(function () {
                        speak(function () {
                            speak(function () {
                                goodbye('Daniel', function () {
                                    console.log('End process');
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}); */
