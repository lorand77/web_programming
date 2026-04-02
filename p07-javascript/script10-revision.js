let numbers = [1, 2, 37, 45, 75, 100, 295, 1776, 1813, 580];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0 || numbers[i] % 37 === 0) {
        console.log(numbers[i]);
    }
}