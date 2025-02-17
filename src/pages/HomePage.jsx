import Header from "../components/Header";
import LastTrening from "../components/LastTrening";
import {useEffect} from 'react'
import Searches from "../components/Searches";
import Action from "../components/Action";
import RomanceDrama from "../components/RomanceDrama";
import Comedy from "../components/Comedy";

export default function HomePage() {
  useEffect(()=>{

  },[])

  return (
    
    <div>
      <Header/>
      <LastTrening></LastTrening>
      <div className="mb-2.5">
       <Searches/>
      </div>
      <div className="mb-2.5">
        <Action/>
      </div>
      <div className="mb-2.5">
        <RomanceDrama/>
    
      </div>
      <div className="mb-2.5">
      <Comedy/>
      </div>
    </div>
    
  )
}
