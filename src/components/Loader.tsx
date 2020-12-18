import React from "react";

interface Props {}

const Loader: React.FC<Props> = (props) => {
  return (
    <div className="fixed min-h-screen z-50 bg-opacity-80 w-screen top-0 left-0 bg-gray-300 flex justify-center items-center">
      {/* <img src={Image} alt="Loader" className="w-20 animate-spin text-blue-500"/> */}

      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="spinner"
        className="svg-inline--fa fa-spinner fa-w-16 w-20 animate-ping"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path xmlns="http://www.w3.org/2000/svg" fill="rgba(59, 130, 246,1)" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"/>
      </svg>
    </div>
  );
};
export default Loader;
