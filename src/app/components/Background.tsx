import { Sprite } from '@pixi/react';
import { FC, memo } from 'react';
import background from '../../assets/images/background.png';
import pointer from '../../assets/images/pointer.png';
import { useMousePosition } from '../shared/hooks/useMousePosition';

const Background: FC<{ width: number }> = ({ width }) => {
  const { x, y } = useMousePosition();

  return (
    <>
      <Sprite image={background} width={width} />
      <Sprite image={pointer} anchor={0.5} x={x + 20} y={y + 20} />
    </>
  );
};

export default memo(Background);
