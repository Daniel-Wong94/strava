'use client'

import type { StravaActivity } from '@/lib/types'

interface Props {
  activities: StravaActivity[]
  sportType: string
}

const RUN_SPORTS = ['Run', 'TrailRun', 'VirtualRun']
const RIDE_SPORTS = ['Ride', 'VirtualRide', 'MountainBikeRide', 'GravelRide', 'EBikeRide']
const COLORS = ['#3b82f6', '#f97316', '#10b981', '#8b5cf6', '#f59e0b', '#ec4899']

export function WorkoutTagsBar({ activities, sportType }: Props) {
  const isRun = RUN_SPORTS.includes(sportType)
  const isRide = RIDE_SPORTS.includes(sportType)

  if (!isRun && !isRide) return null

  const tags = isRun
    ? [
      { label: 'Race', types: [1], color: COLORS[0] },
      { label: 'Long Run', types: [2], color: COLORS[1] },
      { label: 'Workout', types: [3], color: COLORS[2] },
    ]
    : [
      { label: 'Race', types: [11], color: COLORS[0] },
      { label: 'Workout', types: [12], color: COLORS[1] },
    ]

  const counted = tags.map((tag) => {
    const count = activities.filter(
      (a) => a.workout_type != null && tag.types.includes(a.workout_type)
    ).length
    return { ...tag, count }
  }).filter((t) => t.count > 0)

  if (counted.length === 0) return null

  const total = counted.reduce((s, t) => s + t.count, 0)
  const withPct = counted.map((t) => ({ ...t, pct: Math.round((t.count / total) * 100) }))

  return (
    <div>
      <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Activity Tags</h2>
      <div className="h-2 rounded-full flex overflow-hidden mb-3">
        {withPct.map((t) => (
          <div key={t.label} style={{ width: `${t.pct}%`, backgroundColor: t.color }} />
        ))}
      </div>
      <ul className="space-y-1.5">
        {withPct.map((t) => (
          <li key={t.label} className="flex items-center gap-2 text-xs">
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: t.color }} />
            <span className="text-gray-700 dark:text-gray-300 flex-1">{t.label}</span>
            <span className="text-gray-500 dark:text-gray-400 flex-shrink-0">{t.count} · {t.pct}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
