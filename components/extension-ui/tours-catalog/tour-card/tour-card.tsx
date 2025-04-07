import { Card, CardDescription, CardContent, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';

export interface Tour {
  id?: string;
  title: string;
  description: string;
}

export default function TourCard({ title, description }: Tour) {
  return (
    <Card className="flex-grow border-[#bbbbbb] shadow-[#bbbbbb]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>Content</CardContent>
      <CardFooter>Tags maybe</CardFooter>
    </Card>
  );
}
