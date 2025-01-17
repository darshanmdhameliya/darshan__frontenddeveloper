import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const Exposing_a_ref_to_your_own_component = forwardRef((props, ref) => {
  const inputRef = useRef();

  
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return (
    <input className='2px solid to-black'
      ref={inputRef}
      type="text"
      placeholder="Add a new task..."
      onChange={props.onChange}
      value={props.value}
    />
  );
});

export default Exposing_a_ref_to_your_own_component;