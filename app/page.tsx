import Inventory from "./components/CRUD/Read/Inventory";

export default  function Home() {
  return (
    <>
      <main className='min-h-screen flex justify-center items-center bg-black text-white'>
        <section className="flex">
          < Inventory />
        </section>
      </main>
    </>
  )
}
