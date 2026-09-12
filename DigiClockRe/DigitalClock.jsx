import React, {useState, useEffect} from 'react';

function DigitalClock(){
    
    const [time , setTime] = useState(new Date());

    useEffect( ()=> {
        const intervalId = setInterval(() => {
            setTime(new Date());
        } , 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        let seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12 ; 
        
        // 13 % 12 is 1 and that is 1 oclock , 12 % 12 is 0 


        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

      return (
        <div className = ''>
          <div>
            <span>
              {formatTime()}
            </span>
          </div>
        </div>
        
        )
}

export default DigitalClock