import '../(root)/globals.css'

export const metadata = {
  title: 'Financial Sage - Autenticación',
  description: 'Inicio de sesión y registro en Financial Sage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: 'hidden' }}>{children}</body>
    </html>
  )
}
