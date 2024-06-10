import React, { useRef, useEffect } from 'react';

function ValueDisplay({ value }) {
  const prevValueRef = useRef();

  useEffect(() => {
    prevValueRef.current = value;
  });

  const prevValue = prevValueRef.current;

  return (
    <div>
      <p>Current Value: {value}</p>
      <p>Previous Value: {prevValue}</p>
    </div>
  );
}

export default ValueDisplay;