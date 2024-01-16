import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MemberCard from "@/components/MemberCard";
import RessourceContent from "@/components/RessourceContent";

export default function Home() {
  return (
    <>
      <Header />
      <div
        className=" text-white min-h-screen h-auto flex items-center justify-center bg-tekhelet"
        style={{
          backgroundImage: "url('asset6.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <div className="flex items-end space-x-2 self-center">
            <h1 className="text-center flex text-5xl">Galaxy Traveller</h1>
            <h1 className="text-2xl">by Cygnus</h1>
          </div>
          <div className="flex mt-20 justify-center">
            <a href="/asset2.png" download={true}>
              <div className="animate-bounce transition font-semibold ease-in-out hover:text-tekhelet cursor-pointer text-lg">
                Télécharger Maintenant
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        className=" text-white text-xl text-justify min-h-screen h-fit py-8 relative flex items-center justify-center bg-russianviolet"
        id="presentation"
      >
        <div className="px-64 space-y-12 text-justify">
          <div className="text-5xl underline">Présentation</div>
          <div className="text-xl text-justify ">
            &emsp;Votre vaisseau spatial vient de s{"'"}écraser sur une planète
            inconnue et hostile. Vous avez tout essayé pour le faire redémarrer
            mais c{"'"}est peine perdu, il n{"'"}est plus en état de décoller.
            Vous vous retrouvez alors coincé sur cette planète mais par chance
            juste avant l{"'"}impact, vous avez quand même réussi à localiser un
            vaisseau qui pourrait vous permettre de vous échapper. Il semble se
            situer sur une base avancée à quelques planète de là.
            <br />
            <br />
            &emsp;Combattez les habitants des planètes, franchissez les
            obstacles causés par la géographie si particulière de celles-ci et
            profitez en pour récupérer du matériel pour affronter les épreuves
            futures ! Mais attention, votre temps est compté, vos réserves d
            {"'"}oxygène s{"'"}amenuisent de minutes en minutes et il semble qu
            {"'"}un monstre redoutable ai pris possession de la dernière
            planète, celle où votre dernier espoir de vous en sortir vous
            attend…
          </div>
          <div className="border p-8 rounded-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi enim
            nulla nihil sint, tempora dolor voluptatibus aut doloribus aperiam
            dicta commodi quo similique dolore corrupti voluptas accusantium
            numquam ad laboriosam.
          </div>
          <div className="border p-8 rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eaque
            recusandae et quaerat, ad, quae aperiam similique rem voluptas iste
            eligendi corporis voluptate aliquam molestias a magnam ipsam quas
            aut.
          </div>
          <div className="border p-8 rounded-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis aperiam ut numquam obcaecati suscipit. Officiis optio
            id odit at et consequuntur repellendus ipsum, deserunt sequi ipsa
            iure omnis vitae a.
          </div>
        </div>
      </div>
      <div className="md:h-fit text-white bg-tekhelet" id="team">
        <div className="flex text-xl justify-center items-center pb-8 min-h-auto px-64">
          <div className="space-y-12">
            <div className="text-5xl underline pt-8">L{"'"}équipe</div>
            <div>
              <div className="text-center">
                Galaxy Traveller a été développé par l{"'"}entreprise Cygnus qui
                est constituée de 4 jeunes et ambitieux développeurs.
              </div>
              <div className="text-center">
                La fleurissante entreprise est fière de vous présenter son tout
                premier projet.
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full py-8" id="team">
          <div
            className="py-8 space-y-8 md:items-center
        md:py-0 md:space-y-0 md:flex md:justify-center md:space-x-12 md:w-full
        grid grid-cols-1"
          >
            <MemberCard
              key={1}
              lastName="Thome"
              firstName="Aubin"
              desc="Responsable Programmation"
            />
            <MemberCard
              key={2}
              lastName="Blanc"
              firstName="Johan"
              desc="Responsable UI"
            />
            <MemberCard
              key={3}
              lastName="Belperin"
              firstName="Noé"
              desc="Responsable Intelligence Artificielle"
            />
            <MemberCard
              key={4}
              lastName="Defontaine"
              firstName="Emilien"
              desc="Responsable Réseau"
            />
          </div>
        </div>
      </div>
      <div className="bg-rosequartz" id="ressources">
        <div className="space-y-6 pt-4">
          <div className="flex justify-center w-full">
            <div className="justify-center w-10/12 ">
              <div className="space-y-4">
                <h1 className="text-5xl underline mb-20">
                  Documents & Manuels
                </h1>
                <div
                  className="grid grid-cols-1 gap-4
                md:grid-cols-2 md:gap-24"
                >
                  <RessourceContent
                    title="Cahier des charges"
                    path="Galaxy Traveller CDC.pdf"
                  />
                </div>
                <h1 className="text-2xl">Ressources Externes</h1>
                <ol>
                  <li>link1</li>
                  <li>link2</li>
                  <li>link3</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
