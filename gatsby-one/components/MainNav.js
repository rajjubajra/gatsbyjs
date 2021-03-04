import React from 'react'
import {Link} from 'gatsby';

function MainNav() {
  return (
    <div>
      <ul className="flex flex-col md:flex-row">
        <li className="mb-1 md:mr-2 md:mb-0 px-3 py-1 cursor-pointer">
          <Link to="/">Work</Link>
        </li>
        <li className="mb-1 md:mr-2 md:mb-0 px-3 py-1 cursor-pointer">
          <Link to="/about">About</Link>
        </li>
        <li className="mb-1 md:mr-2 md:mb-0 px-3 py-1 cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default MainNav
