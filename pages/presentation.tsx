import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Presentation() {
  return (
    <>
      <Header />
      <div
        className=" text-white text-lg h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: "url(asset5.png)",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="px-96 space-y-4 text-align">
          <div>
            Votre vaisseau spatial vient de s{"'"}écraser sur une planète
            inconnue et hostile. Dans votre malheur, vous avez quand même réussi
            à localiser un vaisseau qui pourrait vous permettre de vous
            échapper.
          </div>
          <div>
            Votre objectif est d{"'"}affronter la planète et ses occupants afin
            de rejoindre ce vaisseau avant que vous n{"'"}ayez plus d{"'"}oxyène
            !
          </div>
          <div>
            Combattez les habitants des planètes et franchissez les obstacles
            que celles-ci vous tendent en un temps record afin de garder de l
            {"'"}
            oxygène en réserve si jamais vous deviez à nouveau vous retrouver
            dans une situation périeuse...
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
