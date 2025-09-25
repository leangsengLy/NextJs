import React from 'react'

function Header() {
    const x = 10;
  return (
   <>
    <div className='text-red-400 text-4xl test-color' style={{color:x>5?"blue":"red"}}>Web development</div>
    {/* <style jsx>{`
        .test-color{
         color: ${x>5?"blue":"red"
        }`
    }</style> */}
    </>
  )
}

export default Header