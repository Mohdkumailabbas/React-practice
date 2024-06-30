import React from 'react';
import styles from './style.module.css'
function Nav({realdata}){
    
    return(
     <>
       <div className='w-full px-4 py-2 bg-white flex justify-between items-center '>
         <h3 className={styles.a}>Orange</h3>
         <div className='flex gap-2 px-2 py-1 bg-orange-500 text-white rounded text-sm'>
            <h3>Favourites</h3>
            <h3>{realdata.filter(item =>item.added).length}</h3>
         </div>
       </div>
     </>

    )
}
export default Nav;