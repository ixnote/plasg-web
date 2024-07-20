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
    <div>
      <div className="h-[490px] w-[385px] rounded-2xl gap-6">
        {typeof image === "string" ? (
          <Image
            src={image} // If image is a URL
            alt=""
            width={500}
            height={544}
            layout="responsive"
          />
        ) : (
          <Image
            src={image}
            alt=""
            width={500}
            height={544}
            layout="responsive"
          />
        )}
      </div>
      <div>{name}</div>
      <div>{position}</div>
    </div>
  );
};

export default SecondCard;
