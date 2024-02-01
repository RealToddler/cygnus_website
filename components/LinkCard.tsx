import Link from "next/link";

const LinkCard = (obj: { label: string; url: string }) => {
  return (
    <>
      <Link href={`${obj.url}`} target="_blank" className="cursor-pointer">
        <div className="bg-indigo-900 rounded-lg hover:scale-95 text-white font-semibold">
          <div className="w-full p-2 text-center">
            <h1>{obj.label}</h1>
          </div>
        </div>
      </Link>
    </>
  );
};

export default LinkCard;
