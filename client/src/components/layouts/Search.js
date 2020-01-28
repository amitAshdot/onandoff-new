import React , {useState , useContext } from 'react'

 const Search = () => {
const [state, setstate] = useState({
    searchInput : '',
    findList:[], 
})

const onChange = e => { setstate({ ...state, [e.target.name]: e.target.value }); }

    return (
        <div>
            <input 
                    type="text" 
                    value={state.searchInput} 
                    name="searchInput" 
                    placeholder="חפש..." 
                    onChange={onChange} 
            />
        </div>
    )
}
export default Search