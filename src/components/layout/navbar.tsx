import { Switch } from "../ui/switch";
import { useTheme } from "../layout/theme-provider";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "lucide-react";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toogleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <header className="bg-background/80 fixed top-0 right-0 left-0 z-50 flex h-16 items-center justify-between border-b px-4 backdrop-blur-sm md:px-8">
      {/* Logo and title left navbar */}
      <Link to="/" className="flex items-center gap-2 font-bold">
        <img
          className="fill-primary max-h-[40px]"
          src="/assets/logo/logo_transparant.png"
          alt="Logo"
        />
        <span className="font-bawor text-3xl text-[#88ddec] sm:inline-block">
          Doa Bunda
        </span>
      </Link>

      {/* Menu and toogletheme in right navbar */}
      <nav className="hidden items-center justify-center gap-6 text-sm font-medium md:flex">
        <Switch
        variant="theme"
        checked={isDarkMode}
        onCheckedChange={toogleTheme}
        IconOn={MoonIcon}
        IconOff={SunIcon}/>

        <Link 
        to='/donasi'
        className="text-muted-foreground hover:text-foreground transition-colors">
          Donasi
        </Link>
        <Link 
        to='/program'
        className="text-muted-foreground hover:text-foreground transition-colors">
          Program
        </Link>
        <Link 
        to='/rekening'
        className="text-muted-foreground hover:text-foreground transition-colors">
          Rekening
        </Link>
        <Link 
        to='/tentang'
        className="text-muted-foreground hover:text-foreground transition-colors">
          Tentang Kami
        </Link>
        <Link 
        to='/faq'
        className="text-muted-foreground hover:text-foreground transition-colors">
          FAQ
        </Link>
      </nav>
    </header>
  );
}
