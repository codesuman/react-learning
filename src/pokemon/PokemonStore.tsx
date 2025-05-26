import { createContext, useContext, useEffect, useReducer } from "react";

interface Pokemon {
    id: number,
    name: string,
    type: string[],
    hp: number,
    attack: number,
    defense: number,
    special_attack: number,
    special_defense: number,
    speed: number
}

export type State = {
    data: Pokemon[];
    filteredData: Pokemon[];
    search: string;
    loading: boolean;
    error: string | null;
};

export enum PokemonActionType {
    FETCH_SUCCESS = "FETCH_SUCCESS",
    FETCH_FAILED = "FETCH_FAILED",
    SEARCH = "SEARCH"
}

type PokemonAction = {type: PokemonActionType.FETCH_SUCCESS, payload: Pokemon[]} 
    | {type: PokemonActionType.FETCH_FAILED, payload: string} 
    | {type: PokemonActionType.SEARCH, payload: string};

const initialState: State = {
    data: [],
    filteredData: [],
    search: "",
    loading: true,
    error: null
}

export type PokemonContextType = {
    state: State;
    dispatch: React.Dispatch<PokemonAction>; // "Dispatch is a function that expects an action of type PokemonAction."
}

const PokemonContext = createContext<PokemonContextType>({state: initialState, dispatch: () => {}});

export const PokemonProvider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer((state: State, action: PokemonAction) => {
        const {type, payload} = action;
        
        console.log(type);

        switch (type) {
            case PokemonActionType.FETCH_SUCCESS:
                return {...state, data: payload, filteredData: payload, loading: false, error: null};
            case PokemonActionType.FETCH_FAILED: 
                return {...state, data: [], filteredData: [], loading: false, error: payload};
            case PokemonActionType.SEARCH: {
                const searchTerm = payload.toLowerCase();
                const filteredData = state.data.filter(x => x.name.toLowerCase().includes(searchTerm));

                return {...state, 
                    filteredData, 
                    loading: false, 
                    search: payload,
                    error: null
                };
            }
            default:
                return state;
        }
    }, initialState);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch("/pokemon.json");
                const data = await resp.json();

                await new Promise(res => {setTimeout(res, 3000)}); // Simulating delay

                dispatch({type: PokemonActionType.FETCH_SUCCESS, payload: data});
            } catch (err) {
                console.log(err);
                
                dispatch({
                    type: PokemonActionType.FETCH_FAILED,
                    payload: "Failed to load data."
                });
            }
        };

        fetchData();
    }, []);

    return (
        <PokemonContext.Provider value={{state, dispatch}}>
            {children}
        </PokemonContext.Provider>
    );
}

export const usePokemonContext = () => useContext(PokemonContext);