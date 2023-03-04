import { find } from "lodash";
import { Tile } from "../contants/tiles";
import { tiles } from "../contants/tiles";

class TileClass {
  //initializers
  id: number;
  collapsed: boolean;
  entropyScore: number;
  tileBlocks: Tile;

  //local state
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;

  constructor(
    tileBlocks: Tile,
    id: number,
    collapsed: boolean,
    entropyScore: number
  ) {
    this.tileBlocks = tileBlocks;
    this.id = id;
    this.collapsed = collapsed;
    this.entropyScore = entropyScore;

    this.up = !!find(this.tileBlocks[0], { canConnect: true });
    this.down = !!find(this.tileBlocks[2], { canConnect: true });
    this.left = !!find(
      [this.tileBlocks[0][0], this.tileBlocks[1][0], this.tileBlocks[2][0]],
      { canConnect: true }
    );
    this.right = !!find(
      [this.tileBlocks[0][2], this.tileBlocks[1][2], this.tileBlocks[2][2]],
      { canConnect: true }
    );
  }

  getTile() {
    return this.tileBlocks;
  }

  getSidesForTile(tile: Tile) {
    const up = !!find(tile[0], { canConnect: true });
    const down = !!find(tile[2], { canConnect: true });
    const right = !!find([tile[0][2], tile[1][2], tile[2][2]], {
      canConnect: true,
    });
    const left = !!find([tile[0][0], tile[1][0], tile[2][0]], {
      canConnect: true,
    });
    return { up, down, right, left };
  }

  // compareTiles() {
  //   const tileOne = this.getSidesForTile(tiles.tile1);
  //   const tileTwo = this.getSidesForTile(tiles.tile2);
  //   const tileThree = this.getSidesForTile(tiles.tile3);
  //   const tileFour = this.getSidesForTile(tiles.tile4);
  //   const tileFive = this.getSidesForTile(tiles.tile5);
  //   return { tileOne, tileTwo, tileThree, tileFour, tileFive };
  // }

  getNeighborsEntropyScore(
    position: "bottom-left" | "bottom-right" | "top-left" | "top-right",
    orientation: "up" | "down" | "right" | "left"
  ) {
    if (position === "bottom-left") {
      if (this.right === false && orientation === "right") {
        return 1;
      } else if (this.up === false && orientation === "up") {
        return 1;
      } else {
        return 3;
      }
    }

    if (position === "bottom-right") {
      if (this.left === false && orientation === "left") {
        return 1;
      } else if (this.up === false && orientation === "up") {
        return 1;
      } else {
        return 3;
      }
    }


    if (position === "top-right") {
      if (this.left === false && orientation === "left") {
        return 1;
      } else if (this.down === false && orientation === "down") {
        return 1;
      } else {
        return 3;
      }
    }

    if (position === "top-left") {
      if (this.right === false && orientation === "right") {
        return 1;
      } else if (this.down === false && orientation === "down") {
        return 1;
      } else {
        return 3;
      }
    }
    return 0;
  }
}

export { TileClass };
