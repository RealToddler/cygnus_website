import Image from "next/image";

const RessourceContent = (obj: { title: string; path: string }) => {
  return (
    <>
      <div className="bg-blackv rounded-lg flex mx-3 text-white">
        <div className="w-fit p-2 flex items-center">
          <a href={`/${obj.path}`} download={true}>
            <svg
              className="h-7 w-7 text-white transition duration-300 ease-in-out transform hover:scale-110"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />{" "}
              <polyline points="7 11 12 16 17 11" />{" "}
              <line x1="12" y1="4" x2="12" y2="16" />
            </svg>
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
