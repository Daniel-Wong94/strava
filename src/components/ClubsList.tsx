'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import type { StravaClub } from '@/lib/types'
import { useDemoMode } from './DemoModeProvider'
import { Users } from 'lucide-react'

interface Props {
  clubs: StravaClub[]
}

export function ClubsList({ clubs }: Props) {
  const { isDemo, showDemoModal } = useDemoMode()
  const listRef = useRef<HTMLUListElement>(null)
  const [showBottomGradient, setShowBottomGradient] = useState(true)
  const [showTopGradient, setShowTopGradient] = useState(false)

  useEffect(() => {
    const el = listRef.current
    if (!el) return
    const check = () => {
      setShowBottomGradient(el.scrollTop + el.clientHeight < el.scrollHeight - 1)
      setShowTopGradient(el.scrollTop > 1)
    }
    check()
    el.addEventListener('scroll', check)
    return () => el.removeEventListener('scroll', check)
  }, [clubs])

  if (clubs.length === 0) {
    return (
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        Not a member of any clubs.
      </p>
    )
  }

  return (
    <div className="relative">
      <ul ref={listRef} className="space-y-3 max-h-96 overflow-y-auto pr-1">
        {clubs.map((club) => (
          <li key={club.id} className="flex items-center gap-3">
            <Link href={`/dashboard/club/${club.id}`} onClick={isDemo ? (e) => { e.preventDefault(); showDemoModal() } : undefined} className="flex items-center gap-3 min-w-0 flex-1 group">
              {club.profile_medium ? (
                <div className="w-8 h-8 rounded-md overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={club.profile_medium}
                    alt={club.name}
                    width={32}
                    height={32}
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Users size={14} className="text-gray-500 dark:text-gray-400" />
                </div>
              )}
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-[#e6edf3] truncate group-hover:text-[var(--accent)] transition-colors">
                  {club.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-[#8b949e] truncate">
                  {club.member_count?.toLocaleString()} members
                  {club.city ? ` · ${club.city}` : ''}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {showTopGradient && (
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white dark:from-[#0d1117] to-transparent" />
      )}
      {showBottomGradient && (
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-[#0d1117] to-transparent" />
      )}
    </div>
  )
}
