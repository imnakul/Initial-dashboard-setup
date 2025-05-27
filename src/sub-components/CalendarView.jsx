const calendarData = [
   { day: 'Mon', date: 25, times: ['10:00', '11:00', '12:00'] },
   { day: 'Tue', date: 26, times: ['08:00', '09:00', '10:00'] },
   { day: 'Wed', date: 27, times: ['12:00', '-', '13:00'] },
   { day: 'Thu', date: 28, times: ['10:00', '11:00', '-'] },
   { day: 'Fri', date: 29, times: ['-', '14:00', '16:00'] },
   { day: 'Sat', date: 30, times: ['12:00', '14:00', '15:00'] },
   { day: 'Sun', date: 31, times: ['09:00', '10:00', '11:00'] },
]

function CalendarView() {
   return (
      <>
         <div className='calendar-header'>
            <p> October 2021</p>
            <div
               className='calendar-arrows'
               style={{ display: 'flex', gap: '10px' }}
            >
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
               >
                  <g fill='#3b36a5'>
                     <path
                        fill-rule='evenodd'
                        d='M20.75 12a.75.75 0 0 0-.75-.75h-9.25v1.5H20a.75.75 0 0 0 .75-.75Z'
                        clip-rule='evenodd'
                        opacity='.5'
                     />
                     <path d='M10.75 18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53v12Z' />
                  </g>
               </svg>
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
               >
                  <g fill='#3b36a5'>
                     <path
                        fill-rule='evenodd'
                        d='M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75Z'
                        clip-rule='evenodd'
                        opacity='.5'
                     />
                     <path d='M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53v6.75Z' />
                  </g>
               </svg>
            </div>
         </div>

         <div className='calendar'>
            {calendarData.map(({ day, date, times }) => (
               <div
                  className={` ${day === 'Tue' ? 'highlighted' : day === 'Sun' ? 'light-opacity' : 'day'}`}
                  key={day}
               >
                  <span className='day-name'>{day}</span>
                  <span className='day-date'>{date}</span>
                  {times.every((time) => time === '-') ? (
                     <span
                        // style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        className='big-dash'
                     >
                        —
                     </span>
                  ) : (
                     times.map((time, idx) =>
                        time === '-' ? (
                           <span
                              //   style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                              className='big-dash'
                              key={idx}
                           >
                              —
                           </span>
                        ) : (
                           <span
                              className={` ${
                                 (date === 28 && time === '11:00') ||
                                 (date === 30 && time === '12:00') ||
                                 (date === 31 && time === '09:00')
                                    ? 'highlighted-time'
                                    : date === 26 && time === '09:00'
                                    ? 'highlighted-current-time'
                                    : 'day-time'
                              }
                              }`}
                              key={idx}
                           >
                              {time}
                           </span>
                        )
                     )
                  )}
               </div>
            ))}
         </div>
      </>
   )
}
export default CalendarView
