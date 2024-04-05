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
                <h2 className="book-detail__title">{book?.title}</h2>
                <p className="book-detail__description"><strong>Description:</strong> {book?.description?.value}</p>
                <p className="book-detail__subjects"><strong>Subjects:</strong> {book?.subjects?.join(", ")}</p>
                <p className="book-detail__subject-places"><strong>Subject Places:</strong> {book?.subject_places?.join(", ")}</p>
                <p className="book-detail__subject-people"><strong>Subject People:</strong> {book?.subject_people?.join(", ")}</p>
                <p className="book-detail__subject-times"><strong>Subject Times:</strong> {book.subject_times?.join(", ")}</p>
                <p className="book-detail__author"><strong>Author:</strong> {book?.authors && book?.authors[0]?.author?.key}</p>
                <p className="book-detail__covers"><strong>Covers:</strong> {book.covers?.join(", ")}</p>
                <p className="book-detail__latest-revision"><strong>Latest Revision:</strong> {book?.latest_revision}</p>
                <p className="book-detail__revision"><strong>Revision:</strong> {book?.revision}</p>
                <p className="book-detail__created"><strong>Created:</strong> {book?.created?.value}</p>
                <p className="book-detail__last-modified"><strong>Last Modified:</strong> {book.last_modified?.value}</p>
                </div>
            }
        </div>

    );
};

export default BookDetail;
