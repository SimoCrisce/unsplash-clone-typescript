import { Link } from "react-router-dom";
import { ImageInterface, User, Photo } from "../interfaces/Image";
import { IoMdDownload } from "react-icons/io";
import { useState } from "react";

interface ImageProps {
  imageDetails: ImageInterface | Photo;
  userDetails: User;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Card = ({ imageDetails, userDetails, setShowModal }: ImageProps) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="relative"
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
    >
      <img
        onClick={() => {
          setShowModal(true);
        }}
        src={imageDetails.urls.small_s3}
        alt={imageDetails.slug ? imageDetails.slug : ""}
        className="w-full"
      />
      <div
        className={`${
          hover ? "flex absolute" : "hidden"
        } justify-between items-center gap-2 text-white bottom-0 w-full p-4`}
      >
        <Link to={"/user/" + userDetails.username}>
          <img src={userDetails.profile_image.small} alt="" className="rounded-full" />
        </Link>
        <Link to={"/user/" + userDetails.username} className="grow">
          <p>{userDetails.name}</p>
        </Link>
        <button className="bg-white p-2 rounded-md hover:bg-black text-black hover:text-white transition">
          <IoMdDownload />
        </button>
      </div>
      {/* <div className="p-4">
          <h3 className="text-xl font-bold">{userDetails.name}</h3>
          <p>{imageDetails.description}</p>
        </div> */}
    </div>
  );
};

export default Card;
