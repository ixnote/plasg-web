import React from "react";

const QuickActions = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-24 bg-white">
        {/* content */}
        <div className="flex flex-col items-between justify-between gap-20 w-[92%] h-[70%]">
          <div className="max-h-[204px] h-[20%] flex flex-col gap-4 w-[65%]">
            <span className="font-light text-sm text-black font-geistmono">
              QUICK ACTIONS
            </span>
            <span className="font-medium text-4xl font-geistsans text-[#0E3E40]">
              Easily Access Essential Information on Topics of Interest{" "}
            </span>
            <span className="font-normal text-base text-[rgba(14, 62, 64, 0.8)] font-geistsans w-[75%]">
              Find key information quickly on a variety of important topics
              right here on the Plateau Government website.
            </span>
          </div>
          <div
            className="border-[1px] border-[#B1D362
            ] rounded-2xl flex flex-col items-center justify-between gap-20"
          >
            {/* content */}
            <div className="flex items-center justify-between gap-4 w-full m-auto">
              {/* Cards */}
              <div className="h-[540px] w-[50%] bg-[#E5E7EB] p-8 rounded-2xl flex flex-col items-start justify-start gap-28">
                <div className="flex flex-col gap-16">
                  <div className="flex flex-col gap-4 text-[#588065]">
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
                    <span>Health</span>
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="font-geistsans font-medium text-3xl text-brand-main">
                      Health Services and Information
                    </div>
                    <div className="font-geistsans font-normal text-lg text-brand-main">
                      Discover comprehensive healthcare resources in Plateau
                      State. Access downloadable documents, detailed reports,
                      helpful articles, and essential information to stay
                      informed and healthy.
                    </div>
                  </div>
                </div>
                <div className="border-[1px] border-[#9CA3AF] p-[10px] rounded-lg w-[134px] flex items-center justify-center text-brand-main font-normal text-sm bg-transparent font-geistsans cursor-pointer duration-300 ease-in-out hover:bg-brand-dark hover:text-brand-white ">
                  View Topic
                </div>
              </div>
              <div className="h-[540px] w-[50%] bg-[#E5E7EB] p-8 rounded-2xl flex flex-col items-start justify-start gap-28">
                <div className="flex flex-col gap-16">
                  <div className="flex flex-col gap-4 text-[#588065]">
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
                    <span>Governance</span>
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="font-geistsans font-medium text-3xl text-brand-main">
                      Governance and Public Administration
                    </div>
                    <div className="font-geistsans font-normal text-lg text-brand-main">
                      Stay informed about the governance of Plateau State.
                      Access downloadable reports on government spending, debt
                      management, budget performance, and more. Find all the
                      essential information to understand how your state is
                      managed and how decisions impact you.
                    </div>
                  </div>
                </div>
                <div className="border-[1px] border-[#9CA3AF] p-[10px] rounded-lg w-[134px] flex items-center justify-center text-brand-main font-normal text-sm bg-transparent font-geistsans cursor-pointer duration-300 ease-in-out hover:bg-brand-dark hover:text-brand-white ">
                  View Topic
                </div>
              </div>
            </div>
            <button className="glass-fx shadow-sm flex items-center justify-center gap-4 p-4 px-6 rounded-lg font-normal text-base font-geistsans text-[#0E3E40] margin-auto hover:bg-[#FCFF45] hover:text-black focus:border-none focus:outline-none  duration-300 ease-in-out">
              See All Topics{" "}
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="svg-path"
                  d="M0 10.1364L0 7.86364H13.6364L7.38636 1.61364L9 0L18 9L9 18L7.38636 16.3864L13.6364 10.1364H0Z"
                  fill="#D1D5DB"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickActions;
