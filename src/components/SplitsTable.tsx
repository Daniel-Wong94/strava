'use client'

import type { Split, Lap } from '@/lib/types'
import { useSettings } from '@/lib/settings-context'
import { formatDistance, formatDuration, formatPace, formatSpeed, formatElevation } from '@/lib/strava'

interface SplitsProps {
  splitsMetric?: Split[]
  splitsImperial?: Split[]
  sportType: string
}

interface LapsProps {
  laps: Lap[]
  sportType: string
}

const PACE_SPORTS = new Set(['Run', 'TrailRun', 'VirtualRun', 'Walk', 'Hike', 'Swim'])

export function SplitsTable({ splitsMetric, splitsImperial, sportType }: SplitsProps) {
  const { settings } = useSettings()
  const { units } = settings

  const splits = units === 'imperial' && splitsImperial?.length ? splitsImperial : splitsMetric
  if (!splits || splits.length === 0) return null

  const isPace = PACE_SPORTS.has(sportType)

  return (
    <div className="mt-6">
      <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Splits</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-xs border border-gray-200 dark:border-[#30363d] rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-50 dark:bg-[#161b22] text-gray-500 dark:text-gray-400">
              <th className="px-3 py-2 text-left font-medium">#</th>
              <th className="px-3 py-2 text-right font-medium">Dist</th>
              <th className="px-3 py-2 text-right font-medium">Time</th>
              <th className="px-3 py-2 text-right font-medium">{isPace ? 'Pace' : 'Speed'}</th>
              <th className="px-3 py-2 text-right font-medium">Elev Δ</th>
              {splits.some((s) => s.average_heartrate) && (
                <th className="px-3 py-2 text-right font-medium">HR</th>
              )}
            </tr>
          </thead>
          <tbody>
            {splits.map((split) => (
              <tr
                key={split.split}
                className="border-t border-gray-100 dark:border-[#30363d] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#161b22] transition-colors"
              >
                <td className="px-3 py-2 text-gray-500 dark:text-gray-400">{split.split}</td>
                <td className="px-3 py-2 text-right">{formatDistance(split.distance, units)}</td>
                <td className="px-3 py-2 text-right">{formatDuration(split.moving_time)}</td>
                <td className="px-3 py-2 text-right">
                  {isPace
                    ? formatPace(split.average_speed, units)
                    : formatSpeed(split.average_speed, units)}
                </td>
                <td className="px-3 py-2 text-right">
                  {split.elevation_difference !== 0
                    ? `${split.elevation_difference > 0 ? '+' : ''}${formatElevation(split.elevation_difference, units)}`
                    : '—'}
                </td>
                {splits.some((s) => s.average_heartrate) && (
                  <td className="px-3 py-2 text-right">
                    {split.average_heartrate ? `${Math.round(split.average_heartrate)} bpm` : '—'}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function LapsTable({ laps, sportType }: LapsProps) {
  const { settings } = useSettings()
  const { units } = settings

  if (!laps || laps.length <= 1) return null

  const isPace = PACE_SPORTS.has(sportType)

  return (
    <div className="mt-6">
      <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Laps</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-xs border border-gray-200 dark:border-[#30363d] rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-50 dark:bg-[#161b22] text-gray-500 dark:text-gray-400">
              <th className="px-3 py-2 text-left font-medium">#</th>
              <th className="px-3 py-2 text-left font-medium">Name</th>
              <th className="px-3 py-2 text-right font-medium">Dist</th>
              <th className="px-3 py-2 text-right font-medium">Time</th>
              <th className="px-3 py-2 text-right font-medium">{isPace ? 'Pace' : 'Speed'}</th>
              <th className="px-3 py-2 text-right font-medium">Elev</th>
              {laps.some((l) => l.average_heartrate) && (
                <th className="px-3 py-2 text-right font-medium">HR</th>
              )}
            </tr>
          </thead>
          <tbody>
            {laps.map((lap) => (
              <tr
                key={lap.id}
                className="border-t border-gray-100 dark:border-[#30363d] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#161b22] transition-colors"
              >
                <td className="px-3 py-2 text-gray-500 dark:text-gray-400">{lap.lap_index + 1}</td>
                <td className="px-3 py-2 truncate max-w-[120px]">{lap.name}</td>
                <td className="px-3 py-2 text-right">{formatDistance(lap.distance, units)}</td>
                <td className="px-3 py-2 text-right">{formatDuration(lap.moving_time)}</td>
                <td className="px-3 py-2 text-right">
                  {isPace
                    ? formatPace(lap.average_speed, units)
                    : formatSpeed(lap.average_speed, units)}
                </td>
                <td className="px-3 py-2 text-right">
                  {lap.total_elevation_gain > 0
                    ? formatElevation(lap.total_elevation_gain, units)
                    : '—'}
                </td>
                {laps.some((l) => l.average_heartrate) && (
                  <td className="px-3 py-2 text-right">
                    {lap.average_heartrate ? `${Math.round(lap.average_heartrate)} bpm` : '—'}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
