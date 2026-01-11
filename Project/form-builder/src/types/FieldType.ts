// src/types/FieldType.ts
export interface ValidationRule {
  rule: string;
  message: string;
  value?: any;
}

export interface Condition {
  field: string; // e.g. "{{userType}}"
  operator:
    | "==="
    | "!=="
    | ">"
    | "<"
    | ">="
    | "<="
    | "includes"
    | "!includes";
  value: any;
}

export interface FieldType {
  id: string;
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  defaultValue?: any;
  options?: { label: string; value: any }[];
  condition?: Condition;
  dependsOn?: string;
  validations?: ValidationRule[];
}
