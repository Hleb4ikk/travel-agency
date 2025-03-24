import { Input } from '@/components/ui/input';
import { Card, CardDescription, CardContent, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
export default function Tours() {
  return (
    <div>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 p-4">
        <section>
          <h1 className="text-4xl font-bold">Поиск туров по Беларуси</h1>
        </section>
        <section className="flex flex-wrap items-center gap-2">
          <div className="rounded-full bg-[#dddddd] px-2 py-1">Гродно</div>
          <div className="rounded-full bg-[#dddddd] px-2 py-1">Новогрудок</div>
          <div className="rounded-full bg-[#dddddd] px-2 py-1">Минск</div>
          <div className="rounded-full bg-[#dddddd] px-2 py-1">Могилёв</div>
          <div className="rounded-full bg-[#dddddd] px-2 py-1">Витебск</div>
          <div className="rounded-full bg-[#dddddd] px-2 py-1">Гомель</div>
          <div className="rounded-full bg-[#dddddd] px-2 py-1">Брест</div>
          <div className="rounded-full bg-[#dddddd] px-2 py-1">Мир</div>
          <div className="rounded-full bg-[#dddddd] px-2 py-1">Слуцк</div>
          <div className="rounded-full bg-[#dddddd] px-2 py-1">Боровляны</div>
          <div className="rounded-full bg-[#dddddd] px-2 py-1">Большая Берестовица</div>
          <div className="rounded-full bg-[#dddddd] px-2 py-1">Малая Берестовица</div>
          <div className="rounded-full bg-[#dddddd] px-2 py-1">Барановичи</div>
          <div className="rounded-full bg-[#dddddd] px-2 py-1">Держинск</div>
          <div className="rounded-full bg-[#dddddd] px-2 py-1">Туров</div>
        </section>
        <section className="flex items-center">
          <Input className="w-[300px] border-2 border-[#bbbbbb] shadow-sm shadow-[#bbbbbb] focus-visible:ring-2 focus-visible:ring-offset-0" />
          <div className="flex flex-grow justify-end">
            <p>Найдено 24 тура</p>
          </div>
        </section>
        <section className="flex flex-wrap items-center gap-6">
          <Card className="flex-grow border-[#bbbbbb] shadow-[#bbbbbb]">
            <CardHeader>
              <CardTitle>Title with Image</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>

            <CardContent>Content</CardContent>
            <CardFooter>Tags maybe</CardFooter>
          </Card>
          <Card className="flex-grow border-[#bbbbbb] shadow-[#bbbbbb]">
            <CardHeader>
              <CardTitle>Title with Image</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>

            <CardContent>Content</CardContent>
            <CardFooter>Tags maybe</CardFooter>
          </Card>
          <Card className="flex-grow border-[#bbbbbb] shadow-[#bbbbbb]">
            <CardHeader>
              <CardTitle>Title with Image</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>

            <CardContent>Content</CardContent>
            <CardFooter>Tags maybe</CardFooter>
          </Card>
          <Card className="flex-grow border-[#bbbbbb] shadow-[#bbbbbb]">
            <CardHeader>
              <CardTitle>Title with Image</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>

            <CardContent>Content</CardContent>
            <CardFooter>Tags maybe</CardFooter>
          </Card>
          <Card className="flex-grow border-[#bbbbbb] shadow-[#bbbbbb]">
            <CardHeader>
              <CardTitle>Title with Image</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>

            <CardContent>Content</CardContent>
            <CardFooter>Tags maybe</CardFooter>
          </Card>
          <Card className="flex-grow border-[#bbbbbb] shadow-[#bbbbbb]">
            <CardHeader>
              <CardTitle>Title with Image</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>

            <CardContent>Content</CardContent>
            <CardFooter>Tags maybe</CardFooter>
          </Card>
          <Card className="flex-grow border-[#bbbbbb] shadow-[#bbbbbb]">
            <CardHeader>
              <CardTitle>Title with Image</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>

            <CardContent>Content</CardContent>
            <CardFooter>Tags maybe</CardFooter>
          </Card>
          <Card className="flex-grow border-[#bbbbbb] shadow-[#bbbbbb]">
            <CardHeader>
              <CardTitle>Title with Image</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>

            <CardContent>Content</CardContent>
            <CardFooter>Tags maybe</CardFooter>
          </Card>
          <Card className="flex-grow border-[#bbbbbb] shadow-[#bbbbbb]">
            <CardHeader>
              <CardTitle>Title with Image</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>

            <CardContent>Content</CardContent>
            <CardFooter>Tags maybe</CardFooter>
          </Card>
          <Card className="flex-grow border-[#bbbbbb] shadow-[#bbbbbb]">
            <CardHeader>
              <CardTitle>Title with Image</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>

            <CardContent>Content</CardContent>
            <CardFooter>Tags maybe</CardFooter>
          </Card>
          <Card className="flex-grow border-[#bbbbbb] shadow-[#bbbbbb]">
            <CardHeader>
              <CardTitle>Title with Image</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>

            <CardContent>Content</CardContent>
            <CardFooter>Tags maybe</CardFooter>
          </Card>
        </section>
      </div>
    </div>
  );
}
