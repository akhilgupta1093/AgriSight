import React from "react";
// import images from assets/akhil.jpg and assets/arvind.jpg
import akhil from "assets/akhil.jpg";
import arvind from "assets/arvind.jpg";
import Image from "next/image";

const Home = () => {
  return (
    <div className="mx-auto h-full w-full max-w-screen-2xl flex flex-col gap-10 p-5 items-center justify-center">
      <h1 className="text-2xl mt-20">
        Let us help make your vineyard maximally productive using precision
        agriculture! 🍇
      </h1>
      <div className="flex gap-1">
        <Image src={akhil} alt="Akhil" width={200} height={200} />
        <Image src={arvind} alt="Arvind" width={200} height={200} />
      </div>
      <h1 className="text-xl">
        Email us{" "}
        <a
          href="mailto:arvindveluvali@gmail.com,akhilg1093@gmail.com"
          className="text-blue-500"
        >
          here
        </a>
        .
      </h1>
    </div>
  );
};

export default Home;
