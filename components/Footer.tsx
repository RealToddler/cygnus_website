import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-russianviolet h-48 md:h-32 pt-8 relative">
        <div className="flex justify-evenly text-xl">
          <div className="hover:underline">Cygnus</div>
          <div className="hover:underline">A Propos</div>
          <div className="hover:underline">Contact</div>
        </div>
        <span className="text-sm flex justify-center pt-4">© 2023 Cygnus. All Rights Reserved.</span>
      </div>
    </>
  );
};

export default Footer;
