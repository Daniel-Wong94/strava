import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const error = searchParams.get('error')

  if (error || !code) {
    return NextResponse.redirect(
      new URL('/?error=access_denied', request.url)
    )
  }

  const tokenRes = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
    }),
  })

  if (!tokenRes.ok) {
    console.error('Token exchange failed:', await tokenRes.text())
    return NextResponse.redirect(
      new URL('/?error=token_exchange_failed', request.url)
    )
  }

  const data = await tokenRes.json()

  const session = await getSession()
  session.access_token = data.access_token
  session.refresh_token = data.refresh_token
  session.expires_at = data.expires_at
  session.athlete = data.athlete
  await session.save()

  return NextResponse.redirect(new URL('/dashboard', request.url))
}
