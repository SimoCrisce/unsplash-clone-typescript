import { ImageInterface } from "../interfaces/Image";
import { useState, useEffect, SetStateAction } from "react";
import Card from "../components/Card";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Modal from "../components/Modal";

interface ModalActions {
  showModal: boolean;
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
}

const Images = ({ showModal, setShowModal }: ModalActions) => {
  const [images, setImages] = useState<ImageInterface[]>([]);

  const imagesFetch = () => {
    fetch("https://api.unsplash.com/photos/?client_id=MYxqruRM9Vgdg9DuJTS9D8ro4dSPW7cohm5cMghe8rE")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nel reperimento dei dati richiesti");
        }
      })
      .then((imageList: ImageInterface[]) => setImages(imageList))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    imagesFetch();
  }, []);

  return (
    <>
      <div className="w-10/12 mx-auto">
        <Modal showModal={showModal} setShowModal={setShowModal}>
          ciao
        </Modal>
        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 768: 2, 992: 3 }}>
          <Masonry gutter="1.5rem">
            {images.map((image) => (
              <Card setShowModal={setShowModal} key={image.id} imageDetails={image} userDetails={image.user} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default Images;
