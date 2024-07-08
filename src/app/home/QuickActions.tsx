import AssetCardLight from "@/components/AssetCardLight";
import ButtonLight from "@/components/ButtonLight";
import React from "react";

const QuickActions = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-24 bg-brand-white">
        {/* content */}
        <div className="flex flex-col items-between justify-between gap-20 w-[92%] h-[70%]">
          {/* top */}
          <div className="w-full flex flex-col gap-4 lg:w-[65%]">
            <span className="font-light text-[10px] text-brand-dark font-geistmono md:text-xs lg:text-sm">
              QUICK ACTIONS
            </span>
            <span className="font-medium text-[28px] font-geistsans text-brand-main md:text-4xl">
              Easily Access Essential Information on Topics of Interest{" "}
            </span>
            <span className="w-full font-normal text-[14px] text-brand-main font-geistsans md:text-base lg:w-[75%]">
              Find key information quickly on a variety of important topics
              right here on the Plateau Government website.
            </span>
          </div>
          <div className="flex flex-col items-center justify-between gap-20">
            {/* content */}
            <div className="flex items-center justify-between flex-wrap gap-4 w-full m-auto">
              {/* Cards */}
              <AssetCardLight
                logo={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1907_7068)">
                      <path
                        d="M11.75 5.32648L11.202 5.83848C11.2722 5.91358 11.357 5.97345 11.4513 6.01438C11.5456 6.05531 11.6472 6.07643 11.75 6.07643C11.8528 6.07643 11.9544 6.05531 12.0487 6.01438C12.143 5.97345 12.2278 5.91358 12.298 5.83848L11.75 5.32648ZM9.184 18.5485C7.734 17.3725 6.042 15.8295 4.718 14.1405C3.379 12.4335 2.5 10.6805 2.5 9.07048H1C1 11.1875 2.13 13.2725 3.537 15.0665C4.959 16.8795 6.747 18.5025 8.239 19.7135L9.184 18.5485ZM2.5 9.07048C2.5 6.16548 3.768 4.37048 5.336 3.75548C6.901 3.14248 9.09 3.58048 11.202 5.83848L12.298 4.81448C9.91 2.26048 7.099 1.45448 4.789 2.35848C2.482 3.26248 1 5.74448 1 9.07048H2.5ZM15.26 19.7125C16.753 18.5015 18.541 16.8785 19.963 15.0655C21.37 13.2715 22.5 11.1865 22.5 9.06848H21C21 10.6805 20.12 12.4325 18.782 14.1395C17.458 15.8285 15.766 17.3715 14.316 18.5475L15.26 19.7125ZM22.5 9.06848C22.5 5.74348 21.018 3.26148 18.71 2.35848C16.4 1.45348 13.59 2.25848 11.202 4.81348L12.298 5.83848C14.41 3.58048 16.599 3.14148 18.164 3.75448C19.732 4.36848 21 6.16448 21 9.06848H22.5ZM8.239 19.7135C9.509 20.7455 10.392 21.5025 11.75 21.5025V20.0025C11.027 20.0025 10.577 19.6785 9.184 18.5485L8.239 19.7135ZM14.316 18.5475C12.923 19.6775 12.473 20.0025 11.75 20.0025V21.5025C13.108 21.5025 13.991 20.7455 15.261 19.7135L14.316 18.5475Z"
                        fill="#588065"
                      />
                      <path
                        d="M18.25 8.75195H16.25M16.25 8.75195H14.25M16.25 8.75195V6.75195M16.25 8.75195V10.752"
                        stroke="#588065"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1907_7068">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                url={"search/search-stuff"}
                logoText={"Health"}
                title={"Health Services and Information"}
                description={
                  "Discover comprehensive healthcare resources in Plateau State. Access downloadable documents, detailed reports, helpful articles, and essential information to stay informed and healthy."
                }
                button1text={"View Topic"}
              />
              <AssetCardLight
                logo={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.2106 9.76152C21.8114 9.76152 22.3 9.26727 22.3 8.65954V7.31593C22.3 6.90954 22.0793 6.53613 21.7282 6.34575L12.6579 1.40326C12.1222 1.11037 11.4779 1.11037 10.9422 1.40326L1.87194 6.342C1.51724 6.53604 1.30005 6.90579 1.30005 7.31218V8.65579C1.30005 9.26354 1.78868 9.75777 2.3895 9.75777H2.79127V19.2618C1.96964 19.2691 1.30366 19.9464 1.30366 20.7811V22.0515C1.30366 22.2529 1.46654 22.4176 1.66561 22.4176H21.9346C22.1337 22.4176 22.2965 22.2529 22.2965 22.0515V20.7811C22.2965 19.95 21.6305 19.2728 20.8089 19.2618V9.75777H21.2107L21.2106 9.76152ZM2.02016 8.65954V7.31593C2.02016 7.18047 2.09255 7.05233 2.212 6.9901L11.286 2.0476C11.6081 1.87187 11.9918 1.87187 12.3139 2.0476L21.3842 6.98635C21.5037 7.05225 21.5761 7.17672 21.5761 7.31218V8.65579C21.5761 8.86081 21.4096 9.02555 21.2105 9.02555H2.38932C2.18663 9.02555 2.02376 8.85715 2.02376 8.65579L2.02016 8.65954ZM21.5724 20.785V21.6893H2.02735V20.785C2.02735 20.3493 2.37481 19.9978 2.80554 19.9978H13.1209C13.1209 19.9978 13.1463 20.0052 13.1571 20.0052V19.9978H20.7942C21.225 19.9978 21.5724 20.3493 21.5724 20.785ZM7.69895 19.2656H5.70824V12.5916C5.70824 12.0351 6.15344 11.5848 6.70359 11.5848C7.25375 11.5848 7.69895 12.0351 7.69895 12.5916V19.2656ZM12.7952 19.2656H10.8044V12.5916C10.8044 12.0351 11.2496 11.5848 11.7998 11.5848C12.35 11.5848 12.7952 12.0351 12.7952 12.5916V19.2656ZM17.8913 19.2656H15.9006V12.5916C15.9006 12.0351 16.3458 11.5848 16.896 11.5848C17.4461 11.5848 17.8913 12.0351 17.8913 12.5916V19.2656ZM20.0848 19.2656H18.6152V12.5916C18.6152 11.6324 17.8443 10.8526 16.896 10.8526C15.9477 10.8526 15.1767 11.6324 15.1767 12.5916V19.2656H13.519V12.5916C13.519 11.6324 12.7481 10.8526 11.7998 10.8526C10.8515 10.8526 10.0805 11.6324 10.0805 12.5916V19.2656H8.42284V12.5916C8.42284 11.6324 7.6519 10.8526 6.70359 10.8526C5.75528 10.8526 4.98435 11.6324 4.98435 12.5916V19.2656H3.51483V9.76515H20.0847L20.0848 19.2656ZM11.7997 4.1673C10.7935 4.1673 9.97552 4.99468 9.97552 6.01247C9.97552 7.03026 10.7935 7.85765 11.7997 7.85765C12.8059 7.85765 13.6239 7.03026 13.6239 6.01247C13.6239 4.99468 12.8059 4.1673 11.7997 4.1673ZM11.7997 7.12169C11.1953 7.12169 10.6994 6.62378 10.6994 6.00872C10.6994 5.39366 11.1917 4.89576 11.7997 4.89576C12.4078 4.89576 12.9 5.39366 12.9 6.00872C12.9 6.62378 12.4078 7.12169 11.7997 7.12169Z"
                      fill="#588065"
                      stroke="#588065"
                      stroke-width="0.5"
                    />
                  </svg>
                }
                url={"search/search-stuff"}
                logoText={"Governance"}
                title={"Governance and Public Administration"}
                description={
                  "Stay informed about the governance of Plateau State. Access downloadable reports on government spending, debt management, budget performance, and more. Find all the essential information to understand how your state is managed and how decisions impact you."
                }
                button1text={"View Topic"}
              />
              <AssetCardLight
                logo={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.18538 19.1335C1.64794 19.1335 1.19955 18.9538 0.840216 18.5945C0.480882 18.2351 0.300827 17.7864 0.300049 17.2481V5.85213C0.300049 5.31469 0.480104 4.8663 0.840216 4.50697C1.20033 4.14763 1.64833 3.96758 2.18422 3.9668H7.30005V2.35097C7.30005 1.8143 7.4801 1.36591 7.84022 1.0058C8.20033 0.645688 8.64872 0.466022 9.18538 0.466799H12.4159C12.9525 0.466799 13.4009 0.646466 13.761 1.0058C14.1212 1.36513 14.3008 1.81352 14.3 2.35097V3.9668H19.4159C19.9525 3.9668 20.4005 4.14685 20.7599 4.50697C21.1192 4.86708 21.2993 5.31547 21.3 5.85213V17.2493C21.3 17.786 21.12 18.2344 20.7599 18.5945C20.3998 18.9546 19.9518 19.1342 19.4159 19.1335H2.18538ZM8.46671 3.9668H13.1334V2.35097C13.1334 2.17208 13.0587 2.00758 12.9094 1.85747C12.76 1.70735 12.5955 1.63269 12.4159 1.63347H9.18421C9.00533 1.63347 8.84083 1.70813 8.69072 1.85747C8.5406 2.0068 8.46594 2.1713 8.46671 2.35097V3.9668ZM20.1334 12.7168H13.1334V14.4668H8.46671V12.7168H1.46672V17.2493C1.46672 17.4282 1.54138 17.5927 1.69072 17.7428C1.84005 17.8929 2.00455 17.9676 2.18422 17.9668H19.4159C19.5948 17.9668 19.7593 17.8921 19.9094 17.7428C20.0595 17.5935 20.1342 17.4286 20.1334 17.2481V12.7168ZM9.63338 13.3001H11.9667V10.9668H9.63338V13.3001ZM1.46672 11.5501H8.46671V9.80013H13.1334V11.5501H20.1334V5.85213C20.1334 5.67247 20.0587 5.50758 19.9094 5.35747C19.76 5.20736 19.5955 5.13269 19.4159 5.13347H2.18422C2.00533 5.13347 1.84083 5.20813 1.69072 5.35747C1.5406 5.5068 1.46594 5.67169 1.46672 5.85213V11.5501Z"
                      fill="#588065"
                      stroke="#588065"
                      stroke-width="0.3"
                    />
                  </svg>
                }
                url={"search/search-stuff"}
                logoText={"Business"}
                title={"Business and Economic Development"}
                description={
                  "Discover everything you need to know about doing business in Plateau State. Access downloadable business reports, economic policies, business incentives, and more. Get the latest information to help you grow and succeed in our thriving economic landscape."
                }
                button1text={"View Topic"}
              />
              <AssetCardLight
                logo={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9633 1.35788C11.868 1.28175 11.7321 1.28175 11.6368 1.35788L1.39923 9.49745C1.28567 9.58769 1.26696 9.75277 1.35694 9.86634C1.44717 9.97926 1.612 9.99861 1.72582 9.90838L3.24392 8.70138V22.0384C3.24392 22.1834 3.36132 22.3009 3.50642 22.3009H20.0939C20.239 22.3009 20.3564 22.1834 20.3564 22.0384V8.70159L21.8743 9.90838C21.9225 9.94683 21.9801 9.96541 22.0373 9.96541C22.1147 9.96541 22.1911 9.93145 22.2432 9.86634C22.3331 9.75277 22.3144 9.58769 22.2009 9.49745L11.9633 1.35788ZM19.8314 21.7759H3.76892V8.28398L11.8 1.89865L19.8314 8.28417V21.7759Z"
                      fill="#588065"
                      stroke="#588065"
                      stroke-width="0.8"
                    />
                    <path
                      d="M8.71631 10.4785C8.71631 12.0796 10.0488 14.0025 11.4072 15.5467C10.1544 16.9133 8.96138 17.9191 8.93626 17.9403C8.825 18.0333 8.81039 18.1989 8.90344 18.31C8.95523 18.3721 9.02982 18.4041 9.10493 18.4041C9.16415 18.4041 9.22388 18.3841 9.2731 18.343C9.37615 18.2568 10.5333 17.2813 11.7633 15.9425C12.9932 17.2813 14.1504 18.2568 14.2534 18.343C14.3652 18.4364 14.5305 18.4209 14.6231 18.31C14.7161 18.1988 14.7015 18.0333 14.5903 17.9403C14.5651 17.9191 13.3718 16.9133 12.1191 15.5467C13.4775 14.0025 14.81 12.0796 14.81 10.4785C14.81 8.79849 13.4431 7.43164 11.7633 7.43164C10.0832 7.43164 8.71631 8.79849 8.71631 10.4785ZM14.285 10.4785C14.285 11.9057 13.0476 13.6862 11.7633 15.15C10.4787 13.6862 9.24131 11.9057 9.24131 10.4785C9.24131 9.08791 10.3726 7.95664 11.7633 7.95664C13.1537 7.95664 14.285 9.08791 14.285 10.4785Z"
                      fill="#588065"
                      stroke="#588065"
                      stroke-width="0.8"
                    />
                  </svg>
                }
                url={"search/search-stuff"}
                logoText={"Welfare"}
                title={"Community Welfare and Support"}
                description={
                  "Explore resources dedicated to the welfare of Plateau State's residents. Find downloadable documents on policies, benefits, and reports aimed at enhancing community well-being. Stay informed and access the support you need for a better quality of life."
                }
                button1text={"View Topic"}
              />
            </div>
            <ButtonLight text={"See All Topics"} url={"search"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickActions;
