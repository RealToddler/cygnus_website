import MemberCard from "@/components/MemberCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Team() {
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
        <div className="flex justify-center bg-timberwolf md:h-4/5 w-full">
          <div
            className="py-8 space-y-8 md:items-center
        md:py-0 md:space-y-0 md:flex md:justify-center md:space-x-12 md:w-full
        grid grid-cols-1"
          >
            <MemberCard
              key={1}
              lastName="Thome"
              firstName="Aubin"
              desc="aller zou"
            />
            <MemberCard
              key={2}
              lastName="Blanc"
              firstName="Johan"
              desc="Premier deg"
            />
            <MemberCard
              key={3}
              lastName="Belperin"
              firstName="Noé"
              desc="C't'ap"
            />
            <MemberCard
              key={4}
              lastName="Defontaine"
              firstName="Emilien"
              desc="C'est ça qu'faut s'dire"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
