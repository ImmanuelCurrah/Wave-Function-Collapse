import { IBlock } from "../../contants/tiles";
import { Block } from "../block/Block";

const Tile: Function = (props: any) => {
  return (
    <div>
      <div>left: {props.tile.left.toString()}</div>
      <div>right: {props.tile.right.toString()}</div>
      <div>up: {props.tile.up.toString()}</div>
      <div>down: {props.tile.down.toString()}</div>
      <div className="fixed"> {props.score}</div>
      {props.tile.getTile().map((row: [], rowId: number) => {
        return (
          <div className="flex row" key={rowId}>
            {row.map((b: IBlock, i) => {
              if (b.id !== 1) {
                return <Block key={i} color={"bg-orange-500"} />;
              }
              return <Block key={i} color={"bg-orange-100"} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
export default Tile;
