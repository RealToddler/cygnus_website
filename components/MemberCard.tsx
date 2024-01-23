import Image from "next/image";

const MemberCard = (obj: {
  lastName: string;
  firstName: string;
  desc: string;
}) => {
  return (
    <>
        <div className="md:w-1/6 w-fit max-h-1/3 md:h-auto bg-timberwolf rounded-lg p-4 space-y-2 text-justify border border-tekhelet">
          <div className="md:h-full">
            <Image
              src={`/${obj.firstName.toLowerCase()}.png`}
              alt="self"
              width={500}
              height={500}
              className="rounded-full border-tekhelet border-2 md:h-full md:w-full"
            />
            <h1 className="text-lg text-tekhelet">
              {obj.lastName.toUpperCase()} {obj.firstName}
            </h1>
            <div className="w-full text-sm text-russianviolet">{obj.desc}</div>
          </div>
        </div>
    </>
  );
};

export default MemberCard;
