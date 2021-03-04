import React from 'react';


function DarkButton({handleDarkMode, dark} ) {
  
  return (
    <div className="text-xs flex justify-center w-full font-extralight py-3">
      <div 
      className="cursor-pointer" 
      onClick={handleDarkMode}>{dark ? 'Remove Dark Mode' : 'Dark Mode'}
      </div>
    </div>
  )
}

export default DarkButton
