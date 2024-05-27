import "../Stylsheet/Calendar.css";
import { useState } from "react";
import left_arrow from "../assets/arrow-left-circle-fill.svg";
import right_arrow from "../assets/arrow-right-circle-fill.svg";

const dayOfweek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",    // Added July
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysInMonth = () => {
    const daysArray = [];

    const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const lastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);

    for (let i = 0; i < firstDay.getDay(); i++) {
      daysArray.push(null);
    }
    for (let i = 1; i <= lastDate.getDate(); i++) {
      daysArray.push(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i));
    }

    return daysArray;
  };

  const handlePreviousMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
  };

  const handleMonthChange = (event) => {
    setSelectedDate(new Date(selectedDate.getFullYear(), event.target.value, 1));
  };

  const handleYearChange = (event) => {
    setSelectedDate(new Date(event.target.value, selectedDate.getMonth(), 1));
  };

  return (
    <>
      <div className="calendar">
        <div className="header">
          <button onClick={handlePreviousMonth}>
            <img src={left_arrow} alt="Previous Month" />
          </button>
          <select value={selectedDate.getMonth()} onChange={handleMonthChange}>
            {months.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
          <select value={selectedDate.getFullYear()} onChange={handleYearChange}>
            {Array.from({ length: 10 }, (_, i) => selectedDate.getFullYear() - 5 + i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <button onClick={handleNextMonth}>
            <img src={right_arrow} alt="Next Month" />
          </button>
        </div>
        <div className="daysOfWeek">
          {dayOfweek.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="days">
          {daysInMonth().map((day, index) => (
            <div key={index} className={day ? 'day' : 'empty'}>
              {day ? day.getDate() : ""}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
