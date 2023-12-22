import dayjs from "dayjs";

export const getCalendarColumns = (now) => {
  const start = dayjs(now).startOf("month");
  const end = dayjs(now).endOf("month");
  const endDate = dayjs(end).get("date");

  const columns = [];
  for (let i = 0; i < endDate; i++) {
    const date = dayjs(start).add(i, "day");
    columns.push(date);
  }
  const filledColumns = fillEmptyColumns(columns, start, end);
  return filledColumns;
};

export const fillEmptyColumns = (columns, start, end) => {
  const filledColumns = columns.slice(0);

  const startDay = dayjs(start).get("day");
  for (let i = 1; i <= startDay; i++) {
    const date = dayjs(start).subtract(i, "day");
    filledColumns.unshift(date);
  }

  const endDay = dayjs(end).get("day");

  for (let i = 1; i <= 6 - endDay; i++) {
    const date = dayjs(end).add(i, "day");
    filledColumns.push(date);
  }

  return filledColumns;
};

export const getDayText = (day) => {
  switch (day) {
    case 0:
      return "일";
    case 1:
      return "월";
    case 2:
      return "화";
    case 3:
      return "수";
    case 4:
      return "목";
    case 5:
      return "금";
    case 6:
      return "토";
  }
};

export const getDayColor = (day) => {
  switch (day) {
    case 6:
      return "#5872d1";

    case 0:
      return "#e67639";

    default:
      return "black";
  }
};
