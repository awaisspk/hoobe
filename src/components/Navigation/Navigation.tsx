import { Dispatch, SetStateAction } from 'react';

import Link from 'next/link';

import { Avatar } from '../Avatar';
import { CloseIcon } from '../icons';

interface INavigation {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const linkList = [
  { label: 'edit page', url: '#' },
  { label: 'settings', url: '#' },
  { label: 'my invites', url: '#' },
  { label: 'analytics', url: '#' },
];
const aboutData = [
  { label: '-text-support-', value: ['817-383-2458'] },
  { label: '-email-us-', value: ['hi@hoo.be'] },
  { label: "Don't miss any cool sh*t", value: ['Follow us', '@hoo.be'] },
];

const About = () => {
  return (
    <div className="flex flex-col md:items-start gap-4">
      {aboutData.map((data, i) => (
        <div key={i}>
          <p className="text-gray-800">{data.label}</p>
          <div className="flex gap-2 ">
            {data.value.map((v, j) => (
              <span key={j} className="text-teal-500/90 font-semibold">
                {v}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Nav = () => {
  return (
    <>
      <nav>
        <ul className="grid grid-cols-2 md:grid-cols-1 items-center justify-center gap-y-3 gap-x-6">
          {linkList.map((link, i) => (
            <Link key={i} href={link.url}>
              <a className="text-lg md:text-2xl text-gray-700 hover:text-teal-500/80 transition-colors">
                {link.label}
              </a>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export const Navigation = ({ setIsOpen }: INavigation) => {
  return (
    <div className="relative">
      <section className="w-full flex  h-screen max-h-screen  justify-center relative">
        <div className="flex flex-col  items-center w-[min(500px,100%)] mt-12 md:mt-24">
          <div className="space-y-5 my-10">
            <Avatar showPen={false} />
            <div>
              <span className="md:text-lg -ml-6 text-gray-900 font-bold">
                hoo.be/muthoni
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <Nav />
            <div className="h-full w-[1px] bg-gray-400" />
            <About />
          </div>
        </div>
      </section>

      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-5 right-5"
      >
        <CloseIcon className="w-8" />
      </button>
    </div>
  );
};
