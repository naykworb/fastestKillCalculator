function getData(args) {
    let currentData = data;
    for(let i = 0; i < args.length; i++) {
        currentData = currentData[args[i]];
    }
    return currentData;
}

function getHealth(isAgressive, mobName) {
    let currentData = data["mob"];
    if(isAgressive) {
        currentData = currentData["aggresive"];
    }else {
        currentData = currentData["passive"];
    }

    return currentData[mobName];
}

console.log(getData(["axe", "wood"]))