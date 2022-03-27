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

export function getFirstDateOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
}

export function getMonthData(startDate) {
  const copy = new Date(startDate);
  const monthData = {};
  monthData.month = copy.getMonth();
  monthData.year = copy.getFullYear();

  // First day in month for dispalying, it can be a day in previous month
  const day = copy.getDay();
  if (day > 0) {
    copy.setDate(copy.getDate() - day);
  } else if (day === 0) {
    // show one line of the previous month
    copy.setDate(copy.getDate() - 7);
  }
  monthData.startDate = copy;

  return monthData;
}

/**
 *
 * @param {*} data array of number (=year * 12 + month)
 * @returns
 */
export function getMonthList(startDate, padding) {
  let i = -padding;
  const months = [];

  for (; i <= padding; i++) {
    const copy = new Date(startDate);
    copy.setMonth(copy.getMonth() + i);

    months.push(getMonthData(copy));
  }

  return months;
}

export const DayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const MonthNames = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
