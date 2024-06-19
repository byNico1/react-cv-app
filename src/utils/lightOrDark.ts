export function lightOrDark(bgColor: string) {
  let r, g, b, hsp;

  const colorToRgb = +(
    "0x" +
    (bgColor.length < 5
      ? bgColor.slice(1).replace(/./g, "$&$&")
      : bgColor.slice(1))
  );

  r = colorToRgb >> 16;
  g = (colorToRgb >> 8) & 255;
  b = colorToRgb & 255;

  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  return hsp > 127.5 ? "dark" : "light";
}
