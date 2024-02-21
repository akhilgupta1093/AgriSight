import React, { createContext, useContext, useState, ReactNode } from "react";

interface FieldNameContextType {
  fieldName: string;
  setFieldName: (name: string) => void;
}

const FieldNameContext = createContext<FieldNameContextType | undefined>(
  undefined
);

export const useFieldName = () => {
  const context = useContext(FieldNameContext);
  if (context === undefined) {
    throw new Error("useFieldName must be used within a FieldNameProvider");
  }
  return context;
};

export const FieldNameProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [fieldName, setFieldName] = useState<string>("");

  return (
    <FieldNameContext.Provider value={{ fieldName, setFieldName }}>
      {children}
    </FieldNameContext.Provider>
  );
};
