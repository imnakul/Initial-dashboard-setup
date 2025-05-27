function Sidebar({ selected, onItemClick }) {
   // The sidebar component receives the selected item as a prop
   return (
      <>
         <aside className='sidebar'>
            <div className='sidebar-header'>
               <span style={{ color: '#29D5EB' }}>Health</span>
               <span style={{ color: '#231C56' }}>care.</span>
            </div>
            <div className='sidebar-content'>
               <span style={{ color: '#e5e8ee', fontSize: '0.9rem', marginLeft: '1rem' }}>General</span>
               {general.map((item) => {
                  return (
                     <span
                        key={item.name}
                        className='sidebar-item'
                        style={{
                           color: selected === item.name ? '  #1f2c67' : ' #bdc1c7',
                           fontWeight: selected === item.name ? '500' : '300',
                        }}
                        onClick={() => onItemClick(item.name)}
                     >
                        {item.icon}
                        {item.name}
                     </span>
                  )
               })}

               <span style={{ color: '#e5e8ee', fontSize: '0.9rem', marginLeft: '1rem' }}>Tools</span>
               {tools.map((item) => {
                  return (
                     <span
                        key={item.name}
                        className='sidebar-item'
                        style={{ color: selected === item.name ? '#1f2c67' : '#bdc1c7' }}
                        onClick={() => onItemClick(item.name)}
                     >
                        {item.icon}
                        {item.name}
                     </span>
                  )
               })}
            </div>
            <div className='sidebar-footer'>
               <span>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     width='20'
                     height='20'
                     viewBox='0 0 24 24'
                  >
                     <path
                        fill='currentColor'
                        fill-rule='evenodd'
                        d='M9.965 2.809a1.51 1.51 0 0 0-1.401-.203a10 10 0 0 0-2.982 1.725a1.51 1.51 0 0 0-.524 1.313c.075.753-.058 1.48-.42 2.106c-.361.627-.925 1.106-1.615 1.417c-.458.203-.786.62-.875 1.113a10 10 0 0 0 0 3.44c.093.537.46.926.875 1.114c.69.31 1.254.79 1.616 1.416c.361.627.494 1.353.419 2.106c-.045.452.107.964.524 1.313a10 10 0 0 0 2.982 1.725c.471.169.996.093 1.4-.203c.615-.442 1.312-.691 2.036-.691s1.42.249 2.035.691c.37.266.89.39 1.401.203a10 10 0 0 0 2.982-1.725c.417-.349.57-.86.524-1.313c-.075-.753.057-1.48.42-2.106c.361-.627.925-1.105 1.615-1.416c.414-.188.782-.577.875-1.114a10.1 10.1 0 0 0 0-3.44a1.51 1.51 0 0 0-.875-1.113c-.69-.311-1.254-.79-1.616-1.417c-.362-.626-.494-1.353-.419-2.106a1.51 1.51 0 0 0-.524-1.313a10 10 0 0 0-2.982-1.725a1.51 1.51 0 0 0-1.4.203C13.42 3.25 12.723 3.5 12 3.5s-1.42-.249-2.035-.691'
                        class='duoicon-secondary-layer'
                        opacity='.3'
                     />
                     <path
                        fill='currentColor'
                        fill-rule='evenodd'
                        d='M9 12c0-2.309 2.5-3.753 4.5-2.598A3 3 0 0 1 15 12c0 2.309-2.5 3.753-4.5 2.598A3 3 0 0 1 9 12'
                        class='duoicon-primary-layer'
                     />
                  </svg>
               </span>
               <span
                  style={{ cursor: 'pointer', color: '#bdc1c7' }}
                  onClick={() => onItemClick('Settings')}
               >
                  Setting
               </span>
            </div>
         </aside>
      </>
   )
}
export default Sidebar

const general = [
   {
      name: 'Dashboard',
      icon: (
         <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
         >
            <path
               fill='currentColor'
               d='M11 4.68v3.88A2.44 2.44 0 0 1 8.56 11H4.68a2.379 2.379 0 0 1-1.72-.72a2.41 2.41 0 0 1-.71-1.72V4.69a2.44 2.44 0 0 1 2.43-2.44h3.88A2.46 2.46 0 0 1 11 4.68m10.75.01v3.87a2.45 2.45 0 0 1-1.498 2.252a2.42 2.42 0 0 1-.932.188h-3.88A2.419 2.419 0 0 1 13 8.56V4.69a2.393 2.393 0 0 1 .72-1.72a2.42 2.42 0 0 1 1.72-.72h3.88a2.44 2.44 0 0 1 2.43 2.44M11 15.45v3.87a2.44 2.44 0 0 1-2.44 2.43H4.68a2.42 2.42 0 0 1-2.43-2.43v-3.87A2.46 2.46 0 0 1 4.68 13h3.88A2.46 2.46 0 0 1 11 15.45m5.54 4.43a1.348 1.348 0 0 1-.53-.1a1.39 1.39 0 0 1-.45-.31l-1.64-1.64a.738.738 0 0 1 0-1.06a.75.75 0 0 1 1.06 0l1.56 1.57l3.23-3.24a.74.74 0 0 1 1.06 0a.75.75 0 0 1 0 1.06l-3.32 3.32a1.42 1.42 0 0 1-.45.3a1.3 1.3 0 0 1-.52.1'
            />
         </svg>
      ),
   },
   {
      name: 'History',
      icon: (
         <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
         >
            <path
               fill='currentColor'
               d='M22.5 12c0-5.799-4.701-10.5-10.5-10.5c-1.798 0-3.493.453-4.975 1.251A10.55 10.55 0 0 0 3.5 5.834V2.5h-2v7h7v-2H4.787a8.545 8.545 0 0 1 3.187-2.988A8.458 8.458 0 0 1 12 3.5a8.5 8.5 0 1 1-8.454 9.396l-.104-.995l-1.989.209l.104.994C2.11 18.384 6.573 22.5 12 22.5c5.799 0 10.5-4.701 10.5-10.5ZM11 6v6.414l3.5 3.5l1.414-1.414L13 11.586V6h-2Z'
            />
         </svg>
      ),
   },
   {
      name: 'Calendar',
      icon: (
         <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
         >
            <path
               fill='currentColor'
               d='M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z'
            />
         </svg>
      ),
   },
   {
      name: 'Appointments',
      icon: (
         <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 14 14'
         >
            <path
               fill='currentColor'
               fill-rule='evenodd'
               d='M4.5 1a1 1 0 0 0-2 0v1h-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2h-1V1a1 1 0 1 0-2 0v1h-5zm1.47 4.428c0-.217.176-.392.393-.392h1.275c.216 0 .392.175.392.392v1.56h1.56c.217 0 .392.176.392.392v1.275a.392.392 0 0 1-.392.393H8.03v1.56a.392.392 0 0 1-.392.392H6.362a.392.392 0 0 1-.392-.392v-1.56H4.41a.392.392 0 0 1-.392-.393V7.38c0-.216.175-.392.392-.392h1.56z'
               clip-rule='evenodd'
            />
         </svg>
      ),
   },
   {
      name: 'Statistics',
      icon: (
         <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 16 16'
         >
            <path
               fill='currentColor'
               fill-rule='evenodd'
               d='M8 14v-4h1v4h5V5h1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2h1v2zm4.853-10.146l-2.999 3a1.5 1.5 0 0 1-2.538 1.568l-2.714.904L4 9.527a1.5 1.5 0 1 1-.316-.948L7 7.473a1.5 1.5 0 0 1 2.146-1.327l3-3a1.5 1.5 0 1 1 .707.707'
            />
         </svg>
      ),
   },
]

const tools = [
   {
      name: 'Chat',
      icon: (
         <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
         >
            <path
               fill='none'
               stroke='currentColor'
               stroke-linecap='round'
               stroke-linejoin='round'
               stroke-width='2'
               d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z'
            />
         </svg>
      ),
   },
   {
      name: 'Support',
      icon: (
         <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 42 42'
         >
            <path
               fill='currentColor'
               d='M15.562 20.766c-1.328-1.922-2.118-4.241-2.281-4.438c1.945-1.356 5.749-3.06 5.962-5.505c.271-3.159-5.081-9.763-6.107-9.823c-2.808.03-7.947 4.782-8.556 6.218c-1.132 2.969-.571 5.732 1.375 9.732c2.478 5.95 11.682 17.237 16.947 20.78c3.484 2.674 6.029 3.724 9.068 3.09c1.413-.268 6.516-4.455 7.027-7.286c.125-1.05-5.807-8.011-8.875-8.287c-2.382-.22-4.666 3.346-6.303 5.089c-.163-.208-1.559-1.297-3.057-3.021c-1.95-2.049-3.762-4.456-5.2-6.549z'
            />
         </svg>
      ),
   },
]
