import { createField } from "pages/api/createField";
import { getFields } from "@/pages/api/getFields";
import { FIELD_ID_2 } from "@/CONSTANTS";
import { Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import type { field } from "@prisma/client";
import { FIELD_ID } from "../../CONSTANTS";

const Admin = () => {
  const [fields, setFields] = useState<field[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [createFieldLoading, setCreateFieldLoading] = useState(false);
  useEffect(() => {
    getFields().then((fieldsResp) => {
      console.log("fields resp", fieldsResp);
      setFields(fieldsResp);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="p-5 grid col-span-3">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-2">
          <Typography variant="h4">Fields</Typography>
          <div>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <div className="flex flex-col gap-1">
                {fields.map((field, index) => (
                  <div
                    key={index}
                    className="bg-green-50 flex flex-col p-1 max-w-60"
                  >
                    <div>Id: {field.id}</div>
                    <div>Name: {field.name}</div>
                    <div>Field Id: {field.fieldId.toString()}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <Button
          variant="outlined"
          onClick={() => {
            createField("Amulet Farms", FIELD_ID_2);
          }}
        >
          Create Field
        </Button>
      </div>
    </div>
  );
};

export default Admin;
