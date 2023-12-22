export const formatDateWithoutDay = (date: Date) => {
  const formattedDate = date.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return formattedDate;
};

export const getDateByDays = (days: number) => {
  const date = new Date("1/1/2023");
  const imaginedDate = new Date(date);

  imaginedDate.setDate(date.getDate() + days);

  return imaginedDate;
};
