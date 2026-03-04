import Link from 'next/link'
import { FaRunning } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'

export function TopNav() {
  return (
    <header className="border-b border-gray-200 dark:border-[#30363d] bg-white dark:bg-[#161b22]">
      <div className="max-w-screen-xl mx-auto px-4 h-12 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-2">
          <FaRunning size={24} className="text-[var(--accent)]" />
          <span className="font-semibold text-gray-900 dark:text-white text-sm">
            Fitness Repo
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/settings"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            title="Settings"
          >
            <IoMdSettings size={18} />
          </Link>
          <form action="/api/auth/logout" method="POST">
            <button
              type="submit"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}
