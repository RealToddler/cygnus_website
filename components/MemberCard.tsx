import Image from "next/image";

const MemberCard = (obj : {lastName : string, firstName : string, desc: string}) => {
  return (
    <>
      <div className="md:w-1/6 w-4/12 bg-rosequartz rounded-lg p-4 space-y-2 text-justify border border-tekhelet">
        <Image src={`/${obj.firstName.toLowerCase()}.png`} alt="self" width={500} height={500} 
        className="rounded h-96"/>
        <h1 className="text-lg text-russianviolet">{obj.lastName.toUpperCase()} {obj.firstName}</h1>
        <div className="text-base">
            {obj.desc}
        </div>
      </div> 
    </>
  );
};

export default MemberCard;
