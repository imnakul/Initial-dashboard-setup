const chartData = [
   // Each sub-array is a day, each object is a bar
   [
      { height: 70, color: '#e0e7ef' },
      { height: 50, color: '#3ed6fa' },
      { height: 40, color: '#23235f' },
   ],
   [
      { height: 90, color: '#e0e7ef' },
      { height: 65, color: '#3ed6fa' },
      { height: 60, color: '#23235f' },
   ],
   [
      { height: 80, color: '#e0e7ef' },
      { height: 40, color: '#3ed6fa' },
      { height: 30, color: '#23235f' },
   ],
   [
      { height: 100, color: '#e0e7ef' },
      { height: 60, color: '#3ed6fa' },
      { height: 45, color: '#23235f' },
   ],
   [
      { height: 85, color: '#e0e7ef' },
      { height: 80, color: '#3ed6fa' },
      { height: 70, color: '#23235f' },
   ],
   [
      { height: 95, color: '#e0e7ef' },
      { height: 60, color: '#3ed6fa' },
      { height: 50, color: '#23235f' },
   ],
   [
      { height: 90, color: '#e0e7ef' },
      { height: 70, color: '#3ed6fa' },
      { height: 60, color: '#23235f' },
   ],
]

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']

const ActivityChart = () => (
   <div className='activity-chart-custom'>
      {chartData.map((bars, dayIdx) => (
         <div
            className='activity-day-group'
            key={days[dayIdx]}
         >
            {bars.map((bar, barIdx) => (
               <div
                  key={barIdx}
                  className='activity-bar-custom'
                  style={{
                     height: `${bar.height}px`,
                     background: bar.color,
                     opacity: barIdx === 0 ? 0.5 : 1,
                  }}
               ></div>
            ))}
            <span className='day-label-custom'>{days[dayIdx]}</span>
         </div>
      ))}
   </div>
)

export default ActivityChart
