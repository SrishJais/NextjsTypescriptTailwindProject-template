//root layout


import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        {/* Navbar */}

        {children}
        {/* Footer */}

      </body>
    </html>
  );
}
