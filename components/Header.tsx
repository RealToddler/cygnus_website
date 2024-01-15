import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className=" bg-rosequartz h-fit flex p-4 justify-evenly md:justify-between md:pr-32 md:pl-16">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="cygnus logo"
            width={500}
            height={500}
            className="h-[90px] w-[90px]"
          />
        </Link>
        <div className="flex self-center space-x-4 text-xl">
          <Link href="/project">
            <div
              className="border-b-2 border-rosequartz
            transition duration-250 ease-linear
            hover:border-russianviolet
            cursor-pointer"
            >
              Présentation
            </div>
          </Link>
          <Link href="/team">
            <div
              className="border-b-2 border-rosequartz
            transition duration-250 ease-linear
            hover:border-russianviolet
            cursor-pointer"
            >
              Equipe
            </div>
          </Link>
          <Link href="/ressources">
            <div
              className="border-b-2 border-rosequartz
            transition duration-250 ease-linear
            hover:border-russianviolet
            cursor-pointer"
            >
              Ressources
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
