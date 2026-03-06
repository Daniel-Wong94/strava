import { ConnectButton } from '@/components/ConnectButton'
import { FaRunning } from 'react-icons/fa'

// Landing page is always light mode + green accent, regardless of user settings.
// All dark: variants are intentionally omitted here; the green accent is set via
// a CSS variable override on the wrapper so ConnectButton picks it up automatically.
const LANDING_STYLE = {
  '--accent': '#22c55e',
  '--accent-hover': '#16a34a',
} as React.CSSProperties

export default function LandingPage({
  searchParams,
}: {
  searchParams: { error?: string }
}) {
  return (
    <main
      style={LANDING_STYLE}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="text-center max-w-md px-6">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-[var(--accent)] rounded-2xl flex items-center justify-center shadow-xl">
            <FaRunning className="w-12 h-12 text-white" size={48} />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Fitness Repo
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your activity data, visualized like a GitHub profile.
          Heatmaps, streaks, and more.
        </p>

        {searchParams.error && (
          <div className="mb-6 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {searchParams.error === 'access_denied'
              ? 'Access was denied. Please try again.'
              : 'Something went wrong. Please try again.'}
          </div>
        )}

        <ConnectButton />

        <p className="mt-6 text-xs text-gray-400">
          Read-only access · No data stored · Powered by Strava API
        </p>
      </div>

      {/* Feature highlights */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl px-6 w-full">
        {[
          {
            icon: '🟩',
            title: 'Activity Heatmap',
            desc: '52-week activity grid, just like GitHub contributions',
          },
          {
            icon: '🏅',
            title: 'Sport Cards',
            desc: 'See your sports as repo cards with stats and details',
          },
          {
            icon: '🔥',
            title: 'Streaks & Stats',
            desc: 'Track kudos, streaks, followers, and more at a glance',
          },
        ].map(({ icon, title, desc }) => (
          <div
            key={title}
            className="text-center p-4 rounded-lg bg-white border border-gray-200 shadow-sm"
          >
            <div className="text-3xl mb-2">{icon}</div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">{title}</h3>
            <p className="text-xs text-gray-500">{desc}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
