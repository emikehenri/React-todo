import React from 'react'

function Todoform({textlist}) {
  return (
   <div className="flex justify-center py-20">
    <form className="py-5">
      <div className="join">
        <input className="input input-bordered join-item rounded-circle" value={textlist}/>
        <button className="btn join-item rounded-r-full bg-blue-500 text-xl text-slate-950 px-3">Add List</button>
        </div>
    </form>
   </div>
  )
}

export default Todoform