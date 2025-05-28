function UpcomingSchedule() {
   return (
      <>
         <span style={{ color: ' #231C56', fontSize: '1.2rem', fontWeight: '600' }}>The Upcoming Schedule</span>
         <div className='upcoming-schedule'>
            <span>On Thursday</span>
            <div className='upcoming-schedule__day'>
               <div className='grid-col-2-body-card2'>
                  <span style={{ fontWeight: '500' }}>Health Checkup complete</span>
                  <span style={{ fontSize: '0.8rem' }}>11:00 am</span>
                  <img
                     style={{
                        width: '1.2rem',
                        height: '1.2rem',
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                     }}
                     src='/injectionicon.png'
                     alt='Physiotherapy'
                  />
               </div>
               <div className='grid-col-2-body-card2'>
                  <span style={{ fontWeight: '500' }}>Ophthalmologist</span>
                  <span style={{ fontSize: '0.8rem' }}>14:00 pm</span>

                  <img
                     style={{
                        width: '1.2rem',
                        height: '1.2rem',
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                     }}
                     src='/eyeicon.png'
                     alt='Physiotherapy'
                  />
               </div>
            </div>
            <span>On Saturday</span>
            <div className='upcoming-schedule__day'>
               <div className='grid-col-2-body-card2'>
                  <span style={{ fontWeight: '500' }}>Cardiologist</span>
                  <span style={{ fontSize: '0.8rem' }}>12:00 am</span>

                  <img
                     style={{
                        width: '1.2rem',
                        height: '1.2rem',
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                     }}
                     src='/hearticon.png'
                     alt='Physiotherapy'
                  />
               </div>
               <div className='grid-col-2-body-card2'>
                  <span style={{ fontWeight: '500' }}>Neurologist</span>
                  <span style={{ fontSize: '0.8rem' }}>16:00 pm</span>

                  <img
                     style={{
                        width: '1.2rem',
                        height: '1.2rem',
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                     }}
                     src='/doctoricon.png'
                     alt='Physiotherapy'
                  />
               </div>
            </div>
         </div>
      </>
   )
}
export default UpcomingSchedule
