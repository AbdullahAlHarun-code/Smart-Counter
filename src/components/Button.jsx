import clsx from 'clsx';
import { useEffect, useState } from 'react';

export default function Button({ bg, label, action, count, disable }) {
  
  return (
    <button
      className={clsx(`bg-${bg}-500 hover:bg-${bg}-700`, 'text-white', 'px-3', 'py-2', 'rounded', 'w-full', 'whitespace-nowrap', `disabled:bg-${bg}-300`, `disabled:cursor-not-allowed`)}
      onClick={action}
      disabled={disable}
    >
      {label}
    </button>
  );
}