import { useEffect, useState } from "react";
import { Container, Grid, GridArea, Info, InfoArea, LogoLink } from "./App.styles";
import logoImage from './assets/devmemory_logo.png';
import { Button } from "./components/Button";
import { GridItem } from "./components/GridItem";
import { InfoItem } from "./components/InfoItem";
import { items } from './data/items';
import { formatTimeElapsed } from "./helpers/formatTimeElapsed";
import RestartIcon from './svgs/restart.svg';
import { GridItemType } from "./types/GridItemType";


const App = () => {

  const [playing, setPlaying] = useState<boolean>(false)
  const [timeElapsed, setTimeElapsed] = useState<number>(0)
  const [moveCount, setMoveCount] = useState<number>(0)
  const [showCount, setShowCount] = useState<number>(0)
  const [gridItems, setGridItems] = useState<GridItemType[]>([])


  useEffect(() => {
    resetAndCreateGrid();
  },[])

  useEffect(() => {
    const timer = setInterval(()=>{
      if(playing){
        setTimeElapsed(timeElapsed + 1);
      }
    }, 1000)
    return () => clearInterval(timer);
  },[playing, timeElapsed])

  useEffect(() => {
    if(showCount === 2){
      let opened = gridItems.filter(item => item.show === 
      true)
      
      if(opened.length === 2){
        
        if(opened[0].item === opened[1].item){
          // v1 = if booth are equal, make every shown permanent
          let tmpGrid = [...gridItems];
          for(let i in tmpGrid){
            if(tmpGrid[i].show){
              tmpGrid[i].permanentShown = true;
              tmpGrid[i].show = false;
            }
          }
        setGridItems(tmpGrid);
        setShowCount(0);
        } else{
          //v2 - if they are not equal, close all "shown"
          setTimeout(() => {
            let tmpGrid = [...gridItems];
            for(let i in tmpGrid){
              tmpGrid[i].show = false;
            }
            
          setGridItems(tmpGrid);
          setShowCount(0);
          }, 1000)
        }



        setMoveCount(moveCount => moveCount + 1)
      } 
    }
  },[showCount,gridItems])

  useEffect(()=>{
    if(moveCount > 0 && gridItems.every(item => item.permanentShown === true)){
      setPlaying(false);
    }
  },[moveCount, gridItems])


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

  const handleItemClick = (index: number) => {
    if(playing && index !== null && showCount < 2){
      let tmpGrid = [...gridItems];
      if(tmpGrid[index].permanentShown === false && tmpGrid[index].show === false){
        tmpGrid[index].show = true;
        setShowCount(showCount + 1)
      }
      setGridItems(tmpGrid);
    }
  }

  return(
    <Container>
      <Info>
        <LogoLink>
          <img src={logoImage} width="200" alt="" />
        </LogoLink>

        <InfoArea>
          <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)} />
          <InfoItem label="Movimentos" value={moveCount.toString()} />
        </InfoArea>
        
        <Button label="Reiniciar" icon={RestartIcon} onClick={resetAndCreateGrid}/>
      </Info>
      <GridArea>
        <Grid>
            {gridItems.map((item, index)=>(
              <GridItem
                key={index}
                item={item}
                onClick={() => handleItemClick(index)}
              />
            ))}
        </Grid>
      </GridArea>
    </Container>
  )
}

export default App;