import Image from 'next/image';

export const Footer = () => {
  return (
    <div className="">
      <footer>
        <div className="relative h-20 w-80 mx-auto mt-10 mb-5">
          <Image src="/assets/tappie.jpeg" layout="fill" alt="" />
        </div>
      </footer>
    </div>
  );
};
