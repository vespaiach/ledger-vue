export function getMonthDates(startDate) {
  const startDateCopy = new Date(startDate);
  const dates = [];
  dates.push(new Date(startDate));

  for (let i = 1; i < 7 * 6; i++) {
    startDateCopy.setDate(startDateCopy.getDate() + 1);
    dates.push(new Date(startDateCopy));
  }

  return dates;
}

export function getMonthData(startDate, padding) {
  let i = -padding;
  const months = [];

  for (; i <= padding; i++) {
    const copy = new Date(startDate);
    copy.setMonth(copy.getMonth() + i);

    const monthData = {};
    monthData.month = copy.getMonth();
    monthData.year = copy.getFullYear();

    // First day in month
    const day = copy.getDay();
    if (day > 0) {
      copy.setDate(copy.getDate() - day);
    } else if (day === 0) { // show one line of the previous month
      copy.setDate(copy.getDate() - 7);
    }
    monthData.startDate = copy;

    months.push(monthData);
  }

  return months;
}
