export const fetchBooks = async (title) => {

    try {
        
        const response = await fetch(`https://openlibrary.org/search.json?title=${title}&fields=key,isbn,olid,amazon_id,title,author_name,first_publish_year,ratings_average,id_amazon`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return (data.docs);

    } catch (error) {
        return error
}
}


export const fetchBooksDetail = async (key) => {

    try {
        
        const response = await fetch(`https://openlibrary.org/${key}.json`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return (data);

    } catch (error) {
        return error
}
}