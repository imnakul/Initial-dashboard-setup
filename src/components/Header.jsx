function Header() {
   return (
      <>
         <div className='grid-col-2-header'>
            <div className='avatar'>
               <img
                  src='/avatar.png'
                  alt='User Avatar'
                  style={{ width: '30px', height: '30px' }}
               />
            </div>
            <div className='addButton'>
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
               >
                  <path
                     fill='#ffffff'
                     d='M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2Z'
                  />
               </svg>
            </div>
         </div>
      </>
   )
}
export default Header
