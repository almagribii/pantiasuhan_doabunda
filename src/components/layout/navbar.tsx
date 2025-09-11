import { useTheme } from "../layout/theme-provider";
import { Link } from "react-router-dom";

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
      <Link to="/" className="flex items-center gap-2 font-bold">
        <img
          className="fill-primary max-h-[40px]"
          src="/assets/logo/logo_transparant.png"
          alt="Logo"
        />
        <span className="font-bawor text-3xl text-[#ecbb88] sm:inline-block">
          Doa Bunda
        </span>
      </Link>
    </header>
  );
}
