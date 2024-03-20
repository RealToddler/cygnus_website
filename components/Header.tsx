import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="fixed bg-indigo-900 w-full z-10 h-fit flex p-4 justify-evenly md:justify-between md:pr-32 md:pl-16 text-white border-b-4">
        <Link href="/" className="">
          <Image
            src="/logo_white.png"
            alt="cygnus logo"
            width={500}
            height={500}
            className="h-[67px] w-[67px]"
          />
        </Link>
        <div className="flex self-center space-x-4 md:text-2xl font-semibold">
          <div
            className="border-b-2 border-indigo-900
            transition duration-250 ease-linear
            hover:border-rosequartz
            cursor-pointer"
            onClick={() =>
              document
                .getElementById("presentation")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Présentation
          </div>
          <div
            className="border-b-2 border-indigo-900
            transition duration-250 ease-linear
            hover:border-rosequartz
            cursor-pointer"
            onClick={() =>
              document
                .getElementById("team")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Équipe
          </div>
          <div
            className="border-b-2 border-indigo-900
            transition duration-250 ease-linear
            hover:border-rosequartz
            cursor-pointer"
            onClick={() =>
              document
                .getElementById("ressources")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Ressources
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
