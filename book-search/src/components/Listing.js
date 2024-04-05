import { useEffect, useState } from "react";
import { fetchBooks } from "../services/fetch_books";
import { useNavigate } from "react-router-dom";

const Listing = ({searchString, setSearchString, defaultString})=>{
    const navigate = useNavigate()
    const [bookResponse, setBookResponse] = useState([])

    useEffect(
        ()=>{
            const fetchData = async ()=>{
                try{
                    console.log("In fetch data")
                    const result = await fetchBooks(searchString.length>=3 ? searchString : defaultString)
                    setBookResponse(result)
                }catch(error){
                    console.log(error)
                    
                }
                
            }
            console.log("Hereeeeee")
            fetchData()
        }
    ,[searchString, defaultString])


    return (
        <div>
            
            {bookResponse!=null &&
            <div>
                Book listing here for: {searchString.length>=3 ? searchString : defaultString}
                {bookResponse?.map((value, index)=>(
                    <div className="book-info" key={index}>
                        <h2>{value.title}</h2>
                        <p><strong>Author:</strong> {value.author_name?.join(", ")}</p>
                        <p><strong>First Publish Year:</strong> {value.first_publish_year}</p>
                        <p><strong>Ratings Average:</strong> {value.ratings_average}</p>
                        <button onClick={()=>navigate(`/detail${value.key}`)}>&quot;More about the book&quot;</button>
                        <button onClick={()=>window.location.href = `https://www.amazon.com/s?k=${value.isbn[0]}`}>amazon.com</button>
                    </div>
                ))}

            </div>}
        </div>
    )
}

export default Listing;