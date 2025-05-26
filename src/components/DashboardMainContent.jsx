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
                        <div
                           style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              marginBottom: '0.5rem',
                           }}
                        >
                           <h3 style={{ color: '#2D2A8C', fontWeight: '700' }}>Dashboard</h3>
                           <span style={{ color: '#6e7072', fontSize: '0.6rem', fontWeight: 'bold' }}>Show More</span>
                        </div>
                        <div className='body-details'>
                           <div className='body-detail-1'>
                              <div
                                 style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'start',
                                    justifyContent: 'end',
                                    width: '100%',
                                    padding: '0.5rem',
                                 }}
                              >
                                 <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='30'
                                    height='30'
                                    viewBox='0 0 24 24'
                                 >
                                    <path
                                       fill='#a3a2a2'
                                       d='M16.279 17.039a7.926 7.926 0 0 1-5.206 1.941a7.964 7.964 0 0 1-7.96-7.96a7.964 7.964 0 0 1 7.96-7.96a7.964 7.964 0 0 1 7.96 7.96a7.93 7.93 0 0 1-2.04 5.319l.165.165l3.583 3.582c.455.456-.252 1.163-.707.708l-3.755-3.755Zm1.754-6.019a6.964 6.964 0 0 0-6.96-6.96a6.963 6.963 0 0 0-6.96 6.96a6.963 6.963 0 0 0 6.96 6.96a6.964 6.964 0 0 0 6.96-6.96Zm-7.46.5h-1.5c-.645 0-.643-1 0-1h1.5v-1.5c0-.645 1-.643 1 0v1.5h1.5c.645 0 .643 1 0 1h-1.5v1.5c0 .645-1 .643-1 0v-1.5Z'
                                    />
                                 </svg>
                              </div>
                              <img
                                 src='/ANATOMY.jpg'
                                 alt='Anatomy'
                                 style={{ width: '25rem', height: '25rem', objectFit: 'contain' }}
                              />
                           </div>
                           <div className='body-detail-2'>2</div>
                        </div>
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
