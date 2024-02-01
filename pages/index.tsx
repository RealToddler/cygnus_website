import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MemberCard from "@/components/MemberCard";
import RessourceContent from "@/components/RessourceContent";
import LinkCard from "@/components/LinkCard";

export default function Home() {
  return (
    <>
      <Header />
      <div
        className="text-white min-h-screen h-auto flex items-center justify-center bg-tekhelet"
        style={{
          backgroundImage: "url('asset6.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-white">
          <div className="flex items-end space-x-2 self-center">
            <h1 className="text-center flex text-8xl font-horizon">
              Galaxy Traveller
            </h1>
          </div>
          <div className="flex mt-20 justify-center">
            <a href="/asset7.png" download={true}>
              <div className="animate-bounce transition font-semibold ease-in-out hover:text-tekhelet cursor-pointer text-lg">
                Télécharger Maintenant
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        className="text-white text-xl text-justify min-h-screen h-fit py-8 relative flex items-center justify-center bg-indigo-700"
        id="presentation"
      >
        <div className="md:px-48 px-8 space-y-12 text-justify text-white">
          <div className="text-5xl font-bold">Présentation</div>
          <div className="md:text-xl text-justify">
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
          <div className="border-2 p-8 rounded-lg">
            <div className="text-center font-bold text-2xl">Rapidité</div>
            <br />
            <div className="text-justify">
              Atteignez le vaisseau avant que votre réserve d{"'"}oxygène ne s
              {"'"}épuise. Assurez-vous de rejoindre votre destination spatiale
              dans les temps.
            </div>
          </div>
          <div className="border-2 p-8 rounded-lg">
            <div className="text-center font-bold text-2xl font">Combat</div>
            <br />
            <div className="text-justify">
              Protégez-vous contre les habitants des planètes que vous
              traversez. Faites face aux populations rencontrées lors de votre
              exploration interplanétaire. Combattez les civilisations
              planétaires pendant votre traversée cosmique.
            </div>
          </div>
          <div className="border-2 p-8 rounded-lg">
            <div className="text-center font-bold text-2xl">Agilité</div>
            <br />
            <div className="text-justify">
              Exprimez vos compétences en maîtrisant les spécificités des
              planètes. Faites valoir vos talents en explorant les reliefs
              cosmiques. Laissez vos skills s{"'"}exprimer en apprivoisant les
              terrains variés des astres. Domptez les reliefs planétaires et
              faites rayonner vos capacités.
            </div>
          </div>
        </div>
      </div>
      <div className="md:h-fit text-white bg-indigo-900" id="team">
        <div className="flex text-xl items-center pb-8 min-h-auto md:px-64 px-8">
          <div className="space-y-12">
            <div className="text-5xl font-bold pt-8">L{"'"}équipe</div>
            <div>
              <div className="text-center">
                Galaxy Traveller a été développé par l{"'"}entreprise Cygnus constituée de 4 jeunes et ambitieux développeurs.
              </div>
              <br />
              <div className="text-center">
                Nous sommes fières de vous présenter notre tout
                premier projet.
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full py-8 text-white" id="team">
          <div
            className="pb-4 gap-4 grid grid-cols-1 px-16 md:px-0
        md:py-0 md:space-y-0 md:flex justify-center md:space-x-12 md:items-center md:w-full"
          >
            <MemberCard
              key={1}
              lastName="Thomé"
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
      <div className="bg-indigo-700 pb-8 text-white" id="ressources">
        <div className="space-y-6">
          <div className="flex w-full">
            <div className="justify-center w-full">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold py-8 md:px-64 px-8 text-white">
                  Ressources
                </h1>
                <div className="w-full md:px-32 px-8 space-y-4">
                  <div className="text-xl font-semibold">Documents & Manuels</div>
                  <div className="md:flex md:justify-between md:w-full space-y-4 md:space-y-0">
                    <RessourceContent
                      title="Cahier des charges"
                      path="Galaxy Traveller CDC.pdf"
                    />
                    <RessourceContent title="Manuel d'installation" path="/" />
                    <RessourceContent title="Rapport de soutenance" path="/" />
                    <RessourceContent title="Rapport de projet" path="/" />
                  </div>
                </div>
                <div className="w-full md:px-32 px-8 space-y-4 py-4 font-semibold">
                  <div className="text-xl">Tutoriels</div>
                  <div className="flex justify-center font-semibold">
                    <div className="space-y-4">
                      <div>
                        <LinkCard
                          label="Première playlist de Tutos Unity (IA & Mécaniques de combat)"
                          url="https://www.youtube.com/watch?v=eTulYE72ixc&list=PLUWxWDlz8PYIvzRTHyvx54tgWTCkgZzkZ"
                        />
                      </div>
                      <div className="">
                        <LinkCard
                          label="Seconde playlist de Tutos Unity (déplacements & plateformes)"
                          url="https://www.youtube.com/watch?v=n0GQL5JgJcY&list=PLrnPJCHvNZuB5ATsJZLKX3AW4V9XaIV9b"
                        />
                      </div>
                      <div>
                        <LinkCard
                          label="Troisième playlist de Tutos Unity (Réseau avec Photon)"
                          url="https://www.youtube.com/watch?v=H7r_rgKAlLA&list=PLpfOedZZax4xSyUKOk17b6NIL5dO7gWo-"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:px-32 px-8 space-y-4 py-4">
                  <div className="text-xl text-white font-semibold">Documentations</div>
                  <div className="flex justify-center">
                    <div className="space-y-4">
                      <div>
                        <LinkCard
                          label="Documentation Photon"
                          url="https://doc.photonengine.com/pun/current/getting-started/pun-intro"
                        />
                      </div>
                      <div className="">
                        <LinkCard
                          label="Documentation Unity"
                          url="https://docs.unity.com/"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
