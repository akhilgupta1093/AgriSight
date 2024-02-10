import { AppProps } from "next/app";
import "globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="bg-green-50 p-4 flex gap-1 items-center">
        <img src="/leaf.ico" alt="logo" className="h-10 w-10" />
        <h1 className="text-4xl">GrowSight</h1>
      </div>
      <div className="min-h-full w-full @container/page">
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default MyApp;
