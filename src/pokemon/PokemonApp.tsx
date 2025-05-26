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

    return (
        <input type="text" name="search" id="search" 
            placeholder="Enter search text..."
            value={state.search} onChange={(event) => dispatch({type: PokemonActionType.SEARCH, payload: event.target.value})}/>
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