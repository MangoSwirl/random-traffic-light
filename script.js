const light = document.getElementById("light");

function green() {
    light.style.backgroundColor = "green";

    setTimeout(() => {
        red()
    }, Math.random()*10000 + 1000);
}

function red() {
    light.style.backgroundColor = "yellow";
    setTimeout(() => {
        light.style.backgroundColor = "red";
        setTimeout(() => {
            green()
        }, Math.random()*10000 + 500);
    }, 500)
}

green()