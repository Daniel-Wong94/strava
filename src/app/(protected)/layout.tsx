import { getSession } from '@/lib/auth'
import { TopNav } from '@/components/TopNav'
import { Footer } from '@/components/Footer'

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession()

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0d1117]">
      <TopNav athlete={session?.athlete} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
