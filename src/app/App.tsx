import { BlurFilter } from 'pixi.js';
import { Stage, Container, Sprite, Text } from '@pixi/react';
import { useMemo } from 'react';
import background from '../assets/images/background.png';
import { useResize } from '../shared/hooks/useResize';

export const App = () => {
  const blurFilter = useMemo(() => new BlurFilter(4), []);

  const { width, height } = useResize();

  return (
    <Stage height={height} width={width}>
      <Sprite image={background} width={width} />

      <Container x={400} y={330}>
        <Text
          text="Hello World"
          anchor={{ x: 0.5, y: 0.5 }}
          filters={[blurFilter]}
        />
      </Container>
    </Stage>
  );
};
