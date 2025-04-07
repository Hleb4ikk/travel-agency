import { Card, CardDescription, CardContent, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';

import { Skeleton } from '@/components/ui/skeleton';

export default function TourCardSkeleton() {
  return (
    <Card className="flex-grow border-none bg-gray-200 shadow-none">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-[12px] w-[200px] bg-gray-300" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-[10px] w-[200px] bg-gray-300" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-[10px] w-[200px] bg-gray-300" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-[10px] w-[200px] bg-gray-300" />
      </CardFooter>
    </Card>
  );
}
