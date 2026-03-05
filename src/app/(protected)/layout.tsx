import { TopNav } from '@/components/TopNav'
import { Footer } from '@/components/Footer'

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0d1117]">
      <TopNav />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
