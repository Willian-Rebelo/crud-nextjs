import { BiSearch } from "react-icons/bi";


export default function SearchBar () {
    return (
        <>
            <div className="flex flex-row-reverse items-center bg-slate-800 w-[400px] h-[47px] gap-1 rounded-xl px-3">
                <input className="bg-slate-800 w-full h-full font-medium text-[15px] outline-none text-slate-100 p-1 rounded-lg" 
                    type="text" placeholder="Search your cars"/>
                < BiSearch 
                     size={20} className="text-gray-300"
                 />
            </div>
        </>
    )
}