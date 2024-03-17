import Link from 'next/link';
import type { BtnProps } from './definition';

export function Button({
  title,
  btnStyles = 'rounded-full bg-gray-500 px-4 py-2 font-bold capitalize text-white',
  elTag = 'buttonTag',
}: BtnProps) {
  if (elTag === 'linkTag') {
    return (
      <Link href="?createuser=true">
        <button className={btnStyles}>{title}</button>
      </Link>
    );
  }

  return <button className={btnStyles}>{title}</button>;
}
