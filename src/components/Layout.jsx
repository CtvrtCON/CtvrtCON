import { Footer } from '@/components/Footer'

export function Layout({ children, showFooter = true }) {
  return (
    <>
      <main className="flex-auto">{children}</main>
      {showFooter && <Footer />}
    </>
  )
}
