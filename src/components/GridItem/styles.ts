import styled from "styled-components";

type ContainerProps = {
  showBackground: boolean;
}
export const Container = styled.div<ContainerProps>`
  background-color: #1550FF;
  height: 100px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

type IconProps = {
  opacity?: number;
}
export const Icon = styled.img<IconProps>`
  width: 40px;
  height: 40px;
  opacity: ${props => props.opacity ?? 1};

`