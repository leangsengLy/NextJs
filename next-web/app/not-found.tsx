export default function NotFoundPage() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
        <p className="text-lg text-center sm:text-left">
          The page you are looking for does not exist.
        </p>
      </main>
    </div>
  );
}