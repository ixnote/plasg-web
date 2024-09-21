import React from 'react';

const SectionDividerLight = () => {
  return (
    <>
      <div className='flex items-center justify-center py-1  bg-brand-white'>
        {/* content */}
        <div className='flex items-center justify-between gap-4 w-[92%]'>
          <span className='w-full bg-brand-grayish p-[0.3px] rounded'></span>
        </div>
      </div>
    </>
  );
};

export default SectionDividerLight;
