import Navbar from "@/components/Navbar";
import UltimosPedidos from "@/components/UltimosPedidos";



export default function Home() {
  return (
    <div className="flex ">

      <Navbar />

      <UltimosPedidos />

    </div>
  )
}
