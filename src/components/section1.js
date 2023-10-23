import * as React from 'react';
import { ScrollTrigger } from 'react-gsap';
import PreloaderVideo from './preloadervideo';
import Lottie from 'lottie-react';
import ScrollDownLottie from '../lottie/white_stripes_down.json';
import Timer from './timer';
import Sequence from './sequence/ImageSequence';
import { MainSqArray } from './sequence/ImageArray';
import { useSequenceProgressStore } from './states/sequencesStore';

const InstIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='39' height='39' viewBox='0 0 39 39' fill='none'>
    <g clipPath='url(#clip0_5_4)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M33.5661 33.5634C34.4137 32.7132 35.0793 31.6914 35.5135 30.5708C35.9295 29.4944 36.2155 28.2672 36.2987 26.468C36.3819 24.6662 36.4027 24.089 36.4027 19.5C36.4027 14.911 36.3819 14.3338 36.2987 12.532C36.2155 10.7328 35.9295 9.50558 35.5135 8.42918C35.0889 7.30167 34.4235 6.28038 33.5635 5.43658C32.7196 4.57675 31.6983 3.91129 30.5709 3.48658C29.4945 3.07058 28.2673 2.78458 26.4681 2.70138C24.6663 2.61818 24.0891 2.59998 19.5001 2.59998C14.9111 2.59998 14.3339 2.61818 12.5321 2.70398C10.7329 2.78198 9.5057 3.06798 8.4293 3.48658C7.30236 3.91226 6.2813 4.57759 5.4367 5.43658C4.57771 6.28117 3.91238 7.30224 3.4867 8.42918C3.0707 9.50558 2.7847 10.7328 2.7015 12.532C2.6183 14.3338 2.6001 14.911 2.6001 19.5C2.6001 24.089 2.6183 24.6662 2.7041 26.468C2.7821 28.2672 3.0681 29.4944 3.4867 30.5708C3.9131 31.6992 4.5787 32.7184 5.4367 33.5634C6.2817 34.4214 7.3035 35.087 8.4293 35.5134C9.5057 35.9294 10.7329 36.2154 12.5321 36.2986C14.3339 36.3792 14.9111 36.4 19.5001 36.4C24.0891 36.4 24.6663 36.3792 26.4681 36.296C28.2673 36.218 29.4945 35.932 30.5709 35.5134C31.6934 35.0789 32.7153 34.4147 33.5661 33.5634ZM5.2001 17.511V21.489C5.1949 23.6236 5.1949 24.1774 5.2521 25.389C5.3197 26.9126 5.4029 28.0306 5.6577 28.873C5.9021 29.6842 6.1751 30.511 7.0695 31.5042C7.9639 32.5 8.8245 32.9498 9.9217 33.2826C11.0215 33.6128 12.4021 33.683 13.6007 33.7376C14.9579 33.8 15.4987 33.8 18.3483 33.8H21.4241C23.6133 33.8026 24.1645 33.8052 25.3917 33.748C26.9127 33.6778 28.0307 33.5946 28.8757 33.3424C29.6843 33.098 30.5111 32.8224 31.5043 31.9306C32.5001 31.0362 32.9499 30.173 33.2827 29.0758C33.6129 27.9786 33.6857 26.598 33.7403 25.3994C33.8001 24.0422 33.8001 23.504 33.8001 20.6622V18.3482C33.8001 15.4986 33.8001 14.9604 33.7403 13.6006C33.6857 12.402 33.6129 11.0214 33.2827 9.92418C32.9525 8.82438 32.5027 7.96378 31.5043 7.06938C30.5085 6.17498 29.6843 5.90198 28.8757 5.65758C28.0307 5.40538 26.9127 5.31958 25.3917 5.25198C24.0699 5.19766 22.7469 5.18032 21.4241 5.19998H18.3483C15.4987 5.19998 14.9579 5.19998 13.6007 5.25978C12.4021 5.31438 11.0215 5.38718 9.9217 5.71738C8.8245 6.05018 7.9639 6.49998 7.0695 7.49578C6.1751 8.49158 5.8995 9.31578 5.6577 10.127C5.4029 10.9694 5.3197 12.0874 5.2521 13.611C5.1949 14.8226 5.1949 15.3764 5.2001 17.511ZM19.5001 13.65C17.9486 13.65 16.4606 14.2663 15.3635 15.3634C14.2664 16.4605 13.6501 17.9485 13.6501 19.5C13.6501 21.0515 14.2664 22.5395 15.3635 23.6366C16.4606 24.7336 17.9486 25.35 19.5001 25.35C21.0516 25.35 22.5396 24.7336 23.6367 23.6366C24.7338 22.5395 25.3501 21.0515 25.3501 19.5C25.3501 17.9485 24.7338 16.4605 23.6367 15.3634C22.5396 14.2663 21.0516 13.65 19.5001 13.65ZM11.0501 19.5C11.0501 17.2589 11.9404 15.1096 13.525 13.5249C15.1097 11.9402 17.259 11.05 19.5001 11.05C21.7412 11.05 23.8905 11.9402 25.4751 13.5249C27.0598 15.1096 27.9501 17.2589 27.9501 19.5C27.9501 21.7411 27.0598 23.8903 25.4751 25.475C23.8905 27.0597 21.7412 27.95 19.5001 27.95C17.259 27.95 15.1097 27.0597 13.525 25.475C11.9404 23.8903 11.0501 21.7411 11.0501 19.5ZM28.5221 12.428C29.0393 12.428 29.5353 12.2225 29.901 11.8568C30.2667 11.4911 30.4721 10.9951 30.4721 10.478C30.4721 9.9608 30.2667 9.46481 29.901 9.09912C29.5353 8.73342 29.0393 8.52798 28.5221 8.52798C28.0049 8.52798 27.5089 8.73342 27.1432 9.09912C26.7775 9.46481 26.5721 9.9608 26.5721 10.478C26.5721 10.9951 26.7775 11.4911 27.1432 11.8568C27.5089 12.2225 28.0049 12.428 28.5221 12.428Z'
        fill='#F8F8F8'
      />
    </g>
    <defs>
      <clipPath id='clip0_5_4'>
        <rect width='39' height='39' fill='white' />
      </clipPath>
    </defs>
  </svg>
);
export default function Section1() {
  const mainsqArr = MainSqArray();
  const ref = React.useRef();
  const seqref = React.useRef();
  const progress = useSequenceProgressStore((state) => state.mainSq);
  const setProgress = useSequenceProgressStore((state) => state.setMainSq);
  return (
    <React.Fragment>
      <PreloaderVideo ref={ref} />
      <div
        className={`w-full h-screen fixed top-0 left-0`}
        style={{ opacity: progress < 0.85 ? 1 : 5 - progress / 0.2 }}
      >
        <Sequence ref={seqref} progress={progress} array={mainsqArr} />
      </div>
      <div id='section1trigger' className='w-full h-[200vh]'></div>
      <section
        id='section-1'
        className={`w-full h-screen flex flex-col justify-between items-center pb-3 fixed top-0 left-0 z-40 ${
          progress >= 1 ? ` hidden` : ` block`
        }`}
      >
        <div className='w-full h-12 flex p-1'>
          <div className='flex-row w-full flex justify-between items-center'>
            <div className='flex-1'>
              <a
                href='https://instagram.com/thechangers.ae?igshid=MzRlODBiNWFlZA=='
                target='_blank'
                rel='noreferrer'
              >
                <InstIcon />
              </a>
            </div>
            <div className='flex-1 text-center font-serif uppercase text-sm'>The changers</div>
            <div className='flex-1'>&nbsp;</div>
          </div>
        </div>

        <div className='flex items-center flex-col gap-1' style={{ opacity: 1.2 - progress * 5 }}>
          <Timer deadline={new Date('2023-11-27T05:00:00Z')} />
          <Lottie animationData={ScrollDownLottie} loop autoPlay className='w-20' />
        </div>
      </section>
      <ScrollTrigger
        start='center bottom'
        end='bottom center'
        scrub
        id='sectiontestscroll'
        trigger={'#section1trigger'}
        pinSpacing={false}
        onUpdate={(self) => {
          if (ref.current) ref.current.style.display = self.progress > 0.001 ? 'none' : 'block';
          setProgress(self.progress);
        }}
      ></ScrollTrigger>
    </React.Fragment>
  );
}
