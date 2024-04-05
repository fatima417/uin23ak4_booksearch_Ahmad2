import { useEffect, useState } from "react";
import Listing from "./Listing";
import Search from "./Search";

const Home = ()=>{
    var response_list = {
    }
    const defaultString = "James Bond series"
    const [searchString, setSearchString] = useState("James Bond series")
    

    return (
        <div>
            {defaultString &&
            <div>
                
                <Search defaultString={defaultString} searchString={searchString} setSearchString={setSearchString} />
                <Listing defaultString={defaultString} searchString={searchString} setSearchString={setSearchString} />
            </div>}
        </div>
    )
}

export default Home;