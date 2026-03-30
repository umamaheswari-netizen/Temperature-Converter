function convertTemp() {
    let temp = document.getElementById("inputTemp").value;
    let inputUnit = document.getElementById("inputUnit").value;
    let outputUnit = document.getElementById("outputUnit").value;

    if (temp === "") {
        document.getElementById("result").innerText = "Please enter a value!";
        return;
    }

    temp = parseFloat(temp);
    let celsius;

    // Convert to Celsius
    switch (inputUnit) {
        case "c":
            celsius = temp;
            break;
        case "f":
            celsius = (temp - 32) * 5 / 9;
            break;
        case "k":
            celsius = temp - 273.15;
            break;
    }

    let result;

    // Convert to output
    switch (outputUnit) {
        case "c":
            result = celsius;
            break;
        case "f":
            result = (celsius * 9 / 5) + 32;
            break;
        case "k":
            result = celsius + 273.15;
            break;
    }

    document.getElementById("result").innerText =
        "Result: " + result.toFixed(2) + " °" + outputUnit.toUpperCase();
}