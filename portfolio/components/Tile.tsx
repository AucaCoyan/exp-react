interface Title {
  title: string;
  props: any[];
}

export default function Tile(props: any) {
  return (
    <>
      <div
        className={`grid items-center justify-center p-10 text-center rounded-lg bg-[#eee] ${props.className}`}
      >
        <h2 className="text-3xl font-bold my-7">{props.title}</h2>
        {props.children}
      </div>
    </>
  );
}
