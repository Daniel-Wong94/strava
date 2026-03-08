'use client'

import Image from 'next/image'
import { trackEvent } from '@/lib/analytics'

export function ConnectButton() {
  return (
    <a
      href="/api/auth/strava"
      className="inline-block hover:opacity-90 transition-opacity"
      onClick={() => trackEvent('connect_strava')}
    >
      <Image
        src="/btn_strava_connect_orange.svg"
        alt="Connect with Strava"
        width={193}
        height={48}
        priority
      />
    </a>
  )
}
