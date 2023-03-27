detonatorTimer(3);

function detonatorTimer(delay) {
    if (delay == 0) {
        console.log("BOOM!"); 
        return;
    };
    console.log(delay);
    setTimeout(() => detonatorTimer(delay-1), 1000); 
}

function detonatorTimer(delay) {
    let myInterval = setInterval(() => {
        if (delay == 0){
            console.log('BOOM!');
            clearInterval(myInterval);
            return;
        };
        console.log(delay);
        delay--;
    }, 1000);
}

// setTimeout(() => console.log(i), 1000);