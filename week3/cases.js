const { factorial } = require('mathjs');

const permutation = (n, r) => {
    if (n < r) return 0;
    if (n === r) return factorial(n);
    return factorial(n) / factorial(n - r);
}

const combination = (n, r) => {
    if (n < r) return 0;
    if (n === r) return 1;
    return factorial(n) / (factorial(r) * factorial(n - r));
}

const multiPermutation = (n, r) => {
    if (n < r) return 0;
    if (n === r) return factorial(n);
    return Math.pow(n, r);
}

const multiCombination = (n, r) => {
    if (n < r) return 0;
    if (n === r) return 1;
    return factorial(n + r - 1) / (factorial(r) * factorial(n - 1));
}   

module.exports = {
    permutation,
    combination,
    multiPermutation,
    multiCombination
}