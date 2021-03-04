import React,{useState} from 'react'
import DarkButton from './DarkButton';
import NavigationBar from './NavigationBar';
import SEO from './seo';


function Layout({children}) {
  const [dark, setDark] = useState(false);

  const handleDarkMode = () =>(
   
    setDark(dark ? false : true)
  )

  return (
    <>
    <div className={`${dark ? 'dark' : ''}`}>
      <div className="dark:bg-gray-600 dark:text-gray-200 min-h-screen">
        <div className="flex align-center flex-col md:px-10 lg:px-20">
          <DarkButton handleDarkMode={handleDarkMode} dark={dark} />
        <NavigationBar />
        {children}
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Layout