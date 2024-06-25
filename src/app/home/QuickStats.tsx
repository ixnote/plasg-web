import ButtonDark from "@/components/ButtonDark";
import React from "react";

const QuickStats = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-24 bg-brand-main">
        {/* content */}
        <div className="flex flex-col items-between justify-between gap-20 w-[92%] h-[70%]">
          {/* top */}
          <div className="w-full flex flex-col gap-4 lg:w-[65%]">
            <span className="font-light text-[10px] text-brand-white font-geistmono md:text-xs lg:text-sm">
              QUICK STATS
            </span>
            <span className="font-medium text-[28px] font-geistsans text-brand-white md:text-4xl">
              Plateau State by the Numbers: Unveiling Key Statistics for
              Informed Decision-Making
            </span>
            <span className="w-full font-normal text-[14px] text-brand-white font-geistsans md:text-base lg:w-[75%]">
              Plateau State is a diverse and vibrant region in Nigeria, known
              for its stunning natural landscapes and rich cultural heritage.
            </span>
          </div>
          {/* bottom */}
          <div className="border-[1px] border-brand-secondary rounded-2xl p-16 flex items-center justify-center lg:p-32">
            {/* content */}
            <div className="flex flex-col items-center justify-center gap-40 w-full mx-auto">
              {/* top */}
              <div className="flex flex-col gap-8 items-center justify-center flex-wrap w-full lg:gap-4 lg:flex-row">
                {/* items */}
                <div className="flex flex-col gap-6 items-center justify-center border-[1px] border-brand-white/40 p-8 px-16 font-geistsans min-w-[30%] w-[100%] mx-auto md:w-[480px] lg:w-[30%]">
                  <span className="flex items-center justify-start gap-4 text-brand-white font-normal text-base w-full">
                    <svg
                      width="53"
                      height="52"
                      viewBox="0 0 53 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        width="52"
                        height="52"
                        rx="26"
                        fill="#B1D362"
                      />
                      <path
                        d="M37 12.0293C36.235 12.0293 35.483 12.3293 34.906 12.9053L25 22.7793L24.78 22.9993L24.72 23.3123L24.03 26.8123L23.72 28.2803L25.187 27.9703L28.687 27.2803L29 27.2203L29.22 27.0003L39.094 17.0943C39.5075 16.6793 39.789 16.1512 39.903 15.5765C40.0169 15.0019 39.9582 14.4063 39.7343 13.8649C39.5104 13.3236 39.1313 12.8606 38.6447 12.5343C38.1581 12.2079 37.5859 12.0329 37 12.0313V12.0293ZM37 13.9693C37.235 13.9693 37.464 14.0893 37.688 14.3123C38.134 14.7583 38.134 15.2403 37.688 15.6873L28 25.3733L26.28 25.7173L26.625 23.9973L36.313 14.3093C36.536 14.0863 36.765 13.9663 37 13.9663V13.9693ZM16 15.9993V35.9993H36V22.8113L34 24.8113V33.9993H18V17.9993H27.188L29.188 15.9993H16Z"
                        fill="black"
                      />
                    </svg>
                    Created
                  </span>
                  <span className="font-medium text-5xl text-brand-white">
                    1976
                  </span>
                </div>
                <div className="flex flex-col gap-6 items-center justify-center border-[1px] border-brand-white/40 p-8 px-16 font-geistsans min-w-[30%] w-[100%] mx-auto md:w-[480px] lg:w-[30%]">
                  <span className="flex items-center justify-start gap-4 text-brand-white font-normal text-base w-full">
                    <svg
                      width="53"
                      height="52"
                      viewBox="0 0 53 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        width="52"
                        height="52"
                        rx="26"
                        fill="#B1D362"
                      />
                      <path
                        d="M34.3566 30.3868V21.6132C34.8439 21.4883 35.2896 21.2366 35.6483 20.8838C36.007 20.531 36.2659 20.0895 36.3988 19.6042C36.5316 19.1189 36.5337 18.6072 36.4049 18.1208C36.276 17.6345 36.0207 17.1909 35.6649 16.8351C35.3091 16.4793 34.8655 16.224 34.3792 16.0951C33.8928 15.9663 33.3811 15.9684 32.8958 16.1012C32.4105 16.2341 31.969 16.493 31.6162 16.8517C31.2634 17.2104 31.0117 17.6561 30.8868 18.1434H22.1132C21.9883 17.6561 21.7366 17.2104 21.3838 16.8517C21.031 16.493 20.5895 16.2341 20.1042 16.1012C19.6189 15.9684 19.1072 15.9663 18.6208 16.0951C18.1345 16.224 17.6909 16.4793 17.3351 16.8351C16.9793 17.1909 16.724 17.6345 16.5951 18.1208C16.4663 18.6072 16.4684 19.1189 16.6012 19.6042C16.7341 20.0895 16.993 20.531 17.3517 20.8838C17.7104 21.2366 18.1561 21.4883 18.6434 21.6132V30.3868C18.1561 30.5117 17.7104 30.7634 17.3517 31.1162C16.993 31.469 16.7341 31.9105 16.6012 32.3958C16.4684 32.8811 16.4663 33.3928 16.5951 33.8792C16.724 34.3655 16.9793 34.8091 17.3351 35.1649C17.6909 35.5207 18.1345 35.776 18.6208 35.9049C19.1072 36.0337 19.6189 36.0316 20.1042 35.8988C20.5895 35.7659 21.031 35.507 21.3838 35.1483C21.7366 34.7896 21.9883 34.3439 22.1132 33.8566H30.8868C31.0117 34.3439 31.2634 34.7896 31.6162 35.1483C31.969 35.507 32.4105 35.7659 32.8958 35.8988C33.3811 36.0316 33.8928 36.0337 34.3792 35.9049C34.8655 35.776 35.3091 35.5207 35.6649 35.1649C36.0207 34.8091 36.276 34.3655 36.4049 33.8792C36.5337 33.3928 36.5316 32.8811 36.3988 32.3958C36.2659 31.9105 36.007 31.469 35.6483 31.1162C35.2896 30.7634 34.8439 30.5117 34.3566 30.3868ZM33.6423 17.4292C33.9248 17.4292 34.201 17.513 34.4359 17.67C34.6708 17.8269 34.8539 18.05 34.962 18.311C35.0702 18.572 35.0985 18.8593 35.0433 19.1364C34.9882 19.4135 34.8522 19.668 34.6524 19.8678C34.4526 20.0675 34.1981 20.2036 33.921 20.2587C33.6439 20.3138 33.3567 20.2855 33.0957 20.1774C32.8347 20.0693 32.6116 19.8862 32.4546 19.6513C32.2976 19.4164 32.2139 19.1402 32.2139 18.8577C32.2139 18.4788 32.3644 18.1155 32.6322 17.8476C32.9001 17.5797 33.2635 17.4292 33.6423 17.4292ZM17.9292 18.8577C17.9292 18.5752 18.013 18.299 18.17 18.0641C18.3269 17.8292 18.55 17.6461 18.811 17.538C19.072 17.4298 19.3593 17.4015 19.6364 17.4567C19.9135 17.5118 20.168 17.6478 20.3678 17.8476C20.5675 18.0474 20.7036 18.3019 20.7587 18.579C20.8138 18.8561 20.7855 19.1433 20.6774 19.4043C20.5693 19.6653 20.3862 19.8884 20.1513 20.0454C19.9164 20.2024 19.6402 20.2861 19.3577 20.2861C18.9788 20.2861 18.6155 20.1356 18.3476 19.8678C18.0797 19.5999 17.9292 19.2365 17.9292 18.8577ZM19.3577 34.5708C19.0752 34.5708 18.799 34.487 18.5641 34.33C18.3292 34.1731 18.1461 33.95 18.038 33.689C17.9298 33.428 17.9015 33.1407 17.9567 32.8636C18.0118 32.5865 18.1478 32.332 18.3476 32.1322C18.5474 31.9325 18.8019 31.7964 19.079 31.7413C19.3561 31.6862 19.6433 31.7145 19.9043 31.8226C20.1653 31.9307 20.3884 32.1138 20.5454 32.3487C20.7024 32.5836 20.7861 32.8598 20.7861 33.1423C20.7861 33.5212 20.6356 33.8845 20.3678 34.1524C20.0999 34.4203 19.7365 34.5708 19.3577 34.5708ZM30.8868 32.4281H22.1132C21.9848 31.9372 21.7281 31.4894 21.3693 31.1307C21.0106 30.7719 20.5628 30.5152 20.0719 30.3868V21.6132C20.5628 21.4848 21.0106 21.2281 21.3693 20.8693C21.7281 20.5106 21.9848 20.0628 22.1132 19.5719H30.8868C31.0152 20.0628 31.2719 20.5106 31.6307 20.8693C31.9894 21.2281 32.4372 21.4848 32.9281 21.6132V30.3868C32.4369 30.5145 31.9887 30.771 31.6299 31.1299C31.271 31.4887 31.0145 31.9369 30.8868 32.4281ZM33.6423 34.5708C33.3598 34.5708 33.0836 34.487 32.8487 34.33C32.6138 34.1731 32.4307 33.95 32.3226 33.689C32.2145 33.428 32.1862 33.1407 32.2413 32.8636C32.2964 32.5865 32.4325 32.332 32.6322 32.1322C32.832 31.9325 33.0865 31.7964 33.3636 31.7413C33.6407 31.6862 33.928 31.7145 34.189 31.8226C34.45 31.9307 34.6731 32.1138 34.83 32.3487C34.987 32.5836 35.0708 32.8598 35.0708 33.1423C35.0702 33.521 34.9195 33.884 34.6518 34.1518C34.384 34.4195 34.021 34.5702 33.6423 34.5708Z"
                        fill="black"
                        stroke="black"
                        stroke-width="0.5"
                      />
                    </svg>
                    Land Area (m2)
                  </span>
                  <span className="font-medium text-5xl text-brand-white">
                    ≈27K
                  </span>
                </div>
                <div className="flex flex-col gap-6 items-center justify-center border-[1px] border-brand-white/40 p-8 px-16 font-geistsans min-w-[30%] w-[100%] mx-auto md:w-[480px] lg:w-[30%]">
                  <span className="flex items-center justify-start gap-4 text-brand-white font-normal text-base w-full">
                    <svg
                      width="53"
                      height="52"
                      viewBox="0 0 53 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        width="52"
                        height="52"
                        rx="26"
                        fill="#B1D362"
                      />
                      <path
                        d="M17.5801 21.7886C17.5804 20.7906 17.8386 19.8095 18.3297 18.9407C18.8208 18.0718 19.5282 17.3447 20.3832 16.8299C21.2382 16.315 22.2118 16.0299 23.2094 16.0022C24.2071 15.9746 25.195 16.2052 26.0772 16.6719C26.9594 17.1386 27.706 17.8254 28.2446 18.6656C28.7831 19.5059 29.0953 20.4711 29.1508 21.4676C29.2064 22.4641 29.0034 23.4581 28.5615 24.353C28.1197 25.2479 27.454 26.0134 26.6291 26.5752C28.4055 27.2268 29.9463 28.395 31.0532 29.9296C32.1601 31.4643 32.7824 33.295 32.84 35.1863C32.8376 35.3902 32.7564 35.5853 32.6135 35.7307C32.4706 35.8762 32.277 35.9609 32.0732 35.967C31.8694 35.9731 31.6711 35.9002 31.5197 35.7636C31.3683 35.6269 31.2756 35.437 31.261 35.2336C31.1983 33.1824 30.3394 31.2362 28.8663 29.8074C27.3932 28.3787 25.4216 27.5796 23.3694 27.5796C21.3173 27.5796 19.3457 28.3787 17.8726 29.8074C16.3995 31.2362 15.5406 33.1824 15.4779 35.2336C15.4674 35.4398 15.3765 35.6336 15.2248 35.7736C15.0731 35.9136 14.8726 35.9886 14.6663 35.9825C14.4599 35.9764 14.2642 35.8898 14.1209 35.7412C13.9777 35.5926 13.8984 35.3937 13.8999 35.1873C13.9574 33.2959 14.5796 31.4649 15.6864 29.9301C16.7933 28.3953 18.3342 27.2268 20.1108 26.5752C19.3309 26.044 18.6926 25.3302 18.2515 24.496C17.8104 23.6617 17.58 22.7323 17.5801 21.7886ZM23.37 17.5778C22.2532 17.5778 21.1822 18.0215 20.3925 18.8111C19.6028 19.6008 19.1592 20.6718 19.1592 21.7886C19.1592 22.9054 19.6028 23.9764 20.3925 24.7661C21.1822 25.5558 22.2532 25.9994 23.37 25.9994C24.4867 25.9994 25.5578 25.5558 26.3474 24.7661C27.1371 23.9764 27.5807 22.9054 27.5807 21.7886C27.5807 20.6718 27.1371 19.6008 26.3474 18.8111C25.5578 18.0215 24.4867 17.5778 23.37 17.5778ZM32.0968 21.7886C31.9417 21.7886 31.7894 21.7991 31.6399 21.8202C31.5356 21.8389 31.4285 21.8364 31.3251 21.8128C31.2218 21.7892 31.1242 21.745 31.0383 21.6829C30.9524 21.6208 30.8798 21.542 30.825 21.4513C30.7702 21.3605 30.7342 21.2597 30.7192 21.1547C30.7042 21.0497 30.7105 20.9428 30.7377 20.8404C30.7649 20.7379 30.8125 20.6419 30.8776 20.5583C30.9427 20.4746 31.024 20.4049 31.1166 20.3533C31.2093 20.3017 31.3113 20.2693 31.4168 20.258C32.4638 20.1066 33.5314 20.3077 34.4515 20.8295C35.3717 21.3514 36.0923 22.1644 36.4998 23.1406C36.9073 24.1168 36.9787 25.2009 36.7026 26.2221C36.4265 27.2433 35.8188 28.1437 34.9749 28.7817C36.2154 29.3371 37.2686 30.2397 38.0076 31.3804C38.7465 32.5211 39.1396 33.8513 39.1393 35.2105C39.1393 35.4199 39.0562 35.6207 38.9081 35.7688C38.76 35.9168 38.5592 36 38.3498 36C38.1404 36 37.9396 35.9168 37.7915 35.7688C37.6435 35.6207 37.5603 35.4199 37.5603 35.2105C37.5607 34.0357 37.1824 32.8921 36.4815 31.9493C35.7807 31.0065 34.7946 30.3147 33.6695 29.9765L33.1074 29.808V28.0437L33.539 27.8237C34.1788 27.4996 34.6907 26.9694 34.992 26.3186C35.2934 25.6678 35.3667 24.9345 35.2 24.2369C35.0333 23.5394 34.6364 22.9184 34.0733 22.4742C33.5103 22.0299 32.814 21.7884 32.0968 21.7886Z"
                        fill="black"
                        stroke="black"
                        stroke-width="0.5"
                      />
                    </svg>
                    Est Population
                  </span>
                  <span className="font-medium text-5xl text-brand-white">
                    3M
                  </span>
                </div>
                <div className="flex flex-col gap-6 items-center justify-center border-[1px] border-brand-white/40 p-8 px-16 font-geistsans min-w-[30%] w-[100%] mx-auto md:w-[480px] lg:w-[30%]">
                  <span className="flex items-center justify-start gap-4 text-brand-white font-normal text-base w-full">
                    <svg
                      width="53"
                      height="52"
                      viewBox="0 0 53 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        width="52"
                        height="52"
                        rx="26"
                        fill="#B1D362"
                      />
                      <path
                        d="M28.5 16H16.5V36H36.5V24H28.5V16ZM26.5 24H22.5V34H18.5V18H26.5V24ZM24.5 34V26H34.5V34H30.5V30H28.5V34H24.5Z"
                        fill="black"
                      />
                    </svg>
                    LGAs
                  </span>
                  <span className="font-medium text-5xl text-brand-white">
                    17
                  </span>
                </div>
                <div className="flex flex-col gap-6 items-center justify-center border-[1px] border-brand-white/40 p-8 px-16 font-geistsans min-w-[30%] w-[100%] mx-auto md:w-[480px] lg:w-[30%]">
                  <span className="flex items-center justify-start gap-4 text-white font-normal text-base w-full">
                    <svg
                      width="53"
                      height="52"
                      viewBox="0 0 53 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        width="52"
                        height="52.0003"
                        rx="26"
                        fill="#B1D362"
                      />
                      <path
                        d="M16.5 24C16.5 20.683 19.183 18 22.5 18L21.643 19.714M36.5 28C36.5 31.317 33.817 34 30.5 34L31.357 32.286M31.5 20.5H31.509M21.5 31.5H21.509M31.75 16.516C33.58 15.761 35.192 16.012 36.065 16.172C36.314 16.218 36.5 16.462 36.5 16.745V23.205C36.5 23.543 36.238 23.795 35.94 23.743C35.044 23.584 33.497 23.388 31.75 24.108C29.872 24.883 27.982 25.028 26.95 24.996C26.694 24.988 26.5 24.746 26.5 24.456V17.996C26.5 17.663 26.755 17.401 27.051 17.406C28.101 17.426 29.931 17.266 31.75 16.516ZM21.75 27.516C23.58 26.761 25.191 27.012 26.065 27.172C26.314 27.218 26.5 27.462 26.5 27.745V34.205C26.5 34.543 26.238 34.795 25.94 34.743C25.044 34.584 23.497 34.388 21.75 35.109C19.872 35.883 17.982 36.029 16.95 35.996C16.694 35.988 16.5 35.746 16.5 35.456V28.995C16.5 28.662 16.755 28.4 17.051 28.405C18.101 28.425 19.931 28.266 21.75 27.516Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    GDP (Tril. ₦)
                  </span>
                  <span className="font-medium text-5xl text-white">1.50</span>
                </div>
                <div className="flex flex-col gap-6 items-center justify-center border-[1px] border-brand-white/40 p-8 px-16 font-geistsans min-w-[30%] w-[100%] mx-auto md:w-[480px] lg:w-[30%]">
                  <span className="flex items-center justify-start gap-4 text-white font-normal text-base w-full">
                    <svg
                      width="53"
                      height="52"
                      viewBox="0 0 53 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        width="52"
                        height="52"
                        rx="26"
                        fill="#B1D362"
                      />
                      <path
                        d="M32.6538 16L28.8077 18.8846V23.8846L26.5 22.1538L22.6538 25.0385V30.0385L20.3462 28.3077L16.5 31.1923V36H18.0385V31.9615L20.3462 30.2308L22.6538 31.9615V36H24.1923V25.8077L26.5 24.0769L28.8077 25.8077V36H30.3462V19.6538L32.6538 17.9231L34.9615 19.6538V36H36.5V18.8846L32.6538 16Z"
                        fill="black"
                      />
                    </svg>
                    IGR (Tril. ₦)
                  </span>
                  <span className="font-medium text-5xl text-white">1.67</span>
                </div>
              </div>
              {/* bottom */}
              <div className="flex flex-col justify-center items-center gap-8 text-center w-[350px] md:w-[650px]">
                <span className="font-medium text-2xl font-geistsans text-white md:text-4xl">
                  Go further, access our financial reports
                </span>
                <span className="font-normal text-base text-white font-geistsans w-full md:w-[85%]">
                  Gain deeper insights into Plateau State&apos;s financial
                  landscape through the financial reports by the Auditor General
                </span>
                <ButtonDark text={"Access Financial Reports"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickStats;
