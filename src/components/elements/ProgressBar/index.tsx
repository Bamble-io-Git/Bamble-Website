import { Progress } from '@/components/ui/progress';
import useMediaQuery from '@/hooks/useMediaQuery';
import { use } from 'react';

type TNumber = 25 | 50 | 75 | 100;
const ProgressBar = ({ value }: { value: TNumber }) => {
  const isMobile = useMediaQuery(600);

  const getStep = (value: number) => {
    switch (value) {
      case 25: {
        return 1;
      }
      case 50: {
        return 2;
      }
      case 75: {
        return 3;
      }
      case 100: {
        return 4;
      }

      default: {
        return null;
      }
    }
  };
  return (
    <section className="flex items-center justify-between gap-2">
      {!isMobile && (
        <span className="w-[20%]">
          <strong className="font-tertiary"> Step {getStep(value)}</strong> of 4
        </span>
      )}
      <Progress value={value} />
    </section>
  );
};

export default ProgressBar;
