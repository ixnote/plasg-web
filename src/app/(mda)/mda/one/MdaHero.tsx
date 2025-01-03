import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const MdaHero = ({ slug, hero }: any) => {
  const router = useRouter();

  return (
    <div className="flex flex-col py-24 pt-[170px] gap-4 lg:gap-16">
      <span className="flex flex-col gap-8 mb-10">
        <span className="flex flex-col-reverse items-start justify-between gap-8 lg:flex-row">
          <div className="flex flex-col items-start justify-start gap-8">
            <p className="text-[52px] text-brand-main font-medium font-geistsans max-w-[800px] leading-[56px] lg:col-span-3 col-span-2">
              {hero?.title}
            </p>
            <div className="relative w-full font-geistsans font-normal text-lg text-brand-dark/70 lg:w-[50%]">
              {hero?.description && (
                <>
                  <div
                    className={`relative overflow-hidden transition-all duration-300 ${
                      hero.description.length > 250 ? "max-h-[4.5em]" : ""
                    }`}
                    id="description-container"
                  >
                    <div>{hero.description}</div>
                    <div
                      className="absolute bottom-0 right-0 h-[1.5em] w-[120px] transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1))",
                        opacity: hero.description.length > 250 ? "1" : "0",
                      }}
                      id="fade-overlay"
                    />
                  </div>
                  {hero.description.length > 250 && (
                    <div className="flex items-center justify-start mt-4">
                      <button
                        className={
                          "group transition-fx border-[1px] border-brand-grayish flex items-center justify-center gap-4 p-4 px-8 rounded-lg font-normal text-base font-geistsans text-brand-white cursor-pointer bg-brand-main hover:bg-brand-lightYellow hover:text-brand-dark hover:px-6 hover:border-brand-lightYellow"
                        }
                        onClick={() => {
                          const container = document.getElementById(
                            "description-container"
                          );
                          const fadeOverlay =
                            document.getElementById("fade-overlay");
                          const button =
                            document.getElementById("read-more-btn");

                          if (container && fadeOverlay && button) {
                            const isExpanded =
                              container.classList.contains("expanded");

                            if (isExpanded) {
                              // Collapse
                              container.classList.remove("expanded");
                              container.style.maxHeight = "4.5em";
                              fadeOverlay.style.opacity = "1";
                              button.textContent = "Read More";
                            } else {
                              // Expand
                              container.classList.add("expanded");
                              container.style.maxHeight = `${container.scrollHeight}px`;
                              fadeOverlay.style.opacity = "0";
                              button.textContent = "Show Less";
                            }
                          }
                        }}
                        id="read-more-btn"
                      >
                        Read More
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="svg-path group-hover:fill-brand-dark/80"
                            d="M0 10.1364L0 7.86364H13.6364L7.38636 1.61364L9 0L18 9L9 18L7.38636 16.3864L13.6364 10.1364H0Z"
                            fill="#D1D5DB"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          <span className="col-span-2 hidden flex-col gap-6 lg:flex">
            <p className="relative text-[18px] font-normal text-brand-main m-0 min-w-[200px] max-w-[800px] font-geistsans">
              <Image
                src={hero?.logo}
                width={220}
                height={209}
                alt="LOGO"

                // className="w-max h-[209px]"
              />
            </p>
          </span>
        </span>
      </span>
      <div className="w-full">
        <Image
          src={hero?.image}
          width={1360}
          height={420}
          alt="mda_hero_image"
          className="w-[1360px] h-[580px] object-cover rounded-xl xl:w-full"
          // loading="lazy"
        />
      </div>
    </div>
  );
};

export default MdaHero;
