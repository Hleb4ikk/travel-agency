'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import TagButton from './tag-button';
import { useEffect, useReducer, useState } from 'react';

const tags = [
  { title: 'Гродно', value: false },
  { title: 'Новогрудок', value: false },
  { title: 'Минск', value: false },
  { title: 'Могилёв', value: false },
  { title: 'Витебск', value: false },
  { title: 'Гомель', value: false },
  { title: 'Брест', value: false },
  { title: 'Мир', value: false },
  { title: 'Слуцк', value: false },
  { title: 'Боровляны', value: false },
  { title: 'Большая Берестовица', value: false },
  { title: 'Малая Берестовица', value: false },
  { title: 'Барановичи', value: false },
  { title: 'Держинск', value: false },
  { title: 'Туров', value: false },
];

export default function TagBar() {
  const [tagsState, setTagsState] = useState<typeof tags>(tags);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleClick(title: string) {
    const params = new URLSearchParams(searchParams);

    setTagsState((prevTagsState) => {
      if (prevTagsState !== null) {
        return prevTagsState.map((tag) => (tag.title === title ? { title: tag.title, value: !tag.value } : tag));
      }

      return prevTagsState;
    });
  }

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.delete('tag');
    for (let i = 0; i < tagsState.length; i++) {
      if (tagsState[i].value) {
        params.append('tag', tagsState[i].title);
      }
    }

    router.push(`${pathname}?${params.toString()}`);
  }, [tagsState]);

  return (
    <section className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-2">
        {tagsState?.map((tag) => {
          if (!tag.value)
            return (
              <TagButton
                onClick={() => handleClick(tag.title)}
                key={tag.title}
                className={tag.value ? 'bg-[#aaaaaa]' : 'bg-[#dddddd]'}
              >
                {tag.title}
              </TagButton>
            );
        })}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {tagsState?.map((tag) => {
          if (tag.value)
            return (
              <TagButton
                onClick={() => handleClick(tag.title)}
                key={tag.title}
                className={tag.value ? 'bg-[#aaaaaa]' : 'bg-[#dddddd]'}
              >
                {tag.title}
              </TagButton>
            );
        })}
      </div>
    </section>
  );
}
