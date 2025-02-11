import React from 'react'

function Test({data}) {
    const temp = [...data];
    console.log(temp);
  return (
    <div>
       {temp.map((item)=>{
        return(
            <div>
                <h1>{item.username}</h1>
                <h1>{item.email}</h1>
                <h1>{item.pass}</h1>
            </div>
        )
       })}
    </div>
  )
}

export default Test