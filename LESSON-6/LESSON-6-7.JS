function someFunction(arg1, arg2) {
    const result = (arg1 + arg2) * 2;
    console.log(result);
}

function slower(func, seconds) {
    return function(arg1, arg2) {
        console.log(`Chill out, you will get your result in ${seconds} seconds`);
        setTimeout(() => {
        func(arg1, arg2);
        }, seconds * 1000);
    };
}

let slowedSomeFunction = slower(someFunction, 5); 

slowedSomeFunction(4, 10)

