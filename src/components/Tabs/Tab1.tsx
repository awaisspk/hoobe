import React, { ReactNode } from 'react';

import cx from 'classnames';

import { Avatar } from '../Avatar';
import { ChevronRight, PlusIcon, PenIcon } from '../icons';
import { Posts } from '../Posts';
import { SocialLinks } from '../Socials';

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <section
      className={cx(
        'min-w-0 w-[min(550px,100%)] min-h-screen py-5 px-4',
        'bg-white shadow-2xl shadow-gray-500/30 rounded-[2rem]',
        'flex flex-col items-center space-y-5'
      )}
    >
      {children}
    </section>
  );
};

const scoreInfoData = [
  { name: 'Visits', value: 0 },
  { name: 'CTR', value: '0%' },
  { name: 'Link Clicks', value: 0 },
];

const ScoreInfo = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex  bg-gray-200/90 rounded-lg p-1 md:p-2">
        {scoreInfoData.map((info, i) => (
          <div
            key={info.name + info.value}
            className={cx(
              'flex flex-col justify-center px-6 items-center space-y-3',
              {
                'border border-l-gray-400': i !== 0,
              }
            )}
          >
            <span className="text-right text-gray-600 text-sm">
              {info.name}
            </span>
            <span className="font-bold text-lg">{info.value}</span>
          </div>
        ))}
      </div>
      <a className="text-sm text-blue-400 cursor-pointer hover:underline">
        check out all of your analytics
      </a>
    </div>
  );
};

export const Tab1 = () => {
  return (
    <Wrapper>
      <Avatar />
      <div>
        <h3 className="flex items-center space-x-4">
          <span className="text-2xl ml-9 font-bold text-gray-900">Tara</span>
          <PenIcon className="stroke-gray-500 w-7  self-start" />
        </h3>
      </div>
      <ScoreInfo />
      <SocialLinks />
      <div className="w-[min(400px,100%-20px)] mx-auto">
        <h3 className="text-2xl font-bold ">links 4 of 25</h3>
        <div className="flex items-center my-7 select-none gap-1 outline-1 p-2 rounded-full outline w-max mx-auto">
          <PlusIcon className="stroke-blue-400 w-7 " />
          <span className="text-sm md:text-lg">personalize your page</span>
          <ChevronRight className="stroke-gray-700 w-7" />
        </div>
        <Posts />
      </div>
    </Wrapper>
  );
};
