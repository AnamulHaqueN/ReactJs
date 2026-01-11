// src/utils/evaluateCondition.ts
import type { Condition } from "../types/FieldType";

export const evaluateCondition = (
  condition: Condition | undefined,
  formValues: Record<string, any>
): boolean => {
  if (!condition) return true;

  const fieldKey = condition.field.replace(/[{}]/g, ""); // remove {{}}
  const fieldValue = formValues[fieldKey];

  switch (condition.operator) {
    case "===":
      return fieldValue === condition.value;
    case "!==":
      return fieldValue !== condition.value;
    case ">":
      return fieldValue > condition.value;
    case "<":
      return fieldValue < condition.value;
    case ">=":
      return fieldValue >= condition.value;
    case "<=":
      return fieldValue <= condition.value;
    case "includes":
      return Array.isArray(fieldValue) && fieldValue.includes(condition.value);
    case "!includes":
      return Array.isArray(fieldValue) && !fieldValue.includes(condition.value);
    default:
      return true;
  }
};
