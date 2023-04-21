import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderPage } from "../../components/Header";
import styled from "styled-components";
import { useContext } from "react"
import { ThemeContext } from "../../contexts"

const Home = () => {

    const [infoPokemon, setInfoPokemon] = useState([]);
    const [offset, setOffset] = useState(0);


    async function ListPokemons(offset) {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`;
        const response = await fetch(url);
        const data = await response.json();
        const pokemons = await Promise.all(
            data.results.map(async (result) => {
                const pokemonData = await getPokemonData(result.url.split('/').slice(-2, -1)[0]);
                return {
                    ...pokemonData,
                    id: pokemonData.id,
                };
            })
        );
        setInfoPokemon((prev) => [...prev, ...pokemons]);
    }


    async function getPokemonData(id) {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        return {
            name: data.name,
            image: data.sprites.other.dream_world.front_default,
            id: data.id
        };

       
    }

    useEffect(() => {
        ListPokemons(offset);
    }, [offset]);

    const { theme } = useContext(ThemeContext)

    return (
        <>
            <HeaderPage />

            <Main style={{ background: theme.backgroundColor }}>

                <DivCard>

                    {infoPokemon.slice(0, offset + 10).map((pokemon, index) => (

                        <LinkEdit to={`/pokemon/${pokemon.id}`}>

                            <CardPokemons style={{ border: theme.line, boxShadow: theme.shadowCard}} key={index}>

                                <ImgPokemon src={pokemon.image} alt={pokemon.name} />

                                <NameOfPokemon style={{ color: theme.color }}>{pokemon.name}</NameOfPokemon>

                            </CardPokemons>

                        </LinkEdit>
                    ))}

                </DivCard>

                <DivButton>

                    {offset < 110 && (
                        <Button 
                            style={{ border: theme.line, background: theme.backgroundColor, color: theme.color }}
                            onClick={() => {
                            const newOffset = offset + 10;
                            ListPokemons(newOffset);
                            setOffset(newOffset);
                        }}>Ver mais</Button>
                    )}
                    
                </DivButton>

            </Main>
        </>
    );
};

export { Home };

const Button = styled.button`
    width: 150px;
    height: 40px;
    border-radius: 5px;
    transition: 0.5s ease-in-out;

    :hover {
        transform: scale(1.1);
        cursor: pointer;
    }

`

const DivButton = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const DivCard = styled.div`
    width: 100%;
    min-height: 40%;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    gap: 20px;
    justify-content: center;
`

const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

const CardPokemons = styled.div`
    width: 200px;
    height: 250px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    transition: 0.5s ease-in-out;

    :hover {
        cursor: pointer;
        transform: translate(0, -15px);
    }
`

const ImgPokemon = styled.img`
    width: 150px;
    height: 150px;
`

const NameOfPokemon = styled.p`
    font-size: 20px;
    font-weight: bold;
`

const LinkEdit = styled(Link)`
    text-decoration: none;
`