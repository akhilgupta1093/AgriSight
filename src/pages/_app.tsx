import { AppProps } from "next/app";
import "globals.css";
import { useContext } from "react";
import Link from "next/link";
import { FieldNameProvider, useFieldName } from "@/components/FieldNameContext";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <FieldNameProvider>
      <div className="min-h-screen w-full bg-gray-100">
        <Bar />
        <div className="min-h-full w-full @container/page">
          <Component {...pageProps} />
        </div>
      </div>
    </FieldNameProvider>
  );
};

const Bar = () => {
  const { fieldName } = useFieldName();
  return (
    <div className="bg-green-50 p-4 pr-10 flex items-center justify-between">
      <div className="flex gap-1 items-center">
        <img src="/leaf.ico" alt="logo" className="h-10 w-10" />
        <h1 className="text-4xl">GrowSight</h1>
      </div>
      <div className="flex gap-4">
        <Link href={`/${fieldName}`}>
          <div className="text-blue-600 hover:text-blue-800">Home</div>
        </Link>
        <Link href={`/${fieldName}/detect`}>
          <div className="text-blue-600 hover:text-blue-800">Detect</div>
        </Link>
      </div>
    </div>
  );
};

export default MyApp;
