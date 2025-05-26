import { usePokemonContext, type PokemonSource } from "./PokemonStore";

export const PokemonComponent = () => {
    const {data, loading, error}: PokemonSource = usePokemonContext();

    if(loading) return (<p>Loading...</p>);
    if(error && error.trim().length) return (<p>{error}</p>);
  
    return (
      <ul>
        {data.map(item => (<li key={item.id}>{item.name}</li>))}
      </ul>
    );
}