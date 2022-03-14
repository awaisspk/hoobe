import React from 'react';

import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { PenIcon } from '../icons';

export const Avatar = () => {
  return (
    <div className="relative">
      <AvatarPrimitive.Root className="bg-blue-500 w-[70px] md:w-[100px] h-[70px] md:h-[100px]">
        <AvatarPrimitive.Image
          src="/assets/images/avatar.png"
          className="w-[70px] md:w-[100px]"
        ></AvatarPrimitive.Image>
        <AvatarPrimitive.Fallback
          delayMs={600}
          className="w-full h-full bg-gray-200"
        >
          U
        </AvatarPrimitive.Fallback>
      </AvatarPrimitive.Root>
      <div className="bg-black w-8 h-8 rounded-full flex items-center justify-center absolute top-0 right-0">
        <PenIcon className="stroke-white w-5 h-5" />
      </div>
    </div>
  );
};
