import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MemberCard from "@/components/MemberCard";
import RessourceContent from "@/components/RessourceContent";

export default function Home() {
  return (
    <>
      <Header />
      <div className=" text-white min-h-screen h-auto flex items-center justify-center bg-tekhelet">
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
      <div
        className=" text-white text-xl text-justify min-h-screen h-fit py-8 relative flex items-center justify-center bg-russianviolet"
        id="presentation"
      >
        <div className="px-96 space-y-12 text-justify">
          <div className="text-5xl underline">Présentation</div>
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
          <div className="text-xl text-justify ">
            Votre vaisseau spatial vient de s{"'"}écraser sur une planète
            inconnue et hostile. Dans votre malheur, vous avez quand même réussi
            à localiser un vaisseau qui pourrait vous permettre de vous
            échapper. Votre objectif est d{"'"}affronter la planète et ses
            occupants afin de rejoindre ce vaisseau avant que vous n{"'"}ayez
            plus d{"'"}oxyène ! Combattez les habitants des planètes et
            franchissez les obstacles que celles-ci vous tendent en un temps
            record afin de garder de l{"'"}
            oxygène en réserve si jamais vous deviez à nouveau vous retrouver
            dans une situation périeuse...
          </div>
        </div>
      </div>
      <div className="md:min-h-screen md:h-fit text-white" id="team">
        <div className="flex text-xl justify-center bg-tekhelet items-center pb-8 min-h-auto">
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
        <div className="flex justify-center bg-timberwolf w-full py-8" id="team">
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
