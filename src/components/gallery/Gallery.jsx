import React, { useState } from "react";
import GallryBanner from "./GallryBanner";
import CommonBanner from "../CommonBanner";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = [
    "/assets/images/handwrist.jpg",
    "/assets/images/services1.png",
    "/assets/images/services2.png",
    "/assets/images/hipdisorders.jpg",
    "/assets/images/shoulderinjury.jpg",
    "/assets/images/Shoulder Dislocations.png",
    "/assets/images/educationknee.png",
    "/assets/images/handwrist.jpg",
  ];

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="GallryImagesParent">
        <CommonBanner title={'Explore Our Gallery'}/>
      {/* <GallryBanner /> */}
      <div className="container-lg mt-5">
        <div>
          <div className="gallery">
            <div className="row">
              {images.map((image, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div
                    className="gallery-item"
                    onClick={() => openModal(index)}
                  >
                    <img
                      src={image}
                      alt={`Gallery item ${index + 1}`}
                      className="gallery-img"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {isModalOpen && (
            <div className="modal-overlay" onClick={closeModal}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images[selectedImageIndex]}
                  alt="Selected"
                  className="modal-img"
                />
                <div className="Gallryclose-btn" onClick={closeModal}>
                  X
                </div>
                <button className="Gallryprev-btn" onClick={goToPreviousImage}>
                  ❮
                </button>
                <button className="Gallrynext-btn" onClick={goToNextImage}>
                  ❯
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .gallery {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }
        .gallery-item {
          cursor: pointer;
          width: 100%;
          height: 300px;
        }
        .gallery-img {
          width: 100%;
          height: 100%;
          border-radius: 8px;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          position: relative;
          max-width: 80%;
          max-height: 90vh;
          text-align: center;
        }
        .modal-img {
          max-width: 100%;
          max-height: 80vh;
          border-radius: 8px;
        }
        .Gallryclose-btn {
          position: absolute;
          top: 46%;
          right: 45%;
          transform: translateX(-50%);
          background-color: rgba(0, 0, 0, 0.6);
          color: white;
          font-size: 24px;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          border-radius: 5px;
        }
        .Gallryprev-btn,
        .Gallrynext-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.6);
          color: white;
          border: none;
          padding: 20px;
          cursor: pointer;
          border-radius: 50%;
          font-size: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 60px;
          width: 60px;
        }
        .Gallryprev-btn {
          left: 10px;
        }
        .Gallrynext-btn {
          right: 10px;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
