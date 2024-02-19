import { getFields, createField, deleteField } from "api/farmonaut";
import {
  Button,
  CircularProgress,
  Input,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Point } from "@/api/types";
import { AllFieldData } from "@/api/types";
import { IconTrash, IconLink } from "@tabler/icons-react";

const Admin = () => {
  const [fields, setFields] = useState<AllFieldData | null>(null);
  const [fieldsLoading, setFieldsLoading] = useState(false);
  const [createFieldLoading, setCreateFieldLoading] = useState(false);
  const [fieldName, setFieldName] = useState("");
  const [points, setPoints] = useState<Point[]>([]);
  const [totalHectares, setTotalHectares] = useState(0);
  useEffect(() => {
    refreshFields();
  }, []);

  const refreshFields = async () => {
    setFieldsLoading(true);
    const fieldsResp = await getFields();
    setFields(fieldsResp);
    setFieldsLoading(false);
  };

  useEffect(() => {
    if (fields != null) {
      setTotalHectares(
        Array.from(Object.entries(fields).values()).reduce(
          (accumulator, currentValue) => accumulator + currentValue[1].hUnits,
          0
        )
      );
    }
  }, [fields]);

  return (
    <div className="p-5 grid col-span-3">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-2">
          <Typography variant="h4">
            Fields (Total Hectares: {totalHectares})
          </Typography>
          <div>
            {fieldsLoading || fields == null ? (
              <CircularProgress />
            ) : (
              <div className="flex flex-col gap-1">
                {Object.entries(fields).map(([key, value], index) => (
                  <div className="flex bg-green-50 max-w-80 items-center justify-between">
                    <div key={index} className="flex flex-col p-1 ">
                      <div>Field Id: {value.FieldID}</div>
                      <div>Name: {value.FieldAddress}</div>
                      <div>Hectares: {value.hUnits}</div>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Button
                        variant="outlined"
                        onClick={async () => {
                          setFieldsLoading(true);
                          await deleteField(value.FieldID);
                          refreshFields();
                        }}
                      >
                        <IconTrash />
                      </Button>
                      <a
                        href={`/${value.FieldAddress}`}
                        target="_blank"
                        className="pr-3" rel="noreferrer"
                      >
                        <IconLink />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {createFieldLoading ? (
          <CircularProgress />
        ) : (
          <div className="flex flex-col gap-1">
            <div className="flex gap-3 items-center">
              <Input
                placeholder="Field name"
                className="bg-white min-w-[300px]"
                onChange={(e) => setFieldName(e.target.value)}
              />
              <div>{fieldName}</div>
            </div>
            <div className="flex gap-3 items-center">
              <TextareaAutosize
                className="min-h-[200px] p-1 min-w-[300px]"
                placeholder={`Coordinates\n22.5726, 88.3639\n60.1282, 18.6435\n37.7749, 122.4194`}
                onChange={(e) => {
                  setPoints(parsePoints(e.target.value));
                }}
              />
              <div>
                {points.map((point, index) => (
                  <div key={index}>
                    Point {index + 1}: {point.Latitude}, {point.Longitude}
                  </div>
                ))}
              </div>
            </div>
            <Button
              variant="outlined"
              onClick={async () => {
                setCreateFieldLoading(true);
                await createField(fieldName, points);
                setCreateFieldLoading(false);
                refreshFields();
              }}
              disabled={fieldName === "" || points.length <= 1}
            >
              Create Field
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const parsePoints = (pointsString: string): Point[] => {
  const points = pointsString.split("\n").map((point) => {
    const [lat, lng] = point.split(",");
    return { Latitude: parseFloat(lat), Longitude: parseFloat(lng) };
  });
  return points.filter((point) => {
    return !isNaN(point.Latitude) && !isNaN(point.Longitude);
  });
};

export default Admin;
