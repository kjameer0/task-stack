const numbers = ['#0D4D66', 'teal', '#054575', '#0A8EF4'];
export function selectColor(num: number) {
  return numbers[num % numbers.length];
}
