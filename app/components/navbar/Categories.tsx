"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { TbBeach, TbBeachOff, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCampingTent,
  GiCastle,
  GiCaveEntrance,
  GiDesert,
  GiFishingBoat,
  GiForestCamp,
  GiGolfFlag,
  GiIsland,
  GiModernCity,
  GiVillage,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";

import { FaBuildingFlag, FaTowerObservation } from "react-icons/fa6";
import { HiHomeModern } from "react-icons/hi2";


import Container from "../Container";
import CategoryBox from "../CategoryBox";

export const categories = [
  {
    label: "Iconic cities",
    icon: GiModernCity,
    description: "Experience the vibrant energy of city life with this property located close to iconic landmarks!",
  },
  {
    label: "Countryside",
    icon: GiVillage,
    description: "Escape to the tranquility of the countryside with this property, offering a peaceful retreat away from the hustle and bustle.",
  },
  {
    label: "Castles",
    icon: FaBuildingFlag,
    description: "Live like royalty in a majestic castle setting, surrounded by history and perhaps even windmills!",
  },
  {
    label: "Tiny Homes",
    icon: HiHomeModern,
    description: "Embrace modern living with this chic and compact property, perfect for those who appreciate minimalist design.",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "Discover the charm of island life with this property, nestled in a serene island environment surrounded by nature.",
  },
  {
    label: "Beach",
    icon: TbBeachOff,
    description: "Indulge in a beachside paradise with this property, featuring a stunning pool and easy access to the shoreline.",
  },
  {
    label: "Camping",
    icon: GiCampingTent,
    description: "Immerse yourself in the beauty of nature on an island getaway with this camping-friendly property.",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "Experience lakeside living with this property, offering picturesque views and proximity to a tranquil lake.",
  },
  {
    label: "Golfing",
    icon: GiGolfFlag,
    description: "Enjoy a perfect blend of relaxation and recreational activities with this property, including skiing options.",
  },
  {
    label: "Desert",
    icon: GiDesert,
    description: "Step into the enchanting world of an ancient castle surrounded by the mystique of the desert landscape.",
  },
  {
    label: "Towers",
    icon: FaTowerObservation,
    description: "Embark on an adventure with this property located in a tower within a mysterious and perhaps spooky cave setting.",
  },
  {
    label: "Boats",
    icon: GiFishingBoat,
    description: "Combine the joys of camping and boating with this property, providing a unique waterfront experience.",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
  
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
