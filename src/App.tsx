import { Container, GridArea, Info, InfoArea, LogoLink } from "./App.styles";
import logoImage from './assets/devmemory_logo.png';
import { Button } from "./components/Button";
import { InfoItem } from "./components/InfoItem";
import RestartIcon from './svgs/restart.svg'


const App = () => {

  const resetAndCreateGrid = () =>{

  }

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
        
        <Button label="Reiniciar" icon={RestartIcon} onClick={resetAndCreateGrid}/>
      </Info>
      <GridArea>
        
      </GridArea>
    </Container>
  )
}

export default App;