export const fade = (hexColor: string, percent: number) => {
  const alpha = Math.round((percent / 100) * 255);
  const alphaHex = alpha.toString(16).padStart(2, "0");

  return `${hexColor}${alphaHex}`;
};
