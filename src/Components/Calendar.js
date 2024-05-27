import '../Stylsheet/Calendar.css'
import {useState} from 'react'
import left_arrow from '../assets/arrow-left-circle-fill.svg'
import right_arrow from '../assets/arrow-right-circle-fill.svg'

const dayOfweek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const months =['January','February','March','April','May','June','August','September','October','November','December'];
export default function Calendar(){
    const [selectDate,setSelectedDate]=useState(new Date());

    const daysInMonth =()=>{
        const daysArray =[];

        const firstDay =new Date(selectDate.getFullYear(),selectDate.getMonth(),1)

        const lastDate = new Date(selectDate.getFullYear(),selectDate.getMonth()+1,0)
        for (let i=0; i < firstDay.getDay(); i++){
            
        }
       return daysArray;
    }
    daysInMonth()
    return(
        <>
        <div className='calendar'>
            <div className='header'>
                <button>
                    <img src={left_arrow} alt='img'/>
                </button>
                <select value={selectDate.getMonth()}>{months.map((month,index)=>(<option key={index} value={index}>{month}</option>))}</select>
                <select value={selectDate.getFullYear()}>{
                    Array.from({length:10},(_,i)=>selectDate.getFullYear()-5+i).map((year)=>(<option key={year}  value={year}>{year}</option>))
                }</select>
                <button>
                <img src={right_arrow} alt='img'/>
                </button>

            </div>
            <div className='daysOfWeek'>
                {dayOfweek.map((day)=>(<div key={day}>
                    {day}
                    </div>))}
            </div>
        </div>
        </>
    )
}