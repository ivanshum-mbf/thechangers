import * as React from 'react';
import { ScrollTrigger, Timeline, Tween } from 'react-gsap';
import { useSequenceProgressStore } from './states/sequencesStore';
import Astronaut from './astronaut';

export default function Section3() {
  const setProgress = useSequenceProgressStore((state) => state.setAstronautSq1);
  const texts = [
    {
      text: (
        <>
          &quot;The Changers&quot;
          <br />
          is a unique event <br />
          that gathers investors, <br />
          decision makers, and celebrities from all over the world at the Meydan Hotel. It provides
          <br />
          opportunities for entrepreneurs, companies and influencers, including access to
          <br />
          politicians and entertainment stars.
          <br />
        </>
      ),
      class: 'text-left relative bottom-[-100%]',
      points: {
        from: '-100%',
        toOpacity: '-101%',
        toMiddle: '-102%',
        toTop: '-103%',
      },
    },
    {
      text: (
        <>
          Venture capitalists and investors
          <br />
          are also present, ready to support innovation.
          <br />
          The participation of the royal families adds status to the
          <br />
          event, making it a platform <br />
          for contacts and
          <br />
          partnerships.
        </>
      ),
      class: 'text-right relative top-0',
      points: {
        from: '4%',
        toOpacity: '3%',
        toMiddle: '2%',
        toTop: '1%',
      },
    },
    {
      text: (
        <>
          &quot;The Changers&quot; <br />
          is a catalyst for change and
          <br />
          an opportunity to establish the future of trade and influence.
          <br />
        </>
      ),
      class: 'text-center relative top-[25%]',
      points: {
        from: '10%',
        toOpacity: '9%',
        toMiddle: '8%',
        toTop: '7%',
      },
    },
  ];
  return (
    <React.Fragment>
      <Astronaut />
      <div id='section3' className='w-full h-screen flex flex-col items-center relative z-40'>
        <ScrollTrigger
          start='top top'
          end='bottom center'
          id='section3scroll'
          pin
          pinSpacing={false}
          endTrigger={'#section3trigger'}
          trigger={'#section3'}
          scrub
          onUpdate={(self) => setProgress(self.progress)}
        >
          <Timeline
            playState='pause'
            target={texts.map((item, inx) => (
              <p
                key={inx}
                className={`${item.class} uppercase text-xl font-semibold p-2`}
                style={{ opacity: 0 }}
              >
                {item.text}
              </p>
            ))}
          >
            {texts.map((...params) => {
              console.log(params);
              return (
                <>
                  <Tween target={0} duration={10} to={{ opacity: 0 }} />
                  <Tween
                    from={{ y: params[0]?.points.from }}
                    to={{ opacity: 1, y: params[0]?.points.toOpacity }}
                    duration={10}
                    target={params[1]}
                  />
                  <Tween to={{ y: params[0]?.points.toMiddle }} duration={30} target={params[1]} />
                  <Tween
                    to={{ opacity: 0, y: params[0]?.points.toTop }}
                    duration={10}
                    target={params[1]}
                  />
                  <Tween to={{ display: 'none' }} duration={0} target={params[1]} />
                </>
              );
            })}
          </Timeline>
        </ScrollTrigger>
      </div>
      <div id='section3trigger' className='w-full h-[300vh]'></div>
    </React.Fragment>
  );
}
