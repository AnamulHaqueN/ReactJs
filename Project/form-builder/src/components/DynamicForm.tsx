// src/components/DynamicForm.tsx
import React, { useEffect, useState } from "react";
import { Form, Input, Select, Radio, Checkbox, Button, message } from "antd";
import type { FieldType } from "../types/FieldType.ts";
import { evaluateCondition } from "../utils/evaluateCondition.ts";

interface DynamicFormProps {
  fields: FieldType[];
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields }) => {
  const [form] = Form.useForm();
  const [visibleFields, setVisibleFields] = useState<FieldType[]>(fields);

  // Function to re-calculate which fields should be visible
  const updateVisibleFields = (allValues: any) => {
    const filtered = fields.filter((field) =>
      evaluateCondition(field.condition, allValues)
    );
    setVisibleFields(filtered);
  };

  useEffect(() => {
    const initialValues = form.getFieldsValue(true);
    updateVisibleFields(initialValues);
  }, []);

  const handleValuesChange = (changedValues: any, allValues: any) => {
    updateVisibleFields(allValues);
  };

  const handleSubmit = (values: any) => {
    message.success("Form submitted successfully!");
    console.log("Submitted values:", values);
  };

  const handleReset = () => {
    form.resetFields();
    setVisibleFields(fields);
  };

  const getValidationRules = (validations?: FieldType["validations"]) => {
    if (!validations) return [];
    return validations.map((v) => {
      switch (v.rule) {
        case "required":
          return { required: true, message: v.message };
        case "email":
          return { type: "email", message: v.message };
        case "minLength":
          return { min: v.value, message: v.message };
        case "maxLength":
          return { max: v.value, message: v.message };
        case "pattern":
          return { pattern: new RegExp(v.value), message: v.message };
        case "min":
          return { type: "number", min: v.value, message: v.message };
        case "max":
          return { type: "number", max: v.value, message: v.message };
        default:
          return {};
      }
    });
  };

  const renderField = (field: FieldType) => {
    switch (field.type) {
      case "text":
      case "email":
      case "password":
      case "number":
        return (
          <Form.Item
            key={field.id}
            name={field.name}
            label={field.label}
            rules={getValidationRules(field.validations)}
          >
            <Input
              type={field.type}
              placeholder={field.placeholder}
              defaultValue={field.defaultValue}
            />
          </Form.Item>
        );

      case "radio":
        return (
          <Form.Item
            key={field.id}
            name={field.name}
            label={field.label}
            rules={getValidationRules(field.validations)}
          >
            <Radio.Group defaultValue={field.defaultValue}>
              {field.options?.map((opt) => (
                <Radio key={opt.value} value={opt.value}>
                  {opt.label}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
        );

      case "select":
        return (
          <Form.Item
            key={field.id}
            name={field.name}
            label={field.label}
            rules={getValidationRules(field.validations)}
          >
            <Select
              placeholder={field.placeholder}
              options={field.options}
              allowClear
            />
          </Form.Item>
        );

      case "checkbox":
        return (
          <Form.Item
            key={field.id}
            name={field.name}
            valuePropName="checked"
            rules={getValidationRules(field.validations)}
          >
            <Checkbox>{field.label}</Checkbox>
          </Form.Item>
        );

      case "textarea":
        return (
          <Form.Item
            key={field.id}
            name={field.name}
            label={field.label}
            rules={getValidationRules(field.validations)}
          >
            <Input.TextArea rows={4} placeholder={field.placeholder} />
          </Form.Item>
        );

      default:
        return null;
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      onValuesChange={handleValuesChange}
    >
      {visibleFields.map((field) => renderField(field))}

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button style={{ marginLeft: 8 }} onClick={handleReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DynamicForm;
