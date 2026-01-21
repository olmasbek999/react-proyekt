import { Link } from "react-router-dom";
import rasm from "./image.png";

function Home() {
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
            <li>
              <Link to="/makroishlash">Makroda ishlash</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="w-[100%]">
          <img src={rasm} alt="" />
        </div>

        <div className="flex">
          <div>
            <h1 className="text-5xl ml-30">Biz haqimizda</h1>
            <p className="p-[100px]">
              Makro – bosh ofisi Toshkentda joylashgan oʻzbek supermarketlar
              tarmogʻi. Kompaniya Oʻzbekistonning 25 ta shahar hududida 108 ta
              doʻkondan iborat tarmogʻini boshqaradi. Doʻkonlar soni boʻyicha
              uni mamlakatdagi eng yirik oziq-ovqat chakana sotuvchisiga
              aylantirgan[1][2].
            </p>
          </div>
          <div>
            <img
              className="w-[100%]"
              src="https://www.cpaxtra.com/storage/newsroom/news/2024/11/20241111-174628-1.webp"
              alt=""
            />
          </div>
        </div>
       
        <div>
           <h1 className="text-3xl ml-30">Xarita</h1>
        </div>

        <div className="flex">

          <iframe
            className="w-[70%]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95824.47844162778!2d69.04735565185548!3d41.36289548584905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8fce8ac19bb3%3A0x75d8e0b826550658!2sMakro!5e0!3m2!1suz!2s!4v1768646320286!5m2!1suz!2s"
            width="600"
            height="450"
            loading="lazy"
            border="10px"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
      <div>
            <div className="ml-30 border-2 text-1xl rounded-lg">
            <h1>Makro Express</h1>
            <h4 className="w-40">Toshkent,Nazanin ko'ch.</h4>
            <h4>08:00 dan 00:00 gacha</h4>
          </div>
           <br /><br /><br />
           <br />
           <div className="ml-30 border-2 text-1xl rounded-lg">
            <h1>Makro Express</h1>
            <h4>Toshkent,Nazanin ko'ch.</h4>
            <h4>08:00 dan 00:00 gacha</h4>
          </div>
      </div>
      <div>
  
          <div className="ml-30 border-2 text-1xl rounded-lg">
            <h1>Makro Express</h1>
            <h4 className="w-40">Toshkent,Nazanin ko'ch.</h4>
            <h4>08:00 dan 00:00 gacha</h4>
          </div>
          <br />
          <br />
          <br />
          <br />
           <div className="ml-30 border-2 text-1xl rounded-lg">
            <h1>Makro Express</h1>
            <h4>Toshkent,Nazanin ko'ch.</h4>
            <h4>08:00 dan 00:00 gacha</h4>
          </div>
      </div>

          

        </div>
      </main>

      <footer className="w-full ">
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

export default Home;
