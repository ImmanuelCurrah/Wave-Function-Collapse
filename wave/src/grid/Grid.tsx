import Tile from "../tile-components/tile/Tile";
import { useGrid } from "../hooks/useGrid";
import { TileClass } from "../classes/TileClass";


const Grid: Function = () => {
  const { grid, collapse } = useGrid();

  function handleCollapse() {
    collapse();
  }

  //use to dynamically render the grid later on boyo
  //   console.log(Array.of([1,1],[1,1]))

  return grid.map((row, rowId) => {
    return (
      <div className="flex row" key={rowId} onClick={handleCollapse}>
        {row.map((tile: TileClass, tileId: number) => {
          if (tile.id === 1) {
            return <Tile key={tileId} tile={tile} score={tile.entropyScore} />;
          } else if (tile.id === 2) {
            return <Tile key={tileId} tile={tile} score={tile.entropyScore} />;
          } else if (tile.id === 3) {
            return <Tile key={tileId} tile={tile} score={tile.entropyScore} />;
          } else if (tile.id === 4) {
            return <Tile key={tileId} tile={tile} score={tile.entropyScore} />;
          } else if (tile.id === 5) {
            return <Tile key={tileId} tile={tile} score={tile.entropyScore} />;
          }
          return <div>ya fucked up</div>;
        })}
      </div>
    );
  });
};

export default Grid;
