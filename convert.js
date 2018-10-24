var convert = require('convert-units'); const a = process.argv; var b;
if (a[4] == "to" && a.length == 6 && isNaN(a[2]) == false) {
    try {
        b = convert(a[2]).from(a[3]).to(a[5]); console.log(a[2] + " " + a[3] + " are " + b + " " + a[5]);
    } catch (ReferenceError) {
        console.log("Invalid parameters");
    }
} else {
    console.log("Invalid parameters");
}