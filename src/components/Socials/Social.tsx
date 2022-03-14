import { ReactNode, useState } from 'react';

import { Reorder } from 'framer-motion';

import {
  AppleIcon,
  LinkedinIcon,
  LinkIcon,
  PlusIcon,
  RedditIcon,
  TwitterIcon,
} from '../icons';

const SocialIcon = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="bg-black w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center">
        {children}
      </div>
    </>
  );
};

const socialLinksList = [
  <SocialIcon key={1}>
    <LinkedinIcon className="stroke-white w-8" />
  </SocialIcon>,
  <SocialIcon key={2}>
    <AppleIcon className="stroke-white w-8" />
  </SocialIcon>,
  <SocialIcon key={3}>
    <RedditIcon className="stroke-white w-8" />
  </SocialIcon>,
  <SocialIcon key={4}>
    <TwitterIcon className="stroke-white w-8" />
  </SocialIcon>,
  <SocialIcon key={5}>
    <LinkIcon className="stroke-white w-8" />
  </SocialIcon>,
];

export const SocialLinks = () => {
  const [links, setLinks] = useState(socialLinksList);

  return (
    <div>
      <h3 className="text-2xl font-bold">Socials</h3>
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
            <Reorder.Item
              key={link.key}
              value={link}
              className="relative group"
            >
              {link}
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    </div>
  );
};
