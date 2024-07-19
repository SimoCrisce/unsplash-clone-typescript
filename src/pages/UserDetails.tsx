import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "../interfaces/Image";
import Button from "../components/Button";
import { BsThreeDots, BsEnvelopeFill } from "react-icons/bs";
import { FaCheckCircle, FaLink, FaHeart } from "react-icons/fa";
import { FaLocationDot, FaImage } from "react-icons/fa6";
import { MdVerified, MdFolderCopy } from "react-icons/md";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Card from "../components/Card";

interface ModalActions {
  showModal: boolean;
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
}

const UserDetails = ({ showModal, setShowModal }: ModalActions) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const { username } = useParams();
  const fetchUser = () => {
    fetch(`https://api.unsplash.com/users/${username}/?client_id=MYxqruRM9Vgdg9DuJTS9D8ro4dSPW7cohm5cMghe8rE`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nel reperimento dei dati richiesti");
        }
      })
      .then((user: User) => setUser(user))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      {user && (
        <>
          <div className="flex gap-12 w-7/12 mx-auto items-start">
            <div className="relative">
              <img src={user.profile_image.large} className="rounded-full" alt="user" />
              <MdVerified className="absolute right-2 top-2 text-2 text-blue-600 text-2xl" />
            </div>
            <div>
              <div className="flex items-center gap-4">
                <h2 className="text-4xl font-bold">{user.name}</h2>
                <div className="flex gap-2">
                  {user.for_hire && <Button className="text-xs">Richiedi i servizi</Button>}
                  {user.allow_messages && (
                    <Button variant="outline-gray">
                      <BsEnvelopeFill />
                    </Button>
                  )}
                  <Button variant="outline-gray">
                    <BsThreeDots />
                  </Button>
                </div>
              </div>
              <p className="my-4 text-sm">{user.bio}</p>
              <div className="flex flex-col gap-3">
                {user.for_hire && (
                  <p className="text-blue-600 flex items-center gap-1 text-sm">
                    <FaCheckCircle /> <span>Disponibile per il servizio</span>
                  </p>
                )}
                {user.location && (
                  <p className="flex items-center gap-1 text-gray-500 transition hover:text-black text-sm">
                    <FaLocationDot />
                    <span>{user.location}</span>
                  </p>
                )}
                <p className="flex items-center gap-1 text-gray-500 transition hover:text-black text-sm">
                  <FaLink />
                  <span>Collegati a {user.first_name}</span>
                </p>
                <p className="text-sm">Interessi</p>
                <div className="flex gap-2">
                  {user.tags.custom.map((title) => (
                    <span className="bg-gray-200 text-sm text-neutral-900 py-1 px-3 rounded-md">
                      {title.title.charAt(0).toUpperCase() + title.title.slice(1)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 border-b border-gray-200 pb-4 mb-12">
            <div className="mx-auto w-[97%]">
              <ul className="flex gap-6">
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <FaImage />
                  <span>Foto {user.total_photos}</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <FaHeart />
                  <span>Like {user.total_likes.toLocaleString()}</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <MdFolderCopy />
                  <span>Collezioni {user.total_collections}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-10/12 mx-auto">
            <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 768: 2, 992: 3 }}>
              <Masonry gutter="1.5rem">
                {user.photos &&
                  user.photos.map((image) => {
                    console.log(image.urls.small_s3);
                    return <Card imageDetails={image} userDetails={user} setShowModal={setShowModal} />;
                  })}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDetails;
