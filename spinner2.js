const sequence = "|/-\\|/-\\|";
let delay = 100;

for (const char of sequence) {
  setTimeout(() => {
    process.stdout.write(`\r${char}`);
  }, delay);
  delay += 200;
}