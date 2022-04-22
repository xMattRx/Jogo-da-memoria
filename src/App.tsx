import { Container, GridArea, Info, InfoArea, LogoLink } from "./App.styles";
import logoImage from './assets/devmemory_logo.png';



const App = () => {
  return(
    <Container>
      <Info>
        <LogoLink>
          <img src={logoImage} width="200" alt="" />
        </LogoLink>

        <InfoArea>
          ...
        </InfoArea>

        <button>Reiniciar</button>
      </Info>
      <GridArea>
        
      </GridArea>
    </Container>
  )
}

export default App;