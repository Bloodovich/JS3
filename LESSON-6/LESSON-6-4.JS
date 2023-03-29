function detonatorTimer(delay) {
    if (delay === 0) {
        console.log("BOOM!"); 
        return;
    };
    console.log(delay);
    setTimeout(() => detonatorTimer(delay-1), 1000); 
}

function detonatorTimer(delay) {
    const myInterval = setInterval(() => {
        if (delay === 0){
            console.log('BOOM!');
            clearInterval(myInterval);
            return;
        };
        console.log(delay);
        delay--;
    }, 1000);
}

detonatorTimer(3);
// setTimeout(() => console.log(i), 1000);