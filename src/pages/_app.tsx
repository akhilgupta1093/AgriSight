import { AppProps } from "next/app";
import "globals.css";
import Link from "next/link";
import { FieldNameProvider, useFieldName } from "@/components/FieldNameContext";
import { Chip } from "@mui/material";
import { fieldNamePretty } from "@/api/utils";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const { setFieldName: setFieldNameContext } = useFieldName();
  const { fieldName: fieldNameQuery } = router.query;
  if (fieldNameQuery != null) setFieldNameContext(fieldNameQuery as string);

  const { fieldName } = useFieldName();
  return (
    <div className="bg-green-50 p-4 pr-10 flex flex-col items-center justify-between gap-2 sm:flex-row">
      <div className="flex gap-1 items-center">
        <img src="/leaf.ico" alt="logo" className="h-10 sm:w-10" />
        <h1 className="text-l sm:text-4xl">GrowSight</h1>
      </div>
      {fieldName != null && fieldName !== "" && (
        <div className="flex gap-4 flex-col sm:flex-row">
          <Chip
            label={
              <Link href={`/${fieldName}`}>
                <div className="text-blue-600 hover:text-blue-800">
                  {fieldNamePretty(fieldName)}
                </div>
              </Link>
            }
          />
          <Chip
            label={
              <Link href={`/${fieldName}/detect`}>
                <div className="flex gap-1 items-center text-blue-600 hover:text-blue-800">
                  <span>Detect disease</span>
                  <span className="font-bold">(new!)</span>
                </div>
              </Link>
            }
          />
        </div>
      )}
    </div>
  );
};

export default MyApp;
