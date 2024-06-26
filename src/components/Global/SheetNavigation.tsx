import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { TfiAlignRight } from 'react-icons/tfi';
import { Link, useLocation } from 'react-router-dom';
import { ThemeSwitch } from './ThemeSwitch';

interface LinkItem {
  path: string;
  label: string;
}

export default function SheetNavigation() {
  const location = useLocation();
  const isActiveLink = (path: string) => location.pathname === path;

  const links: LinkItem[] = [
    { path: '/', label: 'Главная' },
    { path: '/terms', label: 'Условия использования' },
    { path: '/rules', label: 'Правила' },
    { path: 'https://donate.heavenlyweiner.ru/', label: 'Магазин' },
    { path: '/voting', label: 'Голосуйте за нас' },
  ];

  return (
    <Sheet>
      <SheetTrigger>
        <div className="text-3xl pr-4 mt-4 ml-[20wv] cursor-pointer">
          <TfiAlignRight />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <p className="text-center font-bold text-2xl">Навигационное меню</p>
          </SheetTitle>
          <SheetDescription>
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex flex-col text-center text-2xl relative group transform transition-transform duration-300 ${
                  isActiveLink(link.path)
                    ? 'text-purple-800 scale-105'
                    : 'hover:scale-105 hover:text-purple-500'
                }`}
              >
                <span>{link.label}</span>
                {!isActiveLink(link.path) && (
                  <span
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/4 h-1 rounded-full transition-all duration-500 ease-in-out bg-purple-500 scale-x-0 group-hover:scale-x-100`}
                  ></span>
                )}
              </Link>
            ))}
            <ThemeSwitch />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
