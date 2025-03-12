export const KRW = {
  '1만': 10_000,
};

export const krw = (value: string | number): string => {
  const num = typeof value === 'string' ? parseInt(value) || 0 : value || 0;

  if (num === 0) return '0원';

  const units = ['', '만', '억', '조'];
  let result = '';
  let index = 0;
  let remaining = num;

  while (remaining > 0) {
    const digit = remaining % KRW['1만'];
    if (digit !== 0) {
      result = `${digit}${units[index]}${result ? ' ' : ''}${result}`;
    }
    remaining = Math.floor(remaining / KRW['1만']);
    index++;
  }

  return `${result}원`;
};
