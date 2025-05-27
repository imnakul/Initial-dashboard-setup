import Sidebar from './Sidebar'
import { useEffect, useState } from 'react'
import SearchBar from '../sub-components/SearchBar'
import ActivityFeed from '../sub-components/ActivityFeed'
import Header from './Header'

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
                     {/* //?? Grid Column 1  */}
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
                           <span
                              style={{
                                 fontSize: '0.7rem',
                                 fontWeight: 400,
                                 color: ' #3b36a5',
                                 display: 'flex',
                                 alignItems: 'center',
                                 gap: '0.5rem',
                              }}
                           >
                              This week
                              <svg
                                 xmlns='http://www.w3.org/2000/svg'
                                 width='8'
                                 height='8'
                                 viewBox='0 0 20 20'
                              >
                                 <path
                                    fill='currentColor'
                                    d='M10.103 12.778L16.81 6.08a.69.69 0 0 1 .99.012a.726.726 0 0 1-.012 1.012l-7.203 7.193a.69.69 0 0 1-.985-.006L2.205 6.72a.727.727 0 0 1 0-1.01a.69.69 0 0 1 .99 0l6.908 7.068Z'
                                 />
                              </svg>
                           </span>
                        </div>
                        <div className='body-details'>
                           <div
                              style={{ postion: 'relative' }}
                              className='body-detail-1'
                           >
                              <div
                                 style={{
                                    position: 'absolute',
                                    top: '0.5rem',
                                    right: '0.5rem',
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
                                 style={{ height: '22.5rem', objectFit: 'contain' }}
                              />

                              {/* <div class='scan-arc'>
                                 <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='10'
                                    height='10'
                                    viewBox='0 0 24 24'
                                 >
                                    <path
                                       fill='currentColor'
                                       d='M12 7C6.5 7 2 9.2 2 12c0 2.2 2.9 4.1 7 4.8V20l4-4l-4-4v2.7c-3.2-.6-5-1.9-5-2.7c0-1.1 3-3 8-3s8 1.9 8 3c0 .7-1.5 1.9-4 2.5v2.1c3.5-.8 6-2.5 6-4.6c0-2.8-4.5-5-10-5Z'
                                    />
                                 </svg>
                              </div> */}
                           </div>
                           <div className='body-detail-2'>
                              <div className='body-detail-2-card'>
                                 <div
                                    style={{
                                       display: 'flex',
                                       flexDirection: 'row',
                                       alignItems: 'center',
                                       gap: '0.75rem',
                                    }}
                                 >
                                    <img
                                       src='/lungs.png'
                                       alt='Lungs'
                                       style={{ width: '2rem', height: '2rem', objectFit: 'contain' }}
                                    />
                                    <span style={{ fontWeight: '500' }}> Lungs</span>
                                 </div>
                                 <span
                                    style={{
                                       display: 'inline-flex',
                                       fontSize: '0.7rem',
                                       color: ' #a3a2a2',
                                       marginTop: '1rem',
                                    }}
                                 >
                                    {' '}
                                    Date: 26 Okt 2021
                                 </span>
                                 <div
                                    style={{
                                       height: '0.5rem',
                                       background: 'linear-gradient(90deg, #b34b4b 75%, #dbdee8 75%, #dbdee8 100%)',
                                       borderRadius: '0.25rem',
                                       width: '100%',
                                       marginTop: '1rem',
                                    }}
                                 />
                              </div>
                              <div className='body-detail-2-card'>
                                 <div
                                    style={{
                                       display: 'flex',
                                       flexDirection: 'row',
                                       alignItems: 'center',
                                       gap: '0.75rem',
                                    }}
                                 >
                                    <img
                                       src='/tooth.png'
                                       alt='Tooth'
                                       style={{ width: '2rem', height: '2rem', objectFit: 'contain' }}
                                    />
                                    <span style={{ fontWeight: '500' }}> Teeth</span>
                                 </div>
                                 <span
                                    style={{
                                       display: 'inline-flex',
                                       fontSize: '0.7rem',
                                       color: ' #a3a2a2',
                                       marginTop: '1rem',
                                    }}
                                 >
                                    {' '}
                                    Date: 26 Okt 2021
                                 </span>
                                 <div
                                    style={{
                                       height: '0.5rem',
                                       background: 'linear-gradient(90deg, #7bd3c2 75%, #dbdee8 75%, #dbdee8 100%)',
                                       borderRadius: '0.25rem',
                                       width: '100%',
                                       marginTop: '1rem',
                                    }}
                                 />
                              </div>
                              <div className='body-detail-2-card'>
                                 <div
                                    style={{
                                       display: 'flex',
                                       flexDirection: 'row',
                                       alignItems: 'center',
                                       gap: '0.75rem',
                                    }}
                                 >
                                    <img
                                       src='/bone.png'
                                       alt='Bone'
                                       style={{ width: '2rem', height: '2rem', objectFit: 'contain' }}
                                    />
                                    <span style={{ fontWeight: '500' }}> Bone</span>
                                 </div>
                                 <span
                                    style={{
                                       display: 'inline-flex',
                                       fontSize: '0.7rem',
                                       color: ' #a3a2a2',
                                       marginTop: '1rem',
                                    }}
                                 >
                                    {' '}
                                    Date: 26 Okt 2021
                                 </span>
                                 <div
                                    style={{
                                       height: '0.5rem',
                                       background: 'linear-gradient(90deg, #fb775a 75%, #dbdee8 75%, #dbdee8 100%)',
                                       borderRadius: '0.25rem',
                                       width: '100%',
                                       marginTop: '1rem',
                                    }}
                                 />
                              </div>
                              <span className='activity-details'>
                                 Details
                                 <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='8'
                                    height='8'
                                    viewBox='0 0 32 32'
                                 >
                                    <path
                                       fill='currentColor'
                                       d='m18.72 6.78l-1.44 1.44L24.063 15H4v2h20.063l-6.782 6.78l1.44 1.44l8.5-8.5l.686-.72l-.687-.72l-8.5-8.5z'
                                    />
                                 </svg>
                              </span>
                           </div>
                        </div>
                        <ActivityFeed />
                     </div>
                     {/* //?? Grid Column 2 */}
                     <div className='grid-col-2 '>
                        <Header />
                     </div>
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
