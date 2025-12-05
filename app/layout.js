export const metadata = {
  title: 'ObjektPro',
  description: 'Objektverwaltung Demo-App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body style={{ fontFamily: 'Arial, sans-serif', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
