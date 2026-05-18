import "../styles/Search.css";

const Search = () => {

    return(
        <div className="search-bar">

            <input
                type="text"
                placeholder="Search..."
            />

            <button className="search-btn">

                <span className="search-icon"></span>

            </button>

        </div>
    );

}

export default Search;