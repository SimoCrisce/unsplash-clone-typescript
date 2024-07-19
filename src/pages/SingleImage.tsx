import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImageInterface } from "../interfaces/Image";
import Modal from "../components/Modal";

const SingleImage = () => {
  const [image, setImage] = useState<ImageInterface | undefined>(undefined);

  const { id } = useParams();
  const fetchImage = () => {
    fetch(`https://api.unsplash.com/photos/${id}/?client_id=MYxqruRM9Vgdg9DuJTS9D8ro4dSPW7cohm5cMghe8rE`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nel reperimento dei dati richiesti");
        }
      })
      .then((image: ImageInterface) => setImage(image))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchImage();
  }, []);
  return <div>{/* {image && <Modal showModal={showModal} setShowModal={setShowModal}></Modal>} */}</div>;
};

export default SingleImage;
