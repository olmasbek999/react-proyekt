import { Link } from "react-router-dom"
import rasm from './image.png'


function Home() {
  return (
    <header className="bg-green-600 flex justify-between items-center p-[10px]">
        <h1 className='text-[50px] text-red-50'>MAKRO</h1>
        <nav>
            <ul className="flex gap-[70px] text-[20px] text-amber-50">
                <li><Link to="/catalog">Katalog</Link></li>
                <li><Link to="/aksiyalar">Aksiyalar</Link></li>
                <li><Link to="/dokonlar">Dokonlar</Link></li>
                <li><Link to="/yangiliklar">Yangiliklar</Link></li>
                <li>Sodiqli kartasi</li>
                <li>Aloqa</li>
                <li>Makroda ishlash</li>

                <div>
                    <img  src={rasm} alt="" />
                </div>

            </ul>
        </nav>
        </header>
  )
}

export default Home