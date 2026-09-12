import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Components/Banner'
import Nav from './Components/Nav'
import type { Technology } from './Types/types';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import Technologies from './Components/technologies/Technologies';
import YourStackTech from './Components/technologies/YourSatckTech';
import Footer from './Components/Footer'

const technologyFetch = async (): Promise<Technology[]> => {
  const res = await fetch("./data.json");
  const data = await res.json();
  return data;
}
function App() {
  const [technologiesPromise] = useState(() => technologyFetch());
  const [stack, setStack] = useState<Technology[]>([]);
  const handleAddedTech = (tech: Technology) => {
    const alreadyAddedTech = stack.some((item) => item.id === tech.id);
    if (alreadyAddedTech) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack((prevtech) => [...prevtech, tech]);
    toast.success(`${tech.name} added to stack!`);
  };
  const handleRemove = (id: string) => {
    const removedTech = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    toast.info(`${removedTech?.name} removed from stack`);
  };
  const handleRemoveAll = () => {
    setStack([]);
    toast.info("Stack cleared")
  };
  return (
    <>

      <Nav />
      <Banner />
      <div className='flex gap-6 p-6 items-start'>
        <Suspense fallback={<div>Loading...</div>}>
          <Technologies technologiesPromise={technologiesPromise}
            addedId={stack.map((techno) => techno.id)}
            onAdd={handleAddedTech}
          />
        </Suspense>
        <YourStackTech stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
      
      </div>
       <Footer/>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App

