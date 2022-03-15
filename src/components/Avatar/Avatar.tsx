import React from 'react';

import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { PenIcon } from '../icons';

export const Avatar = ({ showPen }: { showPen: boolean }) => {
  return (
    <div className="relative">
      <AvatarPrimitive.Root className="rounded-full bg-gray-100 overflow-hidden w-[70px] md:w-[100px] h-[70px] md:h-[100px] flex items-center justify-center">
        <AvatarPrimitive.Image
          src="/assets/images/profile.jpeg"
          className="rounded-full block object-cover"
        ></AvatarPrimitive.Image>
        <AvatarPrimitive.Fallback
          delayMs={600}
          className="flex items-center justify-center w-full h-full text-xl font-bold"
        >
          U
        </AvatarPrimitive.Fallback>
      </AvatarPrimitive.Root>
      {showPen && (
        <div className="bg-black w-5 h-5 sm:w-8 sm:h-8 rounded-full flex items-center justify-center absolute top-0 right-0">
          <PenIcon className="stroke-white w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      )}
    </div>
  );
};
