import React from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import "./Calender.css"

const CalendarComponent = ({ attendanceData }) => {
  const renderTileContent = ({ date, view }) => {
    const formattedDate = date.toISOString().slice(0, 10);
    const attendanceEntry = attendanceData.find((entry) => entry.date === formattedDate);

    if (attendanceEntry) {
      return attendanceEntry.status === 'present' ? <span className='present'>&#9679;</span> : <em className='absent'>&#10007;</em>;
    }

    return null;
  };

  return (
    <div style={{
        width: "50%",
        margin: "0 auto"
      }}>
         <Calendar
      tileContent={renderTileContent}
      calendarType="ISO 8601"
      defaultActiveStartDate={new Date(2023, 4,1)}
    />
    </div>
   
  );
};

export default CalendarComponent;
