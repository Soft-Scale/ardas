let array = [1, 2, 3, 4, 5, 6];

export default function calculate(first, ...args) {
  return args.map(item => item**2);
}

array.find(i => i>4);