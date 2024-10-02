let max;

if (a > b) {
    max = a;
} else {
    max = b;
}

if (c > max) {
    max = c;
}

if (d > max) {
    max = b;
}

console.log("The maximum value is: " + max);