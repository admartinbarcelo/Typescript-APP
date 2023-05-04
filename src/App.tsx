import Navbar from '@/scenes/Navbar';
import { useState } from 'react';
import { SelectedPage } from '@/shared/types';


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.home);

  return (
    <div className="app bg-gray-20">
      <Navbar 
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
