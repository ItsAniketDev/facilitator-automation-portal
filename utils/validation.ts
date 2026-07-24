export function isInvalidValue(value: string): boolean {
  if (!value) return false;

  const text = value.toLowerCase().trim();

  return (
    text.includes("not started") ||
    text.includes("pending") ||
    text.includes("incomplete") ||
    text.includes("wrong") ||
    text.includes("no")
  );
}