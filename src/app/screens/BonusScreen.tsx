import { Container, Text } from '@pixi/react';
import { FC, memo, useMemo } from 'react';
import { BlurFilter } from 'pixi.js';
import { IScreenProps } from './IScreenProps';

const BonusScreen: FC<IScreenProps> = () => {
  const blurFilter = useMemo(() => new BlurFilter(4), []);
  console.log(111111111111);

  return (
    <Container x={400} y={330}>
      <Text
        text="Hello World"
        anchor={{ x: 0.5, y: 0.5 }}
        filters={[blurFilter]}
      />
    </Container>
  );
};

export default memo(BonusScreen);
