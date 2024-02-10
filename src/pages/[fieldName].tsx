import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { App } from "components/App";
import { AllFieldData } from "api/types";
import { getFields } from "@/api/farmonaut";

const FieldPage = () => {
  const router = useRouter();
  const { fieldName: fieldNameQuery } = router.query; // Access the URL parameter
  const [fieldId, setFieldId] = useState<number | null>(null);
  const [fieldName, setFieldName] = useState<string | null>(null);

  useEffect(() => {
    setFieldName(fieldNameQuery as string);
    getFields().then((fieldsResp: AllFieldData) => {
      const field = Object.entries(fieldsResp).find(
        ([key, value]) => value.FieldAddress === fieldNameQuery
      );
      if (field != null) {
        setFieldId(parseInt(field[0]));
      }
    });
  }, [fieldNameQuery]);

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
