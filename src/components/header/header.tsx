import Link from "next/link";
import Logo from "../logo/logo";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="flex items-center gap-6">
            <Link href="/">Inicio</Link>
            <Link href="/">Home</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
