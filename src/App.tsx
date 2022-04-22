import { useEffect, useState } from "react";
import { Container, Grid, GridArea, Info, InfoArea, LogoLink } from "./App.styles";
import logoImage from './assets/devmemory_logo.png';
import { Button } from "./components/Button";
import { InfoItem } from "./components/InfoItem";
import RestartIcon from './svgs/restart.svg'
import { GridItemType } from "./types/GridItemType";
import {items} from './data/items'


const App = () => {

  const [playing, setPlaying] = useState<boolean>(false)
  const [timeElapsed, setTimeElapsed] = useState<number>(0)
  const [moveCount, setMoveCount] = useState<number>(0)
  const [showCount, setShowCount] = useState<number>(0)
  const [gridItems, setGridItems] = useState<GridItemType[]>([])


  useEffect(() => {
    resetAndCreateGrid();
  },[])

  const resetAndCreateGrid = () =>{
    setTimeElapsed(0);
    setMoveCount(0);
    setShowCount(0);

    let tmpGrid: GridItemType[] = []
    for(let i = 0; i < (items.length * 2);i++){
      tmpGrid.push({
        item: null,
        show: false,
        permanentShown: false
      })
    }
    for (let w = 0; w < 2; w++) {
      for(let i = 0; i < items.length; i++){
        let pos = -1;
        while(pos < 0 || tmpGrid[pos].item !== null){
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        tmpGrid[pos].item = i;
      }
    }

    setGridItems(tmpGrid);

    setPlaying(true);
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
        <Grid>

        </Grid>
      </GridArea>
    </Container>
  )
}

export default App;