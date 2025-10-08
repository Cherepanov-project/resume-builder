export const isFiniteNumber = (value: unknown): boolean => {
  return typeof value === "number" && value !== Infinity && value !== -Infinity && value === value;
};

export const isNotANumber = (value: unknown): boolean => {
  return (
    value !== value ||
    value === "" ||
    (typeof value !== "number" && isNaN(parseFloat(String(value))))
  );
};
