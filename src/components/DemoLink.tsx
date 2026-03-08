'use client'

import { trackEvent } from '@/lib/analytics'

export function DemoLink() {
  return (
    <a
      href="/demo"
      className="text-[#FC4C02] hover:underline font-medium"
      onClick={() => trackEvent('view_demo')}
    >
      View demo →
    </a>
  )
}
