import { useState } from "react";
import { Link } from "react-router-dom";

function Makroishlash() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    setNumber("");
    setName("");
    setEmail("");
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
            <li>
              <Link to="/makroishlash">Makroda ishlash</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="size-[900px]  mx-auto border-2 rounded-3xl bg-green-400">
        <div className="text-center">
          <h1 className="text-6xl text-center  mt-10">Jurnalni To'ldiring</h1>

          <div className="text-5xl  mt-[100px] ">
            <h1 className="">Nomer yozing</h1>
            <br />
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="bg-lime-100 text-black border-2 rounded-md"
              type="number"
            />
          </div>

          <br />

          <div className="text-5xl ">
            <h1>Ism Fam yozing</h1>
            <br />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-lime-100"
              type="text"
            />
          </div>

          <br />

          <div className="text-5xl ">
            <h1>Gmail yozing</h1>
            <br />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-lime-100"
              type="email"
            />
          </div>

          <br />
          <button
            onClick={handleSubmit}
            className="border-2 text-8xl rounded-2xl bg-lime-100"
          >
            Yuborish
          </button>
        </div>
      </div>
    </>
  );
}

export default Makroishlash;
