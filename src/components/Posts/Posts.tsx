import React, { useState } from 'react';

import { Reorder } from 'framer-motion';
import Image from 'next/image';

import { DragIcon } from '../icons';

const images = [
  '/assets/images/bundo-kim-5hjSTJUZvPs-unsplash.jpg',
  '/assets/images/clark-tibbs-oqStl2L5oxI-unsplash.jpg',
  '/assets/images/kenn-reynon-ou9SF1o_P4c-unsplash.jpg',
  '/assets/images/marek-okon-3-esk8zPwPY-unsplash.jpg',
  '/assets/images/milda-vi-y31Nzxhd4_s-unsplash.jpg',
];

const Card = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="relative">
      <div className="w-full relative h-full aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
        <Image src={imageUrl} layout="fill" alt="" className="select-none" />
      </div>
      <div className="bg-white absolute -top-2 right-0 md:-right-3 shadow-lg w-8 h-8 rounded-full flex items-center justify-center cursor-grab">
        <DragIcon className="fill-white stroke-black w-5" />
      </div>
    </div>
  );
};

export const Posts = () => {
  const [imagesList, setImagesList] = useState(images);
  return (
    <section>
      <Reorder.Group
        axis="y"
        values={imagesList}
        onReorder={setImagesList}
        className="flex flex-col gap-3"
      >
        {imagesList.map((image) => (
          <Reorder.Item key={image} value={image}>
            <Card imageUrl={image} key={image} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </section>
  );
};
