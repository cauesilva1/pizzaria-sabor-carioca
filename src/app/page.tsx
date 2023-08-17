
import Navbar from "@/components/Navbar";
import UltimosPedidos from "@/components/UltimosPedidos";

import { CardList } from "../components/CardList";



export default function Home() {
  return (

    <div className="flex ">

      <Navbar />

      <div className="flex flex-col items-center">
        <CardList />
        <UltimosPedidos />
      </div>

    </div>
  )
}
