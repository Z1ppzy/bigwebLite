import { Link } from 'react-router-dom';
import TypeIt from 'typeit-react';
import { ThemeSwitch } from './ThemeSwitch';

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
      <div className='flex justify-center gap-10 font-medium text-sm mt-5 md:mt-0 md:text-xl lg:text-2xl text-center'>
        <Link to='/rules' className='duration-500 hover:text-purple-600'>
          Правила
        </Link>
        <Link
          to='https://donate.heavenlyweiner.ru/'
          className='duration-500 hover:text-purple-600'
        >
          Магазин
        </Link>
        <Link to='/voting' className='duration-500 hover:text-purple-600'>
          Голосуйте за нас
        </Link>
      </div>
      <div className='flex justify-end'>
        {' '}
        <ThemeSwitch />
      </div>
    </div>
  );
}
