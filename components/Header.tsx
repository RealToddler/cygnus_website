import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="fixed bg-blackv w-full z-10 h-fit flex p-2 justify-evenly md:justify-between md:pr-32 md:pl-16">
        <Link href="/" className="">
          <Image
            src="/logo_white.png"
            alt="cygnus logo"
            width={80}
            height={80}
            className="text-center flex p-2"
          />
        </Link>
        <div className="flex self-center space-x-8 md:text-xl font-bold text-white">
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
