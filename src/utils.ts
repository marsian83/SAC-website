export function shorten(str: string, length: number, dots?: number) {
  if (str.length < length) {
    return str;
  }
  str = str.slice(0, length);
  dots = dots || 3;
  for (let i = 0; i < dots; i++) {
    str.concat(".");
  }
  return str;
}
