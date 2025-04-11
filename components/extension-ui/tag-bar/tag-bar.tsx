'use client';

import TagButton from './tag-button';
export default function TagBar() {
  return (
    <section className="flex flex-wrap items-center gap-2">
      <TagButton>Гродно</TagButton>
      <TagButton>Новогрудок</TagButton>
      <TagButton>Минск</TagButton>
      <TagButton>Могилёв</TagButton>
      <TagButton>Витебск</TagButton>
      <TagButton>Гомель</TagButton>
      <TagButton>Брест</TagButton>
      <TagButton>Мир</TagButton>
      <TagButton>Слуцк</TagButton>
      <TagButton>Боровляны</TagButton>
      <TagButton>Большая Берестовица</TagButton>
      <TagButton>Малая Берестовица</TagButton>
      <TagButton>Барановичи</TagButton>
      <TagButton>Держинск</TagButton>
      <TagButton>Туров</TagButton>
    </section>
  );
}
