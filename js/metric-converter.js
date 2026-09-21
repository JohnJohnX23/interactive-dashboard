let number = parseFloat(prompt("Enter the number:"));
let UNIT1 = prompt("Enter the current unit:");
let UNIT2 = prompt("Enter the conversion unit:");
let Result;

if (UNIT1 === "inch") {
    Result = number * 2.54;
} else if (UNIT1 === "foot") {
    Result = number * 30.48;
} else if (UNIT1 === "yard") {
    Result = number * 0.91;
} else if (UNIT1 === "mile") {
    Result = number * 1.61;
} else if (UNIT1 === "centimeter") {
    if (UNIT2 === "inch") {
        Result = number * 0.39;
    } else {
        Result = number * 0.0328;
    }
} else if (UNIT1 === "meter") {
    Result = number * 1.09;
} else if (UNIT1 === "kilometer") {
    Result = number * 0.62;
}

element.addEventListener("click", function() {alert(Result + " " + UNIT2)});