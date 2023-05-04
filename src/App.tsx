import Navbar from '@/scenes/Navbar';
import Home from "@/scenes/Home";
import { useEffect, useState } from 'react';
import { SelectedPage } from '@/shared/types';


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const hangleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener('scroll', hangleScroll);
    return () => window.removeEventListener('scroll', hangleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
      isTopOfPage={isTopOfPage} 
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
