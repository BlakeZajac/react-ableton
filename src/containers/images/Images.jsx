import React, { useEffect, useRef } from "react";
import "./images.scss";

const Images = ({ sectionClass, images }) => {
  const containerRef = useRef(null);
  const lastYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.offsetTop;
      const scrollDirection = lastYRef.current < window.Offset ? 1 : -1;

      lastYRef.current = window.pageYOffset;

      images.forEach((image, index) => {
        const imageRef = image.ref;

        if (!imageRef.current) return;

        const { top } = imageRef.current.getBoundingClientRect();
        const offset = window.pageYOffset - (top + containerTop);
        const parallax = scrollDirection * offset * image.speed;

        imageRef.current.style.transform = `translate3d(0, ${parallax}px, 0)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className={`images section ${sectionClass}`}>
      <div className="images__wrapper row">
        <div className="images__wrapper__items">
          <div ref={containerRef} className="images__wrapper__items__item">
            <div className="images__wrapper__items__first">
              {images
                .slice(0, 2)
                .map((image, index) =>
                  image.src ? (
                    <img
                      ref={image.ref}
                      key={index}
                      src={image.src}
                      className={image.className}
                    />
                  ) : null
                )}
            </div>

            <div className="images__wrapper__items__last">
              {images
                .slice(2)
                .map((image, index) =>
                  image.src ? (
                    <img
                      ref={image.ref}
                      key={index}
                      src={image.src}
                      className={image.className}
                    />
                  ) : null
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
