import { Link } from "react-router-dom";
import { Switch } from "../ui/switch";
import { useTheme } from "./theme-provider";
import { Menu, MoonIcon, SunIcon } from "lucide-react";

export function Footer() {
  const { theme, setTheme } = useTheme();
  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

      const toogleTheme = () => {
        setTheme(isDarkMode ? "light" : "dark");
      }
  return (
    <footer className="border-t">
      <div className="text-muted-foreground container mx-auto flex flex-col items-center justify-between px-4 py-6 text-sm md:flex-row md:px-8">
        <p className="">&copy; 2024 Doa Bunda. All rights reserved.</p>
        <div className="mt-4 flex gap-4 md:mt-0">
          <Link
            to="/privacy"
            className="hover:text-primary transition-colors hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="hover:text-primary transition-colors hover:underline"
          >
            Terms of Service
          </Link>
          <Switch 
          variant="theme"
          checked={isDarkMode}
          onCheckedChange={toogleTheme}
          IconOn={MoonIcon}
          IconOff={SunIcon}/>
        </div>
      </div>
    </footer>
  );
}
