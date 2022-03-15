import { ReactNode, useState } from 'react';

import { Reorder } from 'framer-motion';

import {
  AppleIcon,
  DragIcon,
  LinkedinIcon,
  LinkIcon,
  PlusIcon,
  RedditIcon,
  TwitterIcon,
} from '../icons';

const SocialIcon = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <a
        href="https://github.com/awaisspk"
        className="bg-black w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center relative"
      >
        {children}
      </a>
    </>
  );
};

const socialLinksList = [
  { key: 1, icon: LinkedinIcon },
  { key: 2, icon: AppleIcon },
  { key: 3, icon: RedditIcon },
  { key: 4, icon: TwitterIcon },
  { key: 5, icon: LinkIcon },
];

export const SocialLinks = () => {
  const [links, setLinks] = useState(socialLinksList);

  return (
    <div>
      <h3 className="text-xl text-gray-900 font-bold">socials</h3>
      <div className="flex gap-2 items-center my-5">
        <div className="bg-gray-200/90 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center">
          <PlusIcon className="stroke-gray-500 w-8" />
        </div>
        <Reorder.Group
          axis="x"
          values={links}
          onReorder={setLinks}
          className="grid grid-flow-col grid-cols-4 gap-2"
        >
          {links.map((link) => (
            <Reorder.Item key={link.key} value={link} className="relative">
              <SocialIcon>
                {<link.icon className="stroke-gray-200 w-7 sm:w-8" />}
              </SocialIcon>

              <div className="absolute bg-white w-5 h-5 flex items-center justify-center rounded-lg -top-1  -right-2 sm:right-0  shadow-3xl  cursor-grab">
                <DragIcon className="w-3 h-3 stroke-gray-900" />
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    </div>
  );
};
