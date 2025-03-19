'use client';

import { openSans } from '@/components/extension-ui/fonts';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <section className="relative flex h-[480px] items-center">
        <video
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover saturate-200"
          src="/videoplayback.mp4"
          width="1280"
          height="720"
          autoPlay
          loop
          muted
        >
          <source
            src="/videoplayback.mp4"
            type="video/mp4"
          />
        </video>
        <div className="-z-9 absolute inset-0 bg-black bg-opacity-40" />
        <div className="-z-8 relative mx-auto max-w-[1440px] px-4 py-10">
          <div className={`${openSans.className} flex flex-col gap-10 font-bold text-white`}>
            <div className="text-[2em] md:text-[2.5em] min-[1186px]:text-[3em]">
              <h1>Туры по Беларуси — яркие эмоции, незабываемые открытия и вдохновляющие путешествия!</h1>
              {/* <p>
                Мы - создатели уникальных пакетов впечатлений, которые превращают простое путешествие в настоящее
                приключение!
              </p> */}
            </div>
            <Button className="box-content w-[200px] whitespace-nowrap rounded-2xl border-[1px] border-[#eb7a34] bg-[#eb7a34] py-3 text-[1.5em] font-semibold shadow-md hover:text-white active:text-[#aaaaaa] [&_svg]:size-6">
              Найти туры <ArrowRight />
            </Button>
          </div>
        </div>
        {/* <div className="-z-8 relative mx-auto max-w-[1440px] px-4 text-white">
        </div> */}
      </section>
      <div className="">
        <section className={`${openSans.className} -z-8 relative mx-auto max-w-[1440px] p-4`}>
          <div className="flex w-[500px] flex-col gap-4">
            <h1 className={`text-3xl font-bold`}>О нас</h1>

            <p className="text-xl font-light">
              Мы - создатели уникальных пакетов впечатлений, которые превращают простое путешествие в настоящее
              приключение!
            </p>
            <p className="text-xl font-light">
              Наша цель – показать красоту Беларуси с новой стороны, предложить путешественникам возможность насладиться
              удивительными местами, которые вдохновляют, дарят яркие эмоции и остаются в памяти на всю жизнь.
            </p>
            <p className="text-xl font-light">
              Мы верим, что каждый тур – это уникальная история, созданная для тех, кто ищет незабываемых впечатлений и
              новых открытий. С нашей командой профессионалов каждое путешествие становится комфортным, безопасным и
              захватывающим.
            </p>
          </div>
        </section>
      </div>
      <div className="bg-[#DDDDDD]">
        <section className={`${openSans.className} -z-8 relative mx-auto flex max-w-[1440px] justify-end p-4`}>
          <div className="flex w-[500px] flex-col gap-4">
            <h1 className={`text-3xl font-bold`}>О нас</h1>

            <p className="text-xl font-light">
              Мы - создатели уникальных пакетов впечатлений, которые превращают простое путешествие в настоящее
              приключение!
            </p>
            <p className="text-xl font-light">
              Наша цель – показать красоту Беларуси с новой стороны, предложить путешественникам возможность насладиться
              удивительными местами, которые вдохновляют, дарят яркие эмоции и остаются в памяти на всю жизнь.
            </p>
            <p className="text-xl font-light">
              Мы верим, что каждый тур – это уникальная история, созданная для тех, кто ищет незабываемых впечатлений и
              новых открытий. С нашей командой профессионалов каждое путешествие становится комфортным, безопасным и
              захватывающим.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
