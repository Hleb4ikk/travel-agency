import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

export default function Profile() {
  return (
    <div>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 p-4">
        <h1 className="text-4xl font-bold">Мой профиль</h1>
        <section>
          <div>Имя аккаунта: Hlebor</div>
          <div>Почта: hlebor2006@mail.ru</div>
        </section>
        <section className="flex flex-col gap-2 text-2xl font-bold">
          <h2>Приобретённые туры</h2>
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
