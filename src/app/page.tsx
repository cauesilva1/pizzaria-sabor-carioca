import { CardList } from "@/components/CardList"; 
import UltimosPedidos from "@/components/UltimosPedidos";



export default function Home() {
  return (
    <div className="flex w-screen justify-between relative">
      <div className="flex flex-col w-full justify-center h-full items-center ml-28">

      <CardList />

      <UltimosPedidos />

      </div>
    </div>
  )
}
