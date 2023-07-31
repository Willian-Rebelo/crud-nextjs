import SearchBar from "../Search-bar/SearchBar";
import { MdOutlineLibraryAdd } from "react-icons/md"

export default function Navbar () {
    return(
            <>
                <main className="w-full h-full flex justify-between items-center rounded-xl">
                    <div className="mx-5">
                        < SearchBar />
                    </div>
                    <div className="mx-5">
                        <button className="btn btn-ghost btn-outline">
                            < MdOutlineLibraryAdd />
                            Add Car
                        </button>
                    </div>
                </main>
            </>
        )   
}