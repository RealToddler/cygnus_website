import dateFormat, { masks } from "dateformat";

const RessourceContent = () => {
  return (
    <>
      <div className="bg-tekhelet rounded-lg flex">
        <div className="w-fit p-2">
          <a href="/asset2.png" download={true}>
            <div
              className="
            hover:font-semibold cursor-pointer"
            >
              Télécharger
            </div>
          </a>
        </div>
        <div className="p-2">
            <h1>TITRE</h1>
        </div>
      </div>
    </>
  );
};

export default RessourceContent;
