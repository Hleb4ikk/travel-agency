'use client';

import { openSans } from '@/components/extension-ui/fonts';
import { Button } from '@/components/ui/button';
import { ArrowRight, Armchair, Lightbulb, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Strategy from '@/public/strategy-svgrepo-com.svg';

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
          <div className="grid h-[600px] grid-cols-2 content-center items-center gap-32">
            <div className="flex w-[500px] flex-col gap-4">
              <h1 className={`text-3xl font-bold`}>О нас</h1>
              <p className="text-xl font-light">
                Мы - создатели уникальных пакетов впечатлений, которые превращают простое путешествие в настоящее
                приключение!
              </p>
              <div className="text-xl font-light">
                Наша идея проста:
                <ul className="">
                  <li className="list-inside list-disc">Покупаете пакет впечатлений</li>
                  <li className="list-inside list-disc">Получаете маршрут и задания</li>
                  <li className="list-inside list-disc">Исследуете город самостоятельно</li>
                </ul>
              </div>
              <p className="text-xl font-light">
                Мы продумали всё до мелочей, чтобы вы могли насладиться локациями в своём ритме. Никаких гидов, очередей
                и расписаний — только вы, город и его секреты.
              </p>
            </div>
            <div className="size-[400px] justify-self-center">
              <Image
                src={Strategy}
                alt="geolocation on map"
              ></Image>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-[#DDDDDD]">
        <section className={`${openSans.className} -z-8 relative mx-auto max-w-[1440px] p-4`}>
          <div className="flex h-[600px] flex-col gap-10">
            <h1 className="text-3xl font-bold">Почему стоит выбрать нас</h1>
            {/* animate-[appear_2s_ease-in-out_1] */}
            <div className="flex justify-center text-xl">
              <ul className="flex h-[450px] gap-16">
                <li className="flex w-[400px] flex-col items-center gap-3 rounded-3xl bg-[#BBBBBB] p-4">
                  <Armchair className="size-32" />
                  <div className="flex flex-col gap-2">
                    <h1>Удобно</h1>
                    <ul className="font-light">
                      <li className="list-inside list-disc">Вы сами выбираете темп и время.</li>
                      <li className="list-inside list-disc">
                        Это личное приключение: для семьи, друзей или романтического свидания.
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex w-[400px] flex-col items-center gap-3 rounded-3xl bg-[#BBBBBB] p-4">
                  <Lightbulb className="size-32" />
                  <div className="flex flex-col gap-2">
                    <h1>Интересно</h1>
                    <p className="font-light">
                      Вас ждут истории и культура города, необычные задания и загадки, уникальные факты, которые
                      вдохновляют.
                    </p>
                    <p className="font-light">Завершите маршрут и получите приятный приз!</p>
                  </div>
                </li>
                <li className="flex w-[400px] flex-col items-center gap-3 rounded-3xl bg-[#BBBBBB] p-4">
                  <ShieldCheck className="size-32" />
                  <div>
                    <h1>Безопасно</h1>
                    <p className="font-light">
                      Мы используем современные технологии для защиты ваших платежей. Все транзакции защищены благодаря
                      интеграции с лидерами в сфере онлайн-оплаты.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
