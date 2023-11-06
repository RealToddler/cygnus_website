import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        className=" text-white h-full relative flex items-center justify-center"
        style={{
          backgroundImage: "url(asset1.png)",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex items-end space-x-2 self-center">
          <h1 className="text-center flex text-4xl">Galaxy Traveller</h1>
          <h1 className="text-2xl">by Cygnus</h1>
        </div>
      </div>
    </>
  );
}
