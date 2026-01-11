// src/App.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spin } from "antd";
import DynamicForm from "./components/DynamicForm";
import type { FieldType } from "./types/FieldType";

interface FormSchema {
  formId: string;
  title: string;
  fields: FieldType[];
}

const App: React.FC = () => {
  const [schema, setSchema] = useState<FormSchema | null>(null);

  useEffect(() => {
    axios.get<FormSchema>("/data.json").then((res) => {
      setSchema(res.data);
    });
  }, []);

  if (!schema) return <Spin tip="Loading form..." />;

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 24 }}>
      <h2>{schema.title}</h2>
      <DynamicForm fields={schema.fields} />
    </div>
  );
};

export default App;
