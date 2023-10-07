import {useState} from 'react';
import data from './data.json';

const Search = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const filterData = (searchQuery) => {
        const results = data.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
        console.log(results);
        setSearchResults(results);
    }

    const handleOnChange = (event) => {
        setSearchQuery(event.target.value);

        if(searchQuery.length === 0) {
            setSearchResults([]);
        }

        filterData(searchQuery);
    }

    const handleOnclick = (event, title) => {
        setSearchQuery(title);
        setSearchResults([]);
    }

    return (
        <div style = {{padding : "20px"}}>
            <input style={{ width: "350px", height: "30px", borderRadius: "15px 0 0 15px" }} value = {searchQuery} onChange = {(e) => handleOnChange(e)}/>
            <button style = {{height : "36px", borderRadius : "0 15px 15px 0"}}> Search </button>

            {
                searchResults.length !== 0 && 
                <div>
                    {
                        searchResults.map(searchResult => {
                            return (
                                <div style = {{width : "350px", height : "30px", border : "1px solid black", borderRadius : "15px", padding : "5px", alignItems : "center", justifyContent : "center", display : "flex", flexDirection : "column", cursor : "pointer"}} onMouseEnter={(e) => { e.target.style.backgroundColor = "#ccc" }} onMouseLeave={(e) => { e.target.style.backgroundColor = "" }} onClick = {(e) => handleOnclick(e, searchResult.title)}>
                                    {searchResult.title}
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Search;