import Header from "@/components/Header";
import Footer from "@/components/Footer";

import RessourceContent from "@/components/RessourceContent";

export default function Ressources() {
  return (
    <>
      <Header />
      <div className="bg-timberwolf">
        <div className="space-y-6 pt-4">
          <div className="flex justify-center w-full">
            <div className="justify-center w-10/12 ">
              <div className="space-y-4">
                <h1 className="text-2xl">Documents & Manuels</h1>
                <div
                  className="grid grid-cols-1 gap-4
                md:grid-cols-2 md:gap-24"
                >
                  <RessourceContent />
                  <RessourceContent />
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
