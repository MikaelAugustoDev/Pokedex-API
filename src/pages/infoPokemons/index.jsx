import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HeaderPage } from "../../components/Header";
import styled from "styled-components";
import { ThemeContext } from "../../contexts";

const Pokemon = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);

    async function getPokemon(id) {
        const url = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        const response = await url;

        return await response.json().then((res) => {
            console.log(res.abilities[0].ability.url);
            return {
                name: res.name,
                type: res.types[0].type.name,
                image: res.sprites.other.dream_world.front_default,
                moveone: res.moves[0].move.name,
                movetwo: res.moves[1].move.name,
                movethree: res.moves[2].move.name,
                movefour: res.moves[3].move.name,
                movefive: res.moves[4].move.name,
                abilitione: res.abilities[0].ability.name,
                abilititwo: res.abilities[1].ability.name,
            };
        });
    }

    useEffect(() => {
        getPokemon(id).then((data) => {
            setPokemon(data);
        });
    }, []);

    const { theme } = useContext(ThemeContext)

    return (
        <>
            <HeaderPage />

            <Main style={{ background: theme.backgroundColor }}>

                {pokemon && (
                    <PokeInfo
                        key={pokemon.id}
                    >

                        <DivImgAndInfos>

                            <NamePokemon style={{ color: theme.color, border: theme.line, boxShadow: theme.shadowCard }}>{pokemon.name}</NamePokemon>
                            <TypePokemon style={{ color: theme.color, border: theme.line, boxShadow: theme.shadowCard }}>{pokemon.type}</TypePokemon>

                            <DivImgPoke>
                                <ImgPokemon src={pokemon.image} alt={pokemon.name} />
                            </DivImgPoke>
                        </DivImgAndInfos>

                        <DivAbilitesAndMovies>

                            <DivMoves>

                                <h2 style={{ color: theme.color }}>Moves</h2>

                                <Moves>

                                    <Item className="one" style={{ color: theme.color, border: theme.line }}>{pokemon.moveone}</Item>
                                    <Item className="two" style={{ color: theme.color, border: theme.line }}>{pokemon.movetwo}</Item>
                                    <Item className="three" style={{ color: theme.color, border: theme.line }}>{pokemon.movethree}</Item>
                                    <Item className="four" style={{ color: theme.color, border: theme.line }}>{pokemon.movefour}</Item>
                                    <Item className="five" style={{ color: theme.color, border: theme.line }}>{pokemon.movefive}</Item>

                                </Moves>

                            </DivMoves>

                            <DivAbilites>

                                <h2 style={{ color: theme.color }}>Habilidades</h2>

                                <Abilites>

                                    <Item className="one" style={{ color: theme.color, border: theme.line }}>{pokemon.abilitione}</Item>
                                    <Item className="two" style={{ color: theme.color, border: theme.line }}>{pokemon.abilititwo}</Item>

                                </Abilites>

                            </DivAbilites>

                        </DivAbilitesAndMovies>


                    </PokeInfo>
                )}

            </Main>
        </>
    );

};

export { Pokemon };

const Abilites = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .one {
        width: 200px;
    };

    .two {
        width: 220px;
    };
`

const DivAbilites = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 10px;
`

const Item = styled.p`
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 5px 30px;
    text-transform: capitalize;
`

const Moves = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .one {
        width: 200px;
    };

    .two {
        width: 220px;
    };

    .three {
        width: 240px;
    };

    .four {
        width: 260px;
    };

    .five {
        width: 280px;
    };
`


const DivMoves = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 10px;
`

const DivAbilitesAndMovies = styled.div`
    width: 50%;
    height: 100%;
`

const DivImgAndInfos = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const DivImgPoke = styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ImgPokemon = styled.img`
    width: 300px;
`

const TypePokemon = styled.p`
    width: 35%;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 10px 10px 0px;
    padding: 5px;
    text-transform: capitalize;
`

const NamePokemon = styled.p`
    width: 40%;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 10px 10px 0px;
    padding: 5px;
    font-weight: 700;
    text-transform: uppercase;
`

const Main = styled.main`
    width: 100%;
    height: 81.7vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const PokeInfo = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    padding: 15px 2px;
    border-radius: 10px;
`