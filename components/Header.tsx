import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className=" bg-rosequartz h-fit flex p-4 justify-between pr-32">
        <Image
          src="/logo.png"
          alt="cygnus logo"
          width={500}
          height={500}
          className="h-[90px] w-[90px]"
        ></Image>
        <div className="flex self-center space-x-4 text-xl">
          <div
            className="border-b-2 border-rosequartz
            transition duration-250 ease-linear
            hover:border-russianviolet
            cursor-pointer"
          >
            Projet
          </div>
          <div
            className="border-b-2 border-rosequartz
            transition duration-250 ease-linear
            hover:border-russianviolet
            cursor-pointer"
          >
            Equipe
          </div>
          <div
            className="border-b-2 border-rosequartz
            transition duration-250 ease-linear
            hover:border-russianviolet
            cursor-pointer"
          >
            Ressources
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
