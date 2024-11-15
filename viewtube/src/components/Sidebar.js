import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  IoMdHome,
  TiFlashOutline,
  MdSubscriptions,
  GoHistory,
  MdOutlinePlaylistPlay,
  CiYoutube,
  BsStopwatch,
  BiLike,
  BsFire,
  RiShoppingBag4Line,
  LuMusic4,
  RiMovie2Line,
  CgMediaLive,
  SiYoutubegaming,
  FaRegNewspaper,
  TfiCup,
} from "../components/Icons";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const sidebarItems = [
    {
      id: 1,
      name: "History",
      icon: <GoHistory />,
    },
    {
      id: 2,
      name: "Playlists",
      icon: <MdOutlinePlaylistPlay />,
    },
    {
      id: 3,
      name: "Your Videos",
      icon: <CiYoutube />,
    },
    {
      id: 4,
      name: "Watch Later",
      icon: <BsStopwatch />,
    },
    {
      id: 5,
      name: "Liked Videos",
      icon: <BiLike />,
    },
  ];

  const sidebarItems1 = [
    {
      id: 1,
      name: "Trending",
      icon: <BsFire />,
    },
    {
      id: 2,
      name: "Shoping",
      icon: <RiShoppingBag4Line />,
    },
    {
      id: 3,
      name: "Music",
      icon: <LuMusic4 />,
    },
    {
      id: 4,
      name: "Movies",
      icon: <RiMovie2Line />,
    },
    {
      id: 5,
      name: "Lives",
      icon: <CgMediaLive />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <SiYoutubegaming />,
    },
    {
      id: 7,
      name: "News",
      icon: <FaRegNewspaper />,
    },
    {
      id: 8,
      name: "Sports",
      icon: <TfiCup />,
    },
  ];

  // early return
  if (!isMenuOpen) return null;

  return (
    <div className="p-4 shadow-lg w-64">
      <ul>
        <li className=" cursor-pointer p-2 rounded-lg hover:bg-gray-300">
          <Link className="cursor-pointer flex my-2" to={"/"}>
            {" "}
            <IoMdHome className=" text-2xl mx-6" /> Home
          </Link>
        </li>
        <li className="flex cursor-pointer p-2 rounded-lg hover:bg-gray-300 my-2">
          <TiFlashOutline className=" text-2xl mx-6" /> Shorts
        </li>
        <li className="flex cursor-pointer  p-2 rounded-lg hover:bg-gray-300 my-2">
          <MdSubscriptions className=" text-2xl mx-6" />
          Subscriptions
        </li>
      </ul>
      <hr className="mt-4" />

      <div>
        {sidebarItems.map((item) => {
          return (
            <div className="flex cursor-pointer  p-2 rounded-lg hover:bg-gray-300 my-2">
              <span className=" text-2xl mx-6">{item.icon}</span>
              {item.name}
            </div>
          );
        })}
      </div>
      <hr className="mt-4" />

      <h1 className="font-bold text-xl ml-6 pt-5">Explore</h1>
      <div>
        {sidebarItems1.map((item) => (
          <div className="flex cursor-pointer  p-2 rounded-lg hover:bg-gray-300 my-2">
            <span className=" text-2xl mx-6">{item.icon}</span>
            {item.name}
          </div>
        ))}
      </div>

      <hr className="mt-4" />
    </div>
  );
};

export default Sidebar;
