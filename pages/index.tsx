import { useStore } from 'effector-react';
import { counter, increment, decrement, set } from '../stores/count';
import Counter from '../components/counter';
import { promises } from 'dns';

const Index = () => {
  const count = useStore(counter);
  return (
    <Counter
      count={count}
      onIncrement={() => increment()}
      onDecrement={() => decrement()}
    />
  );
};

const asyncGenerateInitialValue = () =>
  new Promise<number>((resolve: (value?: number) => void) =>
    setTimeout(() => resolve(Math.round(Math.random() * 10)), 3000)
  );

Index.getInitialProps = async () => {
  const cnt: number = await asyncGenerateInitialValue();
  // TODO: having issue to synchronize store data between server and client
  set.prepend(cnt => cnt)(cnt);
  return {};
};

export default Index;
