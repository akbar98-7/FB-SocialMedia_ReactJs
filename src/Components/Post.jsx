import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel";

function Post({ post }) {
  const { createdBy, avatar, description, images, createdAt } = post;
  const [showCarousel, setShowCarousel] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openCarousel = (index) => {
    setSelectedIndex(index);
    setShowCarousel(true);
  };

  // ===== FACEBOOK STYLE TIME FUNCTION =====
  const formatTime = (timestamp) => {
    const diffInSeconds = Math.floor((Date.now() - timestamp) / 1000);

    // 🔥 Show Just Now for 60 seconds
    if (diffInSeconds < 60) return "Just Now";

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes}m`;

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h`;

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d`;

    return new Date(timestamp).toLocaleDateString();
  };

  const extraImages = images.length - 4;

  return (
    <div className="bg-orange-700 w-[600px] rounded-xl shadow-md p-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={avatar}
          alt="avatar"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-mauve-300">{createdBy}</h3>
          <p className="text-sm text-mauve-300">{formatTime(createdAt)}</p>
        </div>
      </div>

      {/* Description */}
      <p className="mb-3 text-white">{description}</p>

      {/* ===== FACEBOOK STYLE IMAGE GRID ===== */}
      <div className="overflow-hidden rounded-lg">
        {/* Top Big Image */}
        <div>
          <img
            src={images[0]}
            onClick={() => openCarousel(0)}
            className="w-full h-[400px] object-cover cursor-pointer"
            alt=""
          />
        </div>

        {/* Bottom 3 Images */}
        <div className="grid grid-cols-3 gap-1 mt-1">
          {images.slice(1, 4).map((img, index) => (
            <div key={index} className="relative">
              <img
                src={img}
                onClick={() => openCarousel(index + 1)}
                className="w-full h-[150px] object-cover cursor-pointer"
                alt=""
              />

              {/* +X Overlay on Last Image */}
              {index === 2 && extraImages > 0 && (
                <div
                  onClick={() => openCarousel(index + 1)}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-3xl font-bold cursor-pointer"
                >
                  +{extraImages}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Carousel */}
      {showCarousel && (
        <ImageCarousel
          images={images}
          startIndex={selectedIndex}
          onClose={() => setShowCarousel(false)}
        />
      )}
    </div>
  );
}

export default Post;
