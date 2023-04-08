import { FC, PropsWithChildren, memo } from 'react';
import { Sprite, Stage } from '@pixi/react';
import { useResize } from '../shared/hooks/useResize';
import Background from './Background';
import { useMousePosition } from '../shared/hooks/useMousePosition';
import pointer from '../../assets/images/pointer.png';

const World: FC<PropsWithChildren> = ({ children }) => {
  const { width, height } = useResize();
  const { x, y } = useMousePosition();

  return (
    <Stage id="canvas" height={height} width={width}>
      <Background width={width} />
      {children}
      <Sprite image={pointer} anchor={0.5} x={x + 20} y={y + 20} />
    </Stage>
  );
};

export default memo(World);
