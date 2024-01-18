import Card from '@mui/material/Card';
import { useSelector } from '@/store/hooks';
import { AppState } from '@/store/store';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const AppCard = ({ children }: Props) => {
  const customizer = useCustomizer()

  return (
    <Card
      sx={{ display: 'flex', p: 0 }}
      elevation={customizer.isCardShadow ? 9 : 0}
      variant={!customizer.isCardShadow ? 'outlined' : undefined}
    >
      {children}
    </Card>
  );
};

export default AppCard;
