import MemberCard from "@/components/MemberCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Team() {
  let members = ["Aubin", "Thomas", "Johan", "Noé", "Emilien"];
  return (
    <>
      <Header />
      <div className="h-screen">
        <div
          className="flex justify-center items-center h-1/5 bg-tekhelet"
        >
          STORY TELLING
        </div>
        <div className="flex justify-evenly items-center h-4/5 bg-timberwolf">
          {members.map((elem, index) => {
            return <MemberCard key={index} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
