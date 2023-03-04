export interface IBlock {
  id: number;
  canConnect: boolean;
}

export type Tile = IBlock[][];


const tiles = {
  tile1: [
    [
      { id: 1, canConnect: false },
      { id: 1, canConnect: false },
      { id: 1, canConnect: false },
    ],
    [
      { id: 1, canConnect: false },
      { id: 1, canConnect: false },
      { id: 1, canConnect: false },
    ],
    [
      { id: 1, canConnect: false },
      { id: 1, canConnect: false },
      { id: 1, canConnect: false },
    ],
  ],
  tile2: [
    [
      { id: 1, canConnect: false },
      { id: 2, canConnect: true },
      { id: 1, canConnect: false },
    ],
    [
      { id: 2, canConnect: true },
      { id: 2, canConnect: false },
      { id: 2, canConnect: true },
    ],
    [
      { id: 1, canConnect: false },
      { id: 1, canConnect: false },
      { id: 1, canConnect: false },
    ],
  ],

  tile3: [
    [
      { id: 1, canConnect: false },
      { id: 1, canConnect: false },
      { id: 1, canConnect: false },
    ],
    [
      { id: 2, canConnect: true },
      { id: 2, canConnect: false },
      { id: 2, canConnect: true },
    ],
    [
      { id: 1, canConnect: false },
      { id: 2, canConnect: true },
      { id: 1, canConnect: false },
    ],
  ],

  tile4: [
    [
      { id: 1, canConnect: false },
      { id: 2, canConnect: true },
      { id: 1, canConnect: false },
    ],
    [
      { id: 1, canConnect: false },
      { id: 2, canConnect: false },
      { id: 2, canConnect: true },
    ],
    [
      { id: 1, canConnect: false },
      { id: 2, canConnect: true },
      { id: 1, canConnect: false },
    ],
  ],

  tile5: [
    [
      { id: 1, canConnect: false },
      { id: 2, canConnect: true },
      { id: 1, canConnect: false },
    ],
    [
      { id: 2, canConnect: true },
      { id: 2, canConnect: false },
      { id: 1, canConnect: false },
    ],
    [
      { id: 1, canConnect: false },
      { id: 2, canConnect: true },
      { id: 1, canConnect: false },
    ],
  ],
};

export { tiles };
