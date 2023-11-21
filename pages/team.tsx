import MemberCard from "@/components/MemberCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Team() {
  let members = ["Aubin", "Thomas", "Johan", "Noé", "Emilien"];
  return (
    <>
      <Header />
      <div className="md:h-screen">
        <div
          className="flex justify-center items-center bg-tekhelet h-32
          md:h-1/5"
        >
          STORY TELLING
        </div>
        <div className="flex justify-center bg-timberwolf md:h-4/5">
          <div
            className="py-8 space-y-8 items-center
        md:py-0 md:space-y-0 md:flex md:justify-evenly md:w-full"
          >
            {members.map((elem, index) => {
              return <MemberCard key={index} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
