// import React from "react";
// import Image from "next/image";

// // maps
// import wase from "./LGAs/wase.svg";
// import kanam from "./LGAs/kanam.svg";
// import kanke from "./LGAs/kanke.svg";
// import langtangNorth from "./LGAs/langtangNorth.svg";
// import langtangSouth from "./LGAs/langtangSouth.svg";
// import shendam from "./LGAs/shendam.svg";
// import quanpan from "./LGAs/quanpan.svg";
// import bokkos from "./LGAs/bokkos.svg";
// import mangu from "./LGAs/mangu.svg";
// import josEast from "./LGAs/josEast.svg";
// import josSouth from "./LGAs/josSouth.svg";
// import josNorth from "./LGAs/josNorth.svg";
// import pankshin from "./LGAs/pankshin.svg";
// import mikang from "./LGAs/mikang.svg";
// import barkinLadi from "./LGAs/barkinLadi.svg";
// import riyom from "./LGAs/riyom.svg";
// import bassa from "./LGAs/bassa.svg";

// const ZoomedMap = ({ mapId }: any) => {
//   const maps = {
//     wase: wase,
//     kanam: kanam,
//     kanke: kanke,
//     langtangNorth: langtangNorth,
//     langtangSouth: langtangSouth,
//     shendam: shendam,
//     quanpan: quanpan,
//     bokkos: bokkos,
//     mangu: mangu,
//     josEast: josEast,
//     josSouth: josSouth,
//     josNorth: josNorth,
//     pankshin: pankshin,
//     mikang: mikang,
//     barkinLadi: barkinLadi,
//     riyom: riyom,
//     bassa: bassa,
//   };

//   return (
//     <>
//       <Image src={maps["wase"]} alt="#" />
//     </>
//   );
// };

// export default ZoomedMap;

import React from "react";
import Image from "next/image";

// maps
import wase from "./LGAs/wase.svg";
import kanam from "./LGAs/kanam.svg";
import kanke from "./LGAs/kanke.svg";
import langtangNorth from "./LGAs/langtangNorth.svg";
import langtangSouth from "./LGAs/langtangSouth.svg";
import shendam from "./LGAs/shendam.svg";
import quanpan from "./LGAs/quanpan.svg";
import bokkos from "./LGAs/bokkos.svg";
import mangu from "./LGAs/mangu.svg";
import josEast from "./LGAs/josEast.svg";
import josSouth from "./LGAs/josSouth.svg";
import josNorth from "./LGAs/josNorth.svg";
import pankshin from "./LGAs/pankshin.svg";
import mikang from "./LGAs/mikang.svg";
import barkinLadi from "./LGAs/barkinLadi.svg";
import riyom from "./LGAs/riyom.svg";
import bassa from "./LGAs/bassa.svg";

interface ZoomedMapProps {
  mapId: keyof typeof maps;
}

const maps = {
  wase: wase,
  kanam: kanam,
  kanke: kanke,
  langtangNorth: langtangNorth,
  langtangSouth: langtangSouth,
  shendam: shendam,
  quanpan: quanpan,
  bokkos: bokkos,
  mangu: mangu,
  josEast: josEast,
  josSouth: josSouth,
  josNorth: josNorth,
  pankshin: pankshin,
  mikang: mikang,
  barkinLadi: barkinLadi,
  riyom: riyom,
  bassa: bassa,
};

const ZoomedMap: React.FC<ZoomedMapProps> = ({ mapId }) => {
  const mapSrc = maps[mapId];

  if (!mapSrc) {
    return <div>Map not found</div>;
  }

  return (
    <>
      <Image src={mapSrc} alt={mapId} />
    </>
  );
};

export default ZoomedMap;
