export default function Header() {
  return (
    <header className="w-full border-b bg-background px-4 py-6 md:px-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <h1 className="text-2xl font-bold">UBY</h1>
        <nav className="flex gap-6">
          <a href="#" className="text-sm hover:underline">Ana Sayfa</a>
          <a href="#" className="text-sm hover:underline">Hakkımızda</a>
          <a href="#" className="text-sm hover:underline">İletişim</a>
        </nav>
      </div>
    </header>
  );
}
