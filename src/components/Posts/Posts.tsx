import React, { useState } from 'react';

import { LayoutGroup, Reorder, useDragControls } from 'framer-motion';
import Image from 'next/image';

import { DragIcon } from '../icons';

const images = [
  '/assets/images/bundo-kim-5hjSTJUZvPs-unsplash.jpg',
  '/assets/images/clark-tibbs-oqStl2L5oxI-unsplash.jpg',
  '/assets/images/kenn-reynon-ou9SF1o_P4c-unsplash.jpg',
  '/assets/images/marek-okon-3-esk8zPwPY-unsplash.jpg',
  '/assets/images/milda-vi-y31Nzxhd4_s-unsplash.jpg',
];

interface ICard {
  imageUrl: string;
}

const Card = ({ imageUrl }: ICard) => {
  const controls = useDragControls();
  return (
    <Reorder.Item
      id={imageUrl}
      key={imageUrl}
      value={imageUrl}
      dragListener={false}
      dragControls={controls}
      className=""
    >
      <div className="relative w-full">
        <div className="block h-full aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
          <Image
            src={imageUrl}
            layout="fill"
            alt=""
            className="pointer-events-none"
          />
        </div>
        <div
          className="bg-white absolute -top-2 right-0 md:-right-3 shadow-[0px_10px_23px_16px_rgba(0,0,0,0.1)]  w-8 h-8 rounded-full flex items-center justify-center cursor-grab"
          onPointerDown={(e) => controls.start(e)}
        >
          <DragIcon className="fill-white stroke-black w-5" />
        </div>
      </div>
    </Reorder.Item>
  );
};

export const Posts = () => {
  const [imagesList, setImagesList] = useState(images);
  return (
    <section className="">
      <Reorder.Group
        axis="y"
        values={imagesList}
        onReorder={setImagesList}
        className="grid gap-3"
      >
        <LayoutGroup>
          {imagesList.map((image) => (
            <Card imageUrl={image} key={image} />
          ))}
        </LayoutGroup>
      </Reorder.Group>
    </section>
  );
};
