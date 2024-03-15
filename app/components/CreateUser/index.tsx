'use client';

import type { ButtonProps } from './definition';

export default function CreateUser({ uiClass, title }: ButtonProps) {
  function handleClick() {
    console.log('I was clicked');
  }

  return (
    <>
      <button className={uiClass} onClick={handleClick}>
        {title}
      </button>
      {/* Modal Form for crating user */}
    </>
  );
}
