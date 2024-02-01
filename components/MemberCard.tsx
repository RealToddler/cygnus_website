import Image from "next/image";

const MemberCard = (obj: {
  lastName: string;
  firstName: string;
  desc: string;
}) => {
  return (
    <>
        <div className="md:w-1/6 w-full h-full border-4 border-indigo-700 rounded-lg p-4 text-center">
          <h1 className="text-lg text-w font-semibold mb-3">
            {obj.lastName.toUpperCase()} {obj.firstName}
          </h1>
          <Image
            src={`/${obj.firstName.toLowerCase()}.png`}
            alt="self"
            width={500}
            height={500}
            className="rounded-full"
          />
          <div className="text-center text-base text-w mt-3">{obj.desc}</div>
        </div>
    </>
  );
};

export default MemberCard;
