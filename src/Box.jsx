import React, { useEffect, useState } from 'react';
import { Loading } from './Loading';
const Box= ()=>{
    const[users,setUsers] = useState([])
    const[loading,setLoading] = useState(true)
    const getUser= async ()=>{
        try{
            const data = await fetch(`https://api.github.com/users`)
        
            setUsers(await data.json() );
            setLoading(false)
        }
        catch(error)
        {
            alert("Fail to fetch")
        }
        
        
    }

    useEffect(()=>{
        getUser();
    },[]);
    return(
        <>
{     
<Loading/> &&
<div className='grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mt-5 '>
    
{users.map((val) => {
    return (
        <div className='bg-white flex items-center flex-rows rounded-md
            border-2 border-black shadow-md shadow-black   '>

               <img src={val.avatar_url} width={200} height={200} />
               <div className='flex flex-col justify-center items-center h-full w-full '>
                    <h1 className='text-2xl flex justify-center items-start '>{val.login}</h1>
                    
               </div>

        </div>
    );
})} 


            
</div>

}
</>
    
)
}



export default Box