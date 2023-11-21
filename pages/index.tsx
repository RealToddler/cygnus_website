import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <div
        className=" text-white h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: "url(asset1.png)",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>
          <div className="flex items-end space-x-2 self-center">
            <h1 className="text-center flex text-4xl">Galaxy Traveller</h1>
            <h1 className="text-2xl">by Cygnus</h1>
          </div>
          <div className="flex mt-24 justify-center">
            <a href="/asset2.png" download={true}>
              <div className="animate-bounce transition font-semibold ease-in-out hover:text-russianviolet cursor-pointer">
                Télécharger Maintenant
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
