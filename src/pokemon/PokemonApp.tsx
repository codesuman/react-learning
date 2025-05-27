import { useEffect, useState } from "react";
import { PokemonActionType, usePokemonContext, type PokemonContextType, type State } from "./PokemonStore";

const PokemonList = () => {
    const {state}: PokemonContextType = usePokemonContext();
    const {filteredData, loading, error}: State = state;

    return (
        <div>
            {loading && <p>Loading...</p>}

            {error && error.trim().length > 0 && <p>{error}</p>}

            {!loading && !error && (
            <ul>
                {filteredData.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            )}
        </div>
    );
}

const PokemonSearch = () => {
    const {state, dispatch}: PokemonContextType = usePokemonContext();
    const [searchText, setSearchText] = useState(state.search || '');

    useEffect(() => {
        const timer = setTimeout(() => {
            if(searchText !== state.search)
                dispatch({type: PokemonActionType.SEARCH, payload: searchText});
        }, 500); // ⏱ 500ms debounce

        return () => clearTimeout(timer); // ❌ clear previous timeout
    }, [searchText]);

    return (
        <input type="text" name="search" id="search" 
            placeholder="Enter search text..."
            value={searchText} 
            onChange={(event) => setSearchText(event.target.value)}/>
    );
}

export const PokemonApp = () => {
    return (
        <div>
            <p>PokemonApp</p>

            <PokemonSearch />
            <PokemonList />
        </div>
    );
}