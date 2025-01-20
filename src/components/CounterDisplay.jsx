import clsx from 'clsx';

export default function CounterDisplay({ tcolor, count, zoom}) {
  return (
    <p className={clsx(`text-${tcolor}-700`, 'text-2xl', 'mb-4', 'transition-transform', 'ease-in-out', 'duration-300', { 'scale-125': zoom })}>
      Count: {count}
    </p>
  );
}