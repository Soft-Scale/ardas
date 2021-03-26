/*Реалізуйте рекурсивну функцію підрахунку факторіала числа.*/
export function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}