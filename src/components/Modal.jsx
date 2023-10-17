import React from 'react'

export default function Modal({show,hide,children}) {
  return (
    <div className={`${show ? "": "opacity-0 pointer-events-none" } z-50 transition-all duration-300 h-screen w-screen fixed top-0 left-0 flex justify-center items-center`}>
        <div onClick={hide} className="bg-[rgba(0,0,0,0.2)] h-full w-full fixed top-0 left-0 z-40"></div>
        <div className={`${show ? "": "scale-[0.1]"} rounded-lg transition duration-300 z-50 relative min-h-[200px] overflow-auto min-w-[200px] max-h-[80vh] max-w-[80vw] bg-white flex justify-center items-center`}>
            {children}
        </div>
    </div>
  )
}
