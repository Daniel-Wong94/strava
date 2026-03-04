import { FaRunning } from 'react-icons/fa'

export function ConnectButton() {
  return (
    <a
      href="/api/auth/strava"
      className="inline-flex items-center gap-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-lg shadow-lg"
    >
      <FaRunning size={24} />
      Connect with Strava
    </a>
  )
}
