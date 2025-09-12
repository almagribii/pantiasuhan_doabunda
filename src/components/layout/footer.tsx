import { Link } from "react-router-dom";
import { useTheme } from "./theme-provider";

export function Footer() {
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
        </div>
      </div>
    </footer>
  );
}
