import { Container, Sprite } from '@pixi/react';
import { FC, memo } from 'react';
import wheelSlice from '../../assets/images/wheel-slice.png';
import wheelCenter from '../../assets/images/wheel-center.png';

export interface Props {
  x?: number;
  y?: number;
}

const Wheel: FC<Props> = ({ x, y }) => {
  const slices = new Array(8).fill(0).map((_, i) => i * 45);
  return (
    <Container x={x} y={y}>
      {slices.map((slice, i) => (
        <Sprite image={wheelSlice} anchor={{ x: 0.5, y: 1 }} angle={slice} />
      ))}
      <Sprite image={wheelCenter} anchor={0.5} />
    </Container>
  );
};

export default memo(Wheel);
