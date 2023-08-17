
import Navbar from "@/components/Navbar";
import UltimosPedidos from "@/components/UltimosPedidos";

import { CardList } from "../components/CardList";



export default function Home() {
  return (

    <div className="flex ">

      <Navbar />

      <UltimosPedidos />
    <div>
  
      <CardList />
    </div>
  )
}
