import { Container, GridArea, Info, InfoArea, LogoLink } from "./App.styles";
import logoImage from './assets/devmemory_logo.png';
import { InfoItem } from "./components/InfoItem";



const App = () => {
  return(
    <Container>
      <Info>
        <LogoLink>
          <img src={logoImage} width="200" alt="" />
        </LogoLink>

        <InfoArea>
          <InfoItem label="Tempo" value="00:00" />
          <InfoItem label="Movimentos" value="0" />
        </InfoArea>
        
        <button>Reiniciar</button>
      </Info>
      <GridArea>
        
      </GridArea>
    </Container>
  )
}

export default App;