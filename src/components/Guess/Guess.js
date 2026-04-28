import React from 'react';
import { range } from '../../utils';

function Cell({ letter, status}) {
  const className = status ? `cell ${status}` : 'cell';
  return (
    <span className={className}>
      {letter ?? ''}
      {/* {value ? value[num] : undefined} */}
    </span>
  )
}

function Guess({ result }) {
  return (
    <p className="guess">
      {range(5).map(num => (
        <Cell key={num} letter={result?.[num]?.letter} status={result?.[num]?.status} />
      ))}
    </p>
  );
}

export default Guess; 