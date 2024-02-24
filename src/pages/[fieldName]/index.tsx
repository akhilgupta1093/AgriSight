import { useEffect, useState } from "react";
import { App } from "components/App";
import { AllFieldData } from "api/types";
import { getFields } from "@/api/farmonaut";
import { CircularProgress } from "@mui/material";
import { useFieldName } from "@/components/FieldNameContext";

const FieldPage = () => {
  const { fieldName: fieldNameInit } = useFieldName();
  const [fieldId, setFieldId] = useState<number | null>(null);
  const [fieldName, setFieldName] = useState<string | null>(fieldNameInit);
  const [isLoading, setIsLoading] = useState(false);

  const _getFields = async () => {
    setIsLoading(true);
    const fieldsResp: AllFieldData = await getFields();
    const field = Object.entries(fieldsResp).find(
      ([key, value]) => value.FieldAddress === fieldNameInit
    );
    if (field != null) {
      setFieldId(parseInt(field[0]));
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (fieldNameInit) {
      setFieldName(fieldNameInit as string);
      _getFields();
    }
  }, [fieldNameInit]);

  if (isLoading) {
    return (
      <div className="text-center mt-[40vh]">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      {fieldName != null && fieldId != null && (
        <App fieldId={fieldId} fieldName={fieldName} />
      )}
    </div>
  );
};

export default FieldPage;
