import React from 'react';
import Box from './Box';
import './index.css';
const App=()=>{
    return(
        <>
          <section className='mt-3 mx-3  h-full  '>
            <h1 className='mt-3 text-4xl font-bold flex justify-center '>Github Profile</h1>
            <div>
            <Box/>

            </div>
          </section>
        </>
    )
}
export default App;