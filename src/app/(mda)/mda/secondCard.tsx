import React from "react";
import Image, { StaticImageData } from "next/image";

interface Team {
  id: number;
  image: StaticImageData | string; // Adjusted type to handle both static images and URLs
  position: string;
  name: string;
}

const SecondCard: React.FC<Team> = ({ id, name, image, position }) => {
  return (
    <div className="flex flex-col items-center rounded-2xl p-4 w-full">
      <div className="relative w-[385px] h-[544px] rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={`${name}'s image`}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="mt-4 text-lg font-semibold">{name}</div>
      <div className="text-sm text-gray-600">{position}</div>
    </div>
  );
};

export default SecondCard;
