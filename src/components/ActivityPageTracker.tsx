'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

interface Props {
  sportType: string
}

export function ActivityPageTracker({ sportType }: Props) {
  useEffect(() => {
    trackEvent('view_activity_detail', { sport_type: sportType })
  }, [sportType])

  return null
}
