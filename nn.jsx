import React from "react";

const nn = () => {
  return (
    <footer className="bg-[#002529] footer bottom-0 relative">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div className="mb-6">{svg}</div>
          <div className="flex items-center mb-8 gap-10">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
          </div>
        </div>
        <div className="font-semibold text-base opacity-60 flex flex-col">
          <p>987 Hillcrest Lane</p>
          <p>Irvine, CA</p>
          <p>California 92714</p>
          <p>Call Us : 949-833-7432</p>
        </div>
        <div className="absolute social"> {MySocial}</div>
        <div className="mt-18">
          <p className="font-semibold  text-base opacity-60 ">
            Copryright {CurrentYear}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default nn;
