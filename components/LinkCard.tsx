import Link from "next/link";

const LinkCard = (obj: { label: string; url: string }) => {
  return (
    <>
      <Link href={`${obj.url}`} target="_blank" className="cursor-pointer">
        <div className="bg-tekhelet rounded-lg flex hover:scale-95 text-white text-justify">
          <div className="w-fit p-2">
            <h1>{obj.label}</h1>
          </div>
        </div>
      </Link>
    </>
  );
};

export default LinkCard;
