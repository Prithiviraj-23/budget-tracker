export function DatetoUTCDate(date: Date) {
	return new Date(
	  Date.UTC(
		date.getFullYear(),  // Year
		date.getMonth(),     // Month (0-indexed)
		date.getDate(),      // Day of the month
		date.getHours(),     // Hours
		date.getMinutes(),   // Minutes
		date.getSeconds(),   // Seconds
		date.getMilliseconds() // Milliseconds
	  )
	);
  }
  