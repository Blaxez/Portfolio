import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ScrollPersistence } from "@/components/hooks/useScrollPersistence";

export const metadata = {
  title: "Santosh Maurya — Full-Stack Developer | AI & ML | Game Dev",
  description:
    "Portfolio of Santosh Maurya — Full-Stack Developer, AI/ML Innovator, and Game Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head></head>
      <body className="selection:bg-[var(--acc)] selection:text-white">
        <ThemeProvider>
          <ScrollPersistence />
          {/* Film Grain Overlay */}
          <div
            className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.07]"
            style={{
              backgroundImage:
                "url('https://grainy-gradients.vercel.app/noise.svg')",
              mixBlendMode: "overlay",
            }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
