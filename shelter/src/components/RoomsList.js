import React from 'react'
import Rooms from './Rooms'
export default function RoomsList({rooms}) {
   if(rooms.length===0){
       return (
           <div className='empty-search'>
               <h3>Oops No rooms match your search</h3>
           </div>
       )
   }
   
    return (
        <section className='roomslist'>

            <div className='roomslist-center'>
                {rooms.map ((item,index)=>{
                    return <Rooms key={index}room={item}/>
                })}
            </div>
        </section>
    )
}
