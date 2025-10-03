function convertToCelcius(f) {
    return (f - 32) * 5 / 9
}

function describeTemperature(f) {
    const c = convertToCelcius(f);

    let description;

    if (c < 0) {
        description = "very cold";
    } 
    else if (c < 20) {
        description = "cold"
    }
    else if (c < 30) {
        description = "warm"
    }
    else if (c < 40) {
        description = "hot"
    }
    else if (c >= 40) {
        description = "very hot"
    }

    return `${f} in fahrenheit is equivalent to ${c} in celius and feels ${description}!`
}

const f = prompt("what is the temperature in fahrenheit?")
const description = describeTemperature(f);
alert(description);
