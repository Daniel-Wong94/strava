import { TopNav } from '@/components/TopNav'

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0d1117]">
      <TopNav />
      {children}
    </div>
  )
}
