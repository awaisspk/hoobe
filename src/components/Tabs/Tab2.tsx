import React, { ReactNode } from 'react';

import Image from 'next/image';

import { Avatar } from '../Avatar';
import {
  AppleIcon,
  LinkedinIcon,
  LinkIcon,
  RedditIcon,
  TwitterIcon,
} from '../icons';
import { Wrapper } from './Tab1';

const images = [
  {
    url: '/assets/images/bundo-kim-5hjSTJUZvPs-unsplash.jpg',
    link: '#',
    description: "Download Roll & Unlock Creators' Cameras",
  },
  {
    url: '/assets/images/clark-tibbs-oqStl2L5oxI-unsplash.jpg',
    link: '#',
    description: 'Unruly Agency',
  },
  {
    url: '/assets/images/kenn-reynon-ou9SF1o_P4c-unsplash.jpg',
    link: '#',
    description: 'Unruly Agency',
  },
  {
    url: '/assets/images/marek-okon-3-esk8zPwPY-unsplash.jpg',
    link: '#',
    description: 'Unruly Agency',
  },
  {
    url: '/assets/images/milda-vi-y31Nzxhd4_s-unsplash.jpg',
    link: '#',
    description: 'Unruly Agency',
  },
];

const socialLinksList = [
  { key: 1, icon: LinkedinIcon },
  { key: 2, icon: AppleIcon },
  { key: 3, icon: RedditIcon },
  { key: 4, icon: TwitterIcon },
  { key: 5, icon: LinkIcon },
];

interface ICard {
  url: string;
  link: string;
  description: string;
}

const Card = ({ url, link, description }: ICard) => {
  return (
    <div className="w-full relative">
      <div className="block relative aspect-w-16 aspect-h-9 rounded-xl  overflow-hidden">
        <Image src={url} layout="fill" alt="" className="w-full h-full" />
      </div>

      <a
        href={link}
        className="flex items-center  absolute bottom-2 left-5 justify-between w-[90%] mx-auto h-max"
      >
        <p className="text-white text-sm font-bold">{description}</p>
        <LinkIcon className="w-6 stroke-white" />
      </a>
    </div>
  );
};

const SocialIcon = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <a
        href="https://github.com/awaisspk"
        className="bg-pink-500 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center relative"
      >
        {children}
      </a>
    </>
  );
};

export const SocialLinks = () => {
  return (
    <div>
      <div className="flex gap-2 items-center my-5">
        {socialLinksList.map((link, i) => (
          <SocialIcon key={i}>
            {<link.icon className="stroke-gray-200 w-7 sm:w-8" />}
          </SocialIcon>
        ))}
      </div>
    </div>
  );
};

export const Tab2 = () => {
  return (
    <Wrapper>
      <Avatar showPen={false} />
      <SocialLinks />
      <div className="w-[90%] mx-auto space-y-3">
        {images.map((image, i) => (
          <Card key={i} {...image} />
        ))}
      </div>
    </Wrapper>
  );
};
