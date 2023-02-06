import React, {useCallback, useMemo, useState} from 'react';


export const LikeUseCallback = () => {

    console.log("LikeUseCallback")

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['react', 'JS', 'HTML'])

    const newArray = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [books])

    const memoizedAddBook = useCallback( () => {
        const newBooks = [...books, 'Angular ' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])

    return (
        <>
            <hr/>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Book
                books={newArray}
                addBook={memoizedAddBook}
            />
        </>
    )
};

type BooksSecretType ={
    books: Array<string>
    addBook: () => void
}

const BooksSecret = (props: BooksSecretType) => {
    console.log("USERS SECRET")
    return <div>

        <button onClick={() => props.addBook()}>+ add book</button>

        {props.books.map((b, index) => <div key={index}>{b}</div>)}
    </div>
}

const Book = React.memo(BooksSecret)


export default LikeUseCallback