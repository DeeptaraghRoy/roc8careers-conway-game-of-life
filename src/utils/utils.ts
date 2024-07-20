export const ROWS = 30;
export const COLS = 30;

export const createEmptyGrid = (): number[][] => {
  return Array.from({ length: ROWS }, (): number[] =>
    Array<number>(COLS).fill(0),
  );
};

export const DIRECTIONS: [number, number][] = [
  [0, 1], // Right
  [1, 1], // Down-Right
  [1, 0], // Down
  [1, -1], // Down-Left
  [0, -1], // Left
  [-1, -1], // Up-Left
  [-1, 0], // Up
  [-1, 1], // Up-Right
];

export const getGridSize = (): number => {
  const size: number = Math.min(
    (window.innerWidth - 32) / COLS,
    (window.innerHeight - 200) / ROWS,
    15,
  );
  return size;
};
