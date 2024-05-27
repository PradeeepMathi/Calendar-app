import '../Stylsheet/Calendar.css'
import left_arrow from '../assets/arrow-left-circle-fill.svg'
import right_arrow from '../assets/arrow-right-circle-fill.svg'

const dayOfweek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const months =['January','February','March','April','May','June','August','September','October','November','December'];
export default function Calendar(){
    return(
        <>
        <div className='calendar'>
            <div className='header'>
                <button>
                    <img src={left_arrow} alt='img'/>
                </button>
                <select></select>
                <select></select>
                <button>
                <img src={right_arrow} alt='img'/>
                </button>

            </div>
        </div>
        </>
    )
}