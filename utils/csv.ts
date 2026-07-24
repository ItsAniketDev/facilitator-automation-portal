export const columnsToRemove = [
  "User Email",
  "Google Skills Profile URL",
  "Google Developer Profile URL",
  "Names of Completed Arcade Games",
  "Names of Completed Skill Badges",
];

export function cleanCSVData(
  data: Record<string, string>[]
): Record<string, string>[] {
  return data.map((row) => {
    const cleanedRow = { ...row };

    columnsToRemove.forEach((column) => {
      delete cleanedRow[column];
    });

    return cleanedRow;
  });
}