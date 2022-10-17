import HorizentalCard from "./components/HorizentalCard"
import Navbar from "./components/Navbar"
import "./index.css"
import info from "./data";



function App() {
  const data = info.map(item => {
    return (<HorizentalCard 
                      key={item.id}
                      {...item} />) 
  });
  return (
    <>
    <Navbar />
    {data}
    </>
  )
  
}

export default App
