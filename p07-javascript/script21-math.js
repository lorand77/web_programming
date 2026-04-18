function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

console.log(randint(1, 10));
console.log(randint(1, 6));

let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < 10**9; i++) {
    let r = randint(1, 10);
    counts[r - 1] += 1;
}

console.log(counts);
