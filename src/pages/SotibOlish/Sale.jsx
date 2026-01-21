import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sale() {
  const [count, setCount] = useState(0);
  const kamayish = () => {
    if (count != 300000) {
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

      <section className="flex justify-center mt-[30px]">
        <div className="flex flex-col items-center gap-[10px] p-[15px]  w-[300px] bg-green-400 rounded-lg">
          <img
            className="w-full, h-[100px], object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnU2Ji-k-LaKh8artm-MYPdAfVINyntR72gQ&s"
            alt=""
          />

          <div className="flex justify-center gap-[5px] items-center w-full">
            <span>Qazi:</span>
            <span>300000so'm</span>
          </div>
          <div className="w-full flex justify-between gap-[10px]">
            <button onClick={qoshish} className="p-[5px] border-2 rounded-lg bg-white">
              Yana bitta olish
            </button>
            <button onClick={kamayish} className="p-[5px] border-2 rounded-lg bg-white">
              Yana bitta ayirish
            </button>
          </div>
          <h4>Jami:{count} so'm</h4>
          <button className="p-[10px] rounded-lg border-2 cursor-pointer">
            Sotib olish
          </button>
        </div>
      </section>

      <footer className="w-full mt-[100px]">
              <div className="flex justify-between w-full bg-green-500 ">
                <h1 className="text-[50px] text-white">MAKRO</h1>
      
                <div className="flex flex-col items-center">
                  <h1 className="">Ilovamizni yuklab oling</h1>
      
                  <div className="flex gap-[50px]">
                    <div className="flex bg-black text-white w-[100px] rounded-xl">
                    <Link to='https://apps.apple.com/uz/app/makro-app/id6443717445'>
                      <img
                        className="rounded-3xl"
                        src="https://thumbs.dreamstime.com/b/apple-logo-editorial-vector-illustration-apple-logo-editorial-vector-illustration-background-136504759.jpg"
                        alt=""
                      />
                    </Link>
                    </div>
      
                    <div className="flex bg-white text-white w-[100px]  rounded-xl ">
                     <Link to='https://play.google.com/store/apps/details?id=com.makro.hive_dart&pli=1'>
                      <img
                        className="rounded-3xl"
                        src="https://download.logo.wine/logo/Google_Play/Google_Play-Logo.wine.png"
                        alt=""
                      />
                     </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span>
                    Ijtimoiy tarmoqlarimizga <br /> obuna bo'ling
                  </span>
                  <div className="flex items-center gap-[15px]">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
            </footer> 
    </>
  );
}

export default Sale;
