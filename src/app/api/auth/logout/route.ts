import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'

export async function POST() {
  const session = await getSession()
  const accessToken = session.access_token

  if (accessToken) {
    await fetch('https://www.strava.com/oauth/deauthorize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `access_token=${accessToken}`,
    }).catch(() => {})
  }

  session.destroy()

  return NextResponse.redirect(
    new URL('/', process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000')
  )
}
