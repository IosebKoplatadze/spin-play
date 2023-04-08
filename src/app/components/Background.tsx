import { Sprite } from '@pixi/react';
import { FC, memo } from 'react';
import background from '../../assets/images/background.png';

const Background: FC<{ width: number }> = ({ width }) => {
  return <Sprite image={background} width={width} />;
};

export default memo(Background);
