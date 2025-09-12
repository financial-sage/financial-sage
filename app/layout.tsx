import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FinancialSage",
  description: "Personal finance management application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Critical CSS to prevent FOUC */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body { 
              visibility: visible; 
              opacity: 1; 
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            * { box-sizing: border-box; }
          `
        }} />
        
        {/* Load fonts with proper fallbacks */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet"
        />
        
        <link 
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400&display=swap" 
          rel="stylesheet"
        />
        
        {/* Font Awesome Icons */}
        <link 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
