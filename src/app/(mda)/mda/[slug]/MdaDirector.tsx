import ButtonLight from '@/components/ButtonLight';
import Image from 'next/image';
import React from 'react';

import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.bubble.css';

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

const MdaDirector = ({ slug, director }: any) => {
  //   console.log("🚀 ~ MdaDirector ~ director:", director);
  return (
    <div className='w-full min-h-screen flex items-center justify-center py-24  bg-brand-white'>
      {/* content */}
      <div className='w-full flex items-START justify-between flex-col gap-8 md:justi-start lg:flex-row lg:gap-4 lg:items-center'>
        {/* left */}
        <div className='w-full flex flex-col justify-between items-center gap-16 lg:w-[40%] lg:items-start lg:ml-24'>
          <div className='flex flex-col items-center gap-10 w-full lg:w-[80%] lg:items-start'>
            {/* <span className="w-max font-normal text-base text-brand-dark font-geistmono px-2 py-1 border-[1px] border-brand-dark rounded pb-auto">
              Head of MDA
            </span> */}
            <div
              className={
                'group transition-fx border-[1px] border-brand-grayish flex items-center justify-center gap-4 p-4 px-8 rounded-lg font-normal text-base font-geistsans text-brand-white cursor-pointer bg-brand-main'
              }
            >
              Head of MDA
            </div>
            <span className='font-medium text-4xl text-center font-geistsans text-brand-dark lg:text-left'>
              From the {director?.position}
            </span>
            {
              <QuillEditor
                value={director?.message}
                theme='bubble'
                style={{ fontSize: '100px' }}
                readOnly
              />
            }
            {/* <span className="font-normal text-base text-center text-brand-dark font-geistsans  w-[90%] lg:w-full lg:text-left">
              {director?.message}
            </span> */}
          </div>
          <ButtonLight text={'Library'} url={`mda/${slug}/library`} />
        </div>
        {/* right */}
        <div className='w-full lg:w-[50%]'>
          <div className='relative mx-auto w-full xl:max-w-[680px]'>
            <div className='absolute bg-gradient-to-b from-transparent via-transparent to-black inset-0' />
            <Image
              src={director?.image}
              width={680}
              height={690}
              objectFit='fill'
              alt='director'
              className='rounded-xl mx-auto'
            />
            <div className='glass-fx w-[90%] absolute bottom-4 left-4 flex flex-col gap-1 p-4 text-left md:w-[476px] md:gap-4 md:p-6 md:bottom-10 md:left-[3.4rem] lg:left-[2.9rem] lg:w-[75%] 2xl:w-[75%]'>
              <span className='font-medium text-[24px] font-geistsans text-brand-white md:text-4xl'>
                {director?.title} {director?.name}
              </span>
              <span className='font-normal text-base font-geistsans text-brand-white'>
                {director?.position}{' '}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MdaDirector;
