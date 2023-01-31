//Задание 1
function printObProp (obj) {
    for (let obp in obj) {
        if (obj.hasOwnProperty(obp)) {
            console.log(obp, obj[obp]);
        }
    }
}