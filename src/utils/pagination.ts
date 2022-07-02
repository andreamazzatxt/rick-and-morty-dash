export const getPagesArray = (pages: number) => {
  return Array.from({ length: pages }, (_, i) => i + 1);
};
