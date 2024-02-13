import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { App } from "components/App";
import { AllFieldData } from "api/types";
import { getFields } from "@/api/farmonaut";
import { CircularProgress } from "@mui/material";

const FieldPage = () => {
  const router = useRouter();
  const { fieldName: fieldNameQuery } = router.query; // Access the URL parameter
  const [fieldId, setFieldId] = useState<number | null>(null);
  const [fieldName, setFieldName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setFieldName(fieldNameQuery as string);
    _getFields();
  }, [fieldNameQuery]);

  const _getFields = async () => {
    setIsLoading(true);
    const fieldsResp: AllFieldData = await getFields();
    const field = Object.entries(fieldsResp).find(
      ([key, value]) => value.FieldAddress === fieldNameQuery
    );
    if (field != null) {
      setFieldId(parseInt(field[0]));
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="text-center mt-[40vh]">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      {fieldName != null && fieldId != null ? (
        <App fieldId={fieldId} fieldName={fieldName} />
      ) : (
        <div>{fieldNameQuery} Not Found</div>
      )}
    </div>
  );
};

export default FieldPage;
