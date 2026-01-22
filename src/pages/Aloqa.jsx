import React from "react";
import { Link } from "react-router-dom";
import { FaBookBookmark } from "react-icons/fa6";
import { CgDanger } from "react-icons/cg";
import { FaHandshake } from "react-icons/fa6";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { FaMapMarkedAlt } from "react-icons/fa";
import { LuMapPinned } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

function Aloqa() {
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
            <li>Dokonlar</li>
            <li>
              <Link to="/yangiliklar">Yangiliklar</Link>
            </li>
            <li>
              <Link to="/aloqa">Aloqa</Link>
            </li>
            <li>Sodiqli kartasi</li>
            <li>
              <Link to="/makroishlash">Makroda ishlash</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="flex justify-between">
          <h1 className="text-3xl">
            <FaBookBookmark />
            Aloqa
          </h1>
          <h1><Link to="/catolog">orqaga
            <FaArrowRight /></Link>
          </h1>
        </div>

        <div className="flex justify-center ">
          <div className="text-[23px] text-green-700 border-2> ">
            <h1 className="flex items-center gap-[20px] p-[20px] bg-[#f8ecdd99] mb-4 rounded-xl mr-5 ml-5">
              <CgDanger />
              Taminotchilar uchun ma'lumot
            </h1>
            <h1 className="flex items-center gap-[20px] p-[20px] bg-[#f8ecdd99] mb-4 rounded-xl mr-5 ml-5">
              <FaHandshake />
              Ulgurji mijozlar uchun pul o‘tkazish bo‘yicha ma’lumot
            </h1>
            <h1 className="flex items-center gap-[20px] p-[20px] bg-[#f8ecdd99] mb-4 rounded-xl mr-5 ml-5">
              <MdOutlineLaptopChromebook />
              Siz savdo uskunalari ta'minotchisimisiz?
              Bizgamakro.tender@msmarket.uz manziliga yozing
            </h1>
            <h1 className="flex items-center gap-[20px] p-[20px] bg-[#f8ecdd99] mb-4 rounded-xl mr-5 ml-5">
              <Ri24HoursFill />
              Qaynoq liniya telefon raqami: +99871 205 12 05 (24/7)
            </h1>
            <h1 className="flex items-center gap-[20px] p-[20px] bg-[#f8ecdd99] mb-4 rounded-xl mr-5 ml-5">
              <MdOutlineMarkEmailUnread />
              E-mail: info@msmarket.uz
            </h1>
            <h1 className="flex items-center gap-[20px] p-[20px] bg-[#f8ecdd99] mb-4 rounded-xl mr-5 ml-5">
              <AiOutlineMessage />
              Telegram’da murojaat qiling: @Makrosupermarket ( 9:00 dan 20:00
              gacha)
            </h1>
            <h1 className="flex items-center gap-[20px] p-[20px] bg-[#f8ecdd99] mb-4 rounded-xl mr-5 ml-5">
              <FaMapMarkedAlt />
              Bosh ofis manzili: Toshkent sh., Yashnobod tumani, koʻch.
              Magtimguli 134
            </h1>
            <h1 className="flex items-center gap-[20px] p-[20px] bg-[#f8ecdd99] mb-4 rounded-xl mr-5 ml-5">
              <LuMapPinned />
              Do'kon manzillari
            </h1>
            <h1 className="flex items-center gap-[20px] p-[20px] bg-[#f8ecdd99] mb-4 rounded-xl mr-5 ml-5">
              <MdOutlineSecurity />
              Iste’molchilar uchun oziq-ovqat mahsulotlari xavfsizligi qoidalari
            </h1>
          </div>

          <div>
            <img
              className="w-[600px] rounded-lg mr-10"
              src="https://makromarket.uz/banner.jpg"
              alt=""
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Aloqa;
