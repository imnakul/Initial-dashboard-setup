import Sidebar from './Sidebar'

function DashboardMainContent() {
   return (
      <>
         <div className='main-container'>
            <Sidebar />
            <div className='grid-small-container'>
               <div className='grid-col-1'>1</div>
               <div className='grid-col-2 '>2</div>
            </div>
         </div>
      </>
   )
}
export default DashboardMainContent
