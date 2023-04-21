import styled from "styled-components"
import LogoPokemon from "../../assets/pokemonLogo.png"
import ButtonTheme from "../ButtonTheme"
import { useContext } from "react"
import { ThemeContext } from "../../contexts"
import { Link } from "react-router-dom"

const HeaderPage = () => {

    const { theme } = useContext(ThemeContext)

    return (

        <Header style={{ background: theme.backgroundColor }}>

            <DivLogo>

                <Link to="/">

                    <Logo src={LogoPokemon} />

                </Link>

            </DivLogo>

            <DivButtontheme>

                <ButtonTheme />

            </DivButtontheme>

        </Header>

    )

}

const DivButtontheme = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 0 20px;
`

const Logo = styled.img`
    width: 300px;
    height: 110px;
`

const DivLogo = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 20px
`

const Header = styled.header`
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    border-width
`

export { HeaderPage }