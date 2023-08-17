import { CardList } from "@/components/CardList";
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    <div className="flex">
      <Navbar />
      
      <CardList />
    </div>
  )
}
