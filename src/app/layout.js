// src/app/layout.js
import './globals.css'

export const metadata = {
  title: 'Fametonic',
  description: 'Social media success made simple',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}
