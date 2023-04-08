import { Container } from '@pixi/react';
import { FC, memo } from 'react';
import { IScreenProps } from './IScreenProps';
import Wheel from '../components/Wheel';
import Button from '../components/Button';
import { useResize } from '../shared/hooks/useResize';

const BonusScreen: FC<IScreenProps> = () => {
  const { width, height } = useResize();
  const handleSpin = () => {
    console.log('SPIN');
  };

  return (
    <Container>
      <Wheel x={500} y={height / 2} />
      <Button
        width={400}
        height={200}
        text="SPIN"
        fontSize={100}
        x={width - 500}
        y={height / 2 - 100}
        onClick={handleSpin}
      />
    </Container>
  );
};

export default memo(BonusScreen);
