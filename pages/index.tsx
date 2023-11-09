import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
        <div className="flex items-end space-x-2 self-center">
          <h1 className="text-center flex text-4xl">Galaxy Traveller</h1>
          <h1 className="text-2xl">by Cygnus</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}
