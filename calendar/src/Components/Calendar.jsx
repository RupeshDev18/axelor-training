import React, { useState } from "react";
import "./Calendar.css";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(0);

  const prevMonth = () => {
    setCurrentMonth(currentMonth - 1);
  };

  const nextMonth = () => {
    setCurrentMonth(currentMonth + 1);
  };

  const displayCalendar = () => {
    const currentDate = new Date();
    const currDateObject = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + currentMonth
    );
    const noOfDays = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + currentMonth + 1,
      0
    ).getDate();
    const firstDay = currDateObject.getDay();

    const calendarDays = [];
    let dayIterator = 1;
    let storedFirstDay = firstDay;

    // Populate days array with empty cells for the starting empty cells
    while (storedFirstDay > 0) {
      calendarDays.push(
        <div key={`empty-${storedFirstDay}`} className="calendar-day"></div>
      );
      storedFirstDay--;
    }

    // Populate days array with actual calendar days
    while (dayIterator <= noOfDays) {
      calendarDays.push(
        <div
          key={`day-${dayIterator}`}
          className={`calendar-day ${
            dayIterator === currentDate.getDate() &&
            currentDate.getMonth() === currDateObject.getMonth() &&
            currentDate.getFullYear() === currDateObject.getFullYear()
              ? "current-day"
              : ""
          } ${
            days[(firstDay + dayIterator - 1) % 7] === "Fri" ? "text-green" : ""
          } ${
            days[(firstDay + dayIterator - 1) % 7] === "Sun" ? "text-red" : ""
          }`}
        >
          {dayIterator}
        </div>
      );
      dayIterator++;
    }

    return (
      <div>
        <div className="heading">
          <button onClick={prevMonth}>&lt;-</button>
          <h3>{`${
            months[currDateObject.getMonth()]
          } ${currDateObject.getFullYear()}`}</h3>

          <button onClick={nextMonth}>-&gt;</button>
        </div>

        <div className="calendar-grid">
          {days.map((day) => (
            <div key={day} className="day-header">
              {day}
            </div>
          ))}
          {calendarDays}
        </div>
      </div>
    );
  };

  return <div className="container">{displayCalendar()}</div>;
};

export default Calendar;
