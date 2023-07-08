// Function to get the number of days in a specific month
const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

export default function createAttendanceData(){
      // Get the current year and month
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  
  // Get the number of days in the previous month
  const previousMonth = currentMonth - 1;
  const daysInPreviousMonth = getDaysInMonth(currentYear, previousMonth);
  
  // Generate mock attendance data for all days of the previous month
  const attendanceData = [];
  
  for (let i = 1; i <= daysInPreviousMonth; i++) {
    const date = `${currentYear}-${previousMonth.toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
    const status = Math.random() < 0.8 ? 'present' : 'absent'; // Randomly assign attendance status
  
    attendanceData.push({ date, status });
  }
  
  return attendanceData

}
  
