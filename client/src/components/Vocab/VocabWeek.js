import React from 'react'
import { nextSaturday, nextSunday, format, subDays } from 'date-fns'

function getWeek() {
    const date = new Date();
    const weekFirstDay = format(nextSunday(subDays(date, 8)), 'MMMM d');
    const weekLastDay = format(nextSaturday(date), 'MMMM d');
    return `${weekFirstDay} - ${weekLastDay}`;
}

export default function VocabWeek() {
    
    return (
        <div>
            <h3>{getWeek()}</h3>
        </div>
    )
}
