import sql from "@/app/db";
import Navbar from "../../Navbar/Navbar";

export default async function Inventory () {
  const cars = await sql`SELECT id, brand, model, release_date FROM cars`;

  return (
    <>
        <section className='w-[80vw] h-[40vw] flex bg-slate-700 text-white rounded-xl'>
            <div className="w-full h-[6vw] ">
                < Navbar />
            </div>
        </section>
    </>
  )
}
