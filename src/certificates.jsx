import { useState, Fragment } from "react";
import { Reveal } from "./Reveal"

const CertificatesGrid = ({ certificates }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <Fragment>
      <section id="certificates" className="flex flex-col items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-6xl p-4">
          {certificates.map((certificate) => (
            <Reveal>
              <div
                className="rounded overflow-hidden shadow-lg cursor-pointer"
                onClick={() => openModal(certificate)}
              >
                <img
                  src={certificate}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged certificate"
              className="w-full h-auto object-cover rounded"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CertificatesGrid;
