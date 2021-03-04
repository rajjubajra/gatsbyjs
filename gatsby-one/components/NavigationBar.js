import React from 'react';
import Branding from './Branding';
import MainNav from './MainNav';

function NavigationBar() {
  return (
    <div className="dark:text-gray-200 px-10">
      <div className="flex w-full md:justify-between flex-col md:flex-row py-10">
        <Branding />
        <MainNav />
      </div>
    </div>
  )
}

export default NavigationBar
