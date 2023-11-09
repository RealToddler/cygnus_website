import Image from "next/image";

const MemberCard = () => {
  return (
    <>
      <div className="w-72 bg-rosequartz h-96 rounded-lg p-4 space-y-2 text-justify border border-tekhelet">
        <Image src="/asset2.png" alt="self" width={500} height={500} 
        className="h-3/5 rounded"/>
        <h1 className="text-lg text-russianviolet">FIRSTNAME Name</h1>
        <div className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ex, consectetur optio atque impedit adipisci.
        </div>
      </div> 
    </>
  );
};

export default MemberCard;
