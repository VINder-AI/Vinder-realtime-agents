export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>  // ⬅️ This is what renders your `page.tsx`
    </html>
  )
}