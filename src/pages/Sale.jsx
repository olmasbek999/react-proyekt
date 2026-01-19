import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sale() {
  const [count, setCount] = useState(0);
  const kamayish = () => {
    if (count != 0) {
      setCount(count - 300000);
    }
  };
  const qoshish = () => {
    setCount(count + 300000);
  };

  return (
    <>
      <header className="bg-green-600 flex justify-between items-center p-[10px]">
        <h1 className="text-[50px] text-red-50">MAKRO</h1>
        <nav>
          <ul className="flex gap-[70px] text-[20px] text-amber-50">
            <li>
              <Link to="/catalog">Katalog</Link>
            </li>
            <li>
              <Link to="/aksiyalar">Aksiyalar</Link>
            </li>
            <li>
              <Link to="/dokonlar">Dokonlar</Link>
            </li>
            <li>
              <Link to="/yangiliklar">Yangiliklar</Link>
            </li>
            <li>Sodiqli kartasi</li>
            <li>Aloqa</li>
            <li>Makroda ishlash</li>
          </ul>
        </nav>
      </header>

      <section className="flex justify-center">
        <div className="flex flex-col items-center gap-[10px] p-[15px]  size-[300px] bg-green-400 rounded-lg">
          <img
            className="w-[100px], h-[100px], object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnU2Ji-k-LaKh8artm-MYPdAfVINyntR72gQ&s"
            alt=""
          />
          <h1>
            qazi <br />
            300000so'm
          </h1>
          <div>
            <button onClick={qoshish}>+</button>
            <button onClick={kamayish}>-</button>
          </div>
          <h4>Jami:{count} so'm</h4>
          <button className="p-[10px] rounded-lg border-2 cursor-pointer">
            Sotib olish
          </button>
        </div>
      </section>
    </>
  );
}

export default Sale;
