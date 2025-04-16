import { Card, CardDescription, CardContent, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
import { db } from '@/db/db';
import { useState, useEffect } from 'react';
import { tourTags, tags } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { fetchTags } from '@/db/utils';
import TagButton from '../../tag-bar/tag-button';

export interface Tour {
  id: string;
  title: string;
  description: string;
}

export default function TourCard({ id, title, description }: Tour) {
  const [tagsState, setTagsState] = useState<{ tagName: string }[] | null>(null);

  useEffect(() => {
    async function getTags() {
      const tags = await fetchTags({ id, title, description });
      setTagsState(tags);
    }

    getTags();
  }, [tags]);

  return (
    <Card className="flex-grow border-[#bbbbbb] shadow-[#bbbbbb]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>Content</CardContent>
      <CardFooter>{tagsState?.map((tag) => <TagButton key={tag.tagName}>{tag.tagName}</TagButton>)}</CardFooter>
    </Card>
  );
}
