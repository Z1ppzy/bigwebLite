import { Link } from 'react-router-dom';
import SheetNavigation from './SheetNavigation';
import TypeIt from 'typeit-react';

export default function Header() {
  return (
    <div className='flex flex-col  bg-transparent border-b-2 border-purple-600 px-7 py-4'>
      <div className='flex items-center mt-2 justify-center'>
        <Link
          to='/'
          className='font-extrabold italic text-2xl duration-300 dark:text-white hover:text-purple-600 font-Logo'
        >
          <TypeIt>HeavenlyWeiner</TypeIt>
        </Link>
      </div>
      <div className='flex justify-end'>
        <SheetNavigation />
      </div>
    </div>
  );
}
