import { useState } from "react";
import { isEqual } from "lodash";
import { Grid, pureGrid } from "../contants/grid";
import { TileClass } from "../classes/TileClass";
import { Tile, tiles } from "../contants/tiles";

interface Tracker {
  tile?: TileClass;
  i?: number;
  j?: number;
}

const idToTileMap = new Map<number, Tile>([
  [1, tiles.tile1],
  [2, tiles.tile2],
  [3, tiles.tile3],
  [4, tiles.tile4],
  [5, tiles.tile5],
]);

const useGrid = () => {
  const [grid, setGrid] = useState<Grid>([
    [
      new TileClass(tiles.tile1, 1, false, 4),
      new TileClass(tiles.tile1, 1, false, 4),
    ],
    [
      new TileClass(tiles.tile1, 1, false, 4),
      new TileClass(tiles.tile1, 1, false, 4),
    ],
  ]);
  const [lastSetTile, setLastSetTile] = useState<TileClass | null>(null);

  function handleFirstCollapse(): void {
    const randomStart = Math.round(Math.random() * 3) + 2;
    const rowSelector = Math.round(Math.random());
    const tileSelector = Math.round(Math.random());

    const newGrid = grid.slice();
    const newTilePoints = idToTileMap.get(randomStart);

    if (newTilePoints) {
      const newTile = new TileClass(newTilePoints, randomStart, true, 0);
      setLastSetTile(newTile);
      newGrid[rowSelector][tileSelector] = newTile;

      if (rowSelector + 1 > 1 && tileSelector + 1 > 1) {
        newGrid[rowSelector - 1][tileSelector].entropyScore =
          newTile.getNeighborsEntropyScore("bottom-right", "up");

        newGrid[rowSelector][tileSelector - 1].entropyScore =
          newTile.getNeighborsEntropyScore("bottom-right", "left");
      } else if (rowSelector + 1 > 1 && tileSelector + 1 <= 1) {
        newGrid[rowSelector - 1][tileSelector].entropyScore =
          newTile.getNeighborsEntropyScore("bottom-left", "up");

        newGrid[rowSelector][tileSelector + 1].entropyScore =
          newTile.getNeighborsEntropyScore("bottom-left", "right");
      } else if (rowSelector + 1 <= 1 && tileSelector + 1 > 1) {
        newGrid[rowSelector + 1][tileSelector].entropyScore =
          newTile.getNeighborsEntropyScore("top-right", "down");

        newGrid[rowSelector][tileSelector - 1].entropyScore =
          newTile.getNeighborsEntropyScore("top-right", "left");
      } else {
        newGrid[rowSelector + 1][tileSelector].entropyScore =
          newTile.getNeighborsEntropyScore("top-left", "down");

        newGrid[rowSelector][tileSelector + 1].entropyScore =
          newTile.getNeighborsEntropyScore("top-left", "right");
      }
    }

    setGrid(newGrid);
  }

  function handleCollapse() {
    const lengthChecker: number = grid[0].length;
    let lowEntTracker: Tracker = {
      tile: undefined,
      i: undefined,
      j: undefined,
    };
    const entLevelThree: TileClass[] = [];
    const newGrid = grid.slice();
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        const tileinQuestion = grid[i][j];
        if (tileinQuestion.entropyScore === 1) {
          lowEntTracker = {
            tile: grid[i][j],
            i,
            j,
          };
        } else if (tileinQuestion.entropyScore === 3) {
          entLevelThree.push(tileinQuestion);
        }
      }
    }

    if (
      lowEntTracker.tile !== undefined &&
      lowEntTracker.i !== undefined &&
      lowEntTracker.j !== undefined
    ) {
      if (lastSetTile?.down === false) {
        const newTilePoints = idToTileMap.get(3);
        if (newTilePoints) {
          newGrid[lowEntTracker.i][lowEntTracker.j] = new TileClass(
            newTilePoints,
            3,
            true,
            0
          );
          setGrid(newGrid);
        }
      } else if (lastSetTile?.up === false) {
        const newTilePoints = idToTileMap.get(2);

        if (newTilePoints) {
          const newTile = new TileClass(newTilePoints, 2, true, 0);
          newGrid[lowEntTracker.i][lowEntTracker.j] = newTile;
          newGrid[lowEntTracker.i][lowEntTracker.j - 1].entropyScore =
            newTile.getNeighborsEntropyScore("top-right", "left");
          setGrid(newGrid);
        }
      }
    }
    console.log(entLevelThree, lengthChecker);
  }

  function collapse(): void {
    if (isEqual(grid, pureGrid)) {
      handleFirstCollapse();
    } else {
      handleCollapse();
    }
  }

  return { grid, collapse };
};

export { useGrid };
