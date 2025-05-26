import { useEffect, useState, createContext, useContext } from 'react';

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

export type PokemonSource = {data: Pokemon[], loading: boolean, error: string}

const defaultPokemonContext: PokemonSource = {data: [], loading: true, error: ""};

const PokemonContext = createContext<PokemonSource>(defaultPokemonContext);

export const usePokemonSource = (): PokemonSource => {
    const [data, setData] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch("/pokemon.json");
                const data = await resp.json();

                await new Promise(res => setTimeout(res, 3000)); // Simulating delay
                setData(data);
            } catch (error) {
                console.log(error);
                setError("Unable to fetch data, please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return {data, loading, error};
}

export const PokemonProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <PokemonContext.Provider value={usePokemonSource()}>
            {children}
        </PokemonContext.Provider>
    );
}

export const usePokemonContext = (): PokemonSource => {
    return useContext(PokemonContext);
}