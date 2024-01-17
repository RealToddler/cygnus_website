const RessourceContent = (obj : {title: string, path: string}) => {
  return (
    <>
      <div className="bg-tekhelet rounded-lg flex">
        <div className="w-fit p-2">
          <a href={`/${obj.path}`} download={true}>
            <div
              className="
            hover:font-semibold cursor-pointer"
            >
              Télécharger
            </div>
          </a>
        </div>
        <div className="p-2">
            <h1>{obj.title}</h1>
        </div>
      </div>
    </>
  );
};

export default RessourceContent;
