const RessourceContent = (obj : {title: string, path: string}) => {
  return (
    <>
      <div className="bg-indigo-900 rounded-lg flex mx-3">
        <div className="w-fit p-2 flex items-center">
          <a href={`/${obj.path}`} download={true}>
            <div className="hover:scale-95 hover:text-blue-200 cursor-pointer font-semibold">Télécharger</div>
          </a>
        </div>
        <div className="h-fit p-2 text-center">
          <h1>{obj.title}</h1>
        </div>
      </div>
    </>
  );
};

export default RessourceContent;
