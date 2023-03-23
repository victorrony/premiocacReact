
export default function Wraper({ children }) {
  return (
    <div className="grid md:place-content-center grid-cols-1  md:grid-cols-3 h-screen">
      <div className="col-span-2 bg-white hidden md:block">
        <h1 className="text-xl font-bold underline">foto</h1>
      </div>
      <div className="bg-selected h-full md:h-auto">{children}</div>
    </div>
  );
}
