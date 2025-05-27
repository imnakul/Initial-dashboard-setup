import ActivityChart from './ActivityChart'

const ActivityArea = () => (
   <div className='activity-area'>
      <div className='activity-header'>
         <span>Activity</span>
         <span className='activity-subtext'>3 appointments on this week</span>
      </div>
      <div className='activity-chart'>
         <ActivityChart />
      </div>
   </div>
)

export default ActivityArea
