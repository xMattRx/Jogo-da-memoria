import { items } from '../../data/items';
import b7Svg from '../../svgs/b7.svg';
import { GridItemType } from "../../types/GridItemType";
import { Container, Icon } from "./styles";

type Props = {
  item: GridItemType
  onClick: () => void
}

export const GridItem = ({item, onClick}: Props) =>{
  return (
    <Container
      showBackground={item.permanentShown || item.show}
      onClick={onClick}>
      {!item.permanentShown && item.show === false &&
        <Icon src={b7Svg} alt="" opacity={1} />
      }
      {
       (item.permanentShown || item.show) && item.item !== null &&

        <Icon src={items[item.item].icon} alt=""/>

      }
    </Container>
  );
}