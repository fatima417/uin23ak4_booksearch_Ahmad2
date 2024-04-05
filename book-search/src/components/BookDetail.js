import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBooksDetail } from '../services/fetch_books';

const BookDetail = () => {
    const { book_id_, book_id__ } = useParams();
    const [book, setBook] = useState(null)

    useEffect(()=>{
        const fetchData= async ()=>{
            try{
                const res = await fetchBooksDetail(`${book_id_}/${book_id__}`)
                setBook(res)

            }catch(error){
                return
            }
            
        };

        fetchData()
    },[book_id_, book_id__]
    )

    return (
        <div>
            {book && 
            <div className="book-detail">
            <h2>{book.title}</h2>
            <p><strong>Description:</strong> {book.description.value}</p>
            <p><strong>Subjects:</strong> {book.subjects.join(", ")}</p>
            <p><strong>Subject Places:</strong> {book.subject_places.join(", ")}</p>
            <p><strong>Subject People:</strong> {book.subject_people.join(", ")}</p>
            <p><strong>Subject Times:</strong> {book.subject_times.join(", ")}</p>
            <p><strong>Author:</strong> {book.authors[0].author.key}</p>
            <p><strong>Covers:</strong> {book.covers.join(", ")}</p>
            <p><strong>Latest Revision:</strong> {book.latest_revision}</p>
            <p><strong>Revision:</strong> {book.revision}</p>
            <p><strong>Created:</strong> {book.created.value}</p>
            <p><strong>Last Modified:</strong> {book.last_modified.value}</p>
            {/* Add other fields as needed */}
            </div>}
        </div>
    );
};

export default BookDetail;
