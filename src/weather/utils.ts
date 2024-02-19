export const kelvinToFarhenheit = (kelvin: number) => {
  const f = ((kelvin - 273.15) * 9) / 5 + 32;
  return Math.round(f * 10) / 10;
};
