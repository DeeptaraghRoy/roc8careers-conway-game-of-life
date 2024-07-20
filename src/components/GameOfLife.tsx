import {
  COLS,
  createEmptyGrid,
  DIRECTIONS,
  getGridSize,
  ROWS,
} from "@/utils/utils";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import StartPauseButton from "./StartPauseButton";
import UtilButton from "./UtilButton";

const GameOfLife: React.FC = () => {
  const [grid, setGrid] = useState<number[][]>(createEmptyGrid());
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [cellSize, setCellSize] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCellSize(getGridSize());

      const handleResize = () => {
        setCellSize(getGridSize());
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const playingRef = useRef<boolean>(isPlaying);
  playingRef.current = isPlaying;

  const runGameOfLife = useCallback(() => {
    if (!playingRef.current) {
      return;
    }

    setGrid((prevGrid: number[][]) => {
      const updatedGrid = prevGrid.map((arr) => [...arr]);

      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          let livingNeighbors = 0;

          DIRECTIONS.forEach(([directionX, directionY]: [number, number]) => {
            const neighborRow = row + directionX;
            const neighborCol = col + directionY;
            if (
              neighborRow >= 0 &&
              neighborRow < ROWS &&
              neighborCol >= 0 &&
              neighborCol < COLS
            ) {
              livingNeighbors += prevGrid[neighborRow]?.[neighborCol] ? 1 : 0;
            }
          });
          if (livingNeighbors < 2 || livingNeighbors > 3) {
            updatedGrid[row]![col] = 0;
          } else if (prevGrid[row]?.[col] === 0 && livingNeighbors === 3) {
            updatedGrid[row]![col] = 1;
          }
        }
      }
      return updatedGrid;
    });

    setTimeout(runGameOfLife, 100);
  }, [setGrid]);

  const handleMouseDown = (): void => {
    setIsMouseDown(true);
  };
  const handleMouseUp = (): void => {
    setIsMouseDown(false);
  };

  const toggleCellState = (rowToToggle: number, colToToggle: number): void => {
    const updatedGrid = grid.map((row, rowIndex) =>
      row.map((cell, colIndex) =>
        rowIndex === rowToToggle && colIndex === colToToggle
          ? cell
            ? 0
            : 1
          : cell,
      ),
    );
    setGrid(updatedGrid);
  };

  const handleMouseOver = (row: number, col: number): void => {
    if (isMouseDown) {
      // toggle cell state
      toggleCellState(row, col);
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center gap-4 bg-slate-700 p-4">
      <h1 className="text-xl text-white md:text-2xl">
        Conway&apos;s Game of Life
      </h1>
      <div className="flex items-center gap-4">
        <StartPauseButton
          onClick={() => {
            setIsPlaying(!isPlaying);
            if (!isPlaying) {
              playingRef.current = true;
              // run simulation
              runGameOfLife();
            }
          }}
          isPlaying={isPlaying}
        />
        <UtilButton
          onClick={() => {
            const rows: number[][] = [];
            for (let i = 0; i < ROWS; i++) {
              rows.push(
                Array.from(Array(COLS), () => (Math.random() > 0.75 ? 1 : 0)),
              );
            }
            setGrid(rows);
          }}
        >
          Seed
        </UtilButton>
        <UtilButton
          onClick={() => {
            setGrid(createEmptyGrid());
            setIsPlaying(false);
          }}
        >
          Reset
        </UtilButton>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: `repeat(${ROWS}, ${cellSize}px)`,
          gridTemplateColumns: `repeat(${COLS}, ${cellSize}px)`,
        }}
      >
        {grid.map((row, originalRowIndex) =>
          row.map((_col, originalColumnIndex) => (
            <button
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseOver={() =>
                handleMouseOver(originalRowIndex, originalColumnIndex)
              }
              onClick={() =>
                toggleCellState(originalRowIndex, originalColumnIndex)
              }
              key={`${originalRowIndex} - ${originalColumnIndex}`}
              className={twMerge(
                "border border-[#FFFFFF]",
                grid[originalRowIndex]?.[originalColumnIndex]
                  ? "bg-[#4BB543]"
                  : "bg-[#334155]",
              )}
            ></button>
          )),
        )}
      </div>
    </div>
  );
};

export default GameOfLife;
