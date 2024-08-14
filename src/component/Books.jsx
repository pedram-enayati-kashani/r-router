import {getBooks} from "../data/data";
import {NavLink,Outlet,useSearchParams,useLocation} from "react-router-dom";
const Books = () =>{
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const books = getBooks();
    return (
        <div style={{display:"flex",direction:'rtl'}}>
            <nav style={{borderLeft:"solid 1px",padding:"1rem"}}>
                <input type="text" placeholder="جستجوی کتاب"
                       value={searchParams.get("filter") || ""}
                       onChange={event=>{
                        let filter = event.target.value;
                        if (filter){
                            setSearchParams({filter});
                        }
                        else {
                            setSearchParams({})
                        }
                }}/>
                {
                    books.filter((book) => {
                        let filter = searchParams.get("filter");
                        if (!filter) return true;
                        let name = book.name.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    })
                    .map((book) => (
                    <NavLink
                        style={({isActive}) => {
                            return {
                                display : "block",
                                margin : "1rem 0",
                                color: isActive ? "red" : "",
                            }
                        }}
                        to={`/books/${book.number}${location.search}`}
                        key={book.number}
                    >
                        {book.name}
                    </NavLink>
                ))}
            </nav>
            <Outlet/>
        </div>
    )
}

export default Books;