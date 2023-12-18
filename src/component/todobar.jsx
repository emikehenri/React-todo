import React from 'react'

export default function Todobar({image}) {
  return (
    <>
        <nav className="navbar bg-white">
            <div className = "navbar-start">
                <div className="flex flex-row place-items-center">
                <img className="w-auto h-auto" src ={image} alt = 'react-logo'/>
                <span className = "text-3xl text-slate-700 font-bold align-bottom">To-Do</span>
                </div>
            </div>
        </nav>
    </>
  );
}