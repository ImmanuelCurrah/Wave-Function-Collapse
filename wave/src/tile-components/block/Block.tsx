export function Block(props: any) {
  const { color } = props;
  return <div className={`w-10 h-10 ${color}`}></div>;
}
