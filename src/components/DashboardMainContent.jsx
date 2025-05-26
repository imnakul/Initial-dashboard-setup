import Sidebar from './Sidebar'
import { useEffect, useState } from 'react'
import SearchBar from '../sub-components/SearchBar'

function DashboardMainContent() {
   const [selected, setSelected] = useState('Dashboard')

   useEffect(() => {
      setSelected('Dashboard')
   }, [])

   const handleSidebarClick = (item) => {
      setSelected(item)
   }

   return (
      <>
         <div className='main-container'>
            <Sidebar
               selected={selected}
               onItemClick={handleSidebarClick}
            />
            <div className='grid-small-container'>
               {selected === 'Dashboard' ? (
                  <>
                     <div className='grid-col-1'>
                        <SearchBar />
                        <h1>Dashboard</h1>
                     </div>
                     <div className='grid-col-2 '>2</div>
                  </>
               ) : (
                  <>
                     <div style={{ marginTop: '2.5rem' }}> Current selected: {selected}</div>
                     <div style={{ marginTop: '2.5rem' }}>Click Dashboard to view the dashboard content.</div>
                  </>
               )}
            </div>
         </div>
      </>
   )
}
export default DashboardMainContent
