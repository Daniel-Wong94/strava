import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'
import type { SessionData } from './types'

export const sessionOptions = {
  password: process.env.SESSION_SECRET!,
  cookieName: 'strava_session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax' as const,
    maxAge: 60 * 60 * 24 * 30, // 30 days
  },
}

export async function getSession() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions)
  return session
}

export async function getSessionWithRefresh() {
  const session = await getSession()

  if (!session.access_token) return null

  // Refresh if expiring within 5 minutes
  if (session.expires_at && Date.now() / 1000 > session.expires_at - 300) {
    try {
      const response = await fetch('https://www.strava.com/oauth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: process.env.STRAVA_CLIENT_ID,
          client_secret: process.env.STRAVA_CLIENT_SECRET,
          refresh_token: session.refresh_token,
          grant_type: 'refresh_token',
        }),
      })

      if (response.ok) {
        const data = await response.json()
        session.access_token = data.access_token
        session.refresh_token = data.refresh_token
        session.expires_at = data.expires_at
        await session.save()
      } else {
        // Refresh failed — token is invalid
        return null
      }
    } catch {
      return null
    }
  }

  return session
}
