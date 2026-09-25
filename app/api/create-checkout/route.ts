import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, { auth: { autoRefreshToken: false, persistSession: false } })
    const body = await request.json()
    const amount = Number(body.amount)
    if (!Number.isInteger(amount) || amount < 1 || amount > 100000) return NextResponse.json({ error: 'Enter a valid donation amount.' }, { status: 400 })
    const origin = request.headers.get('origin') ?? 'https://ngo-imaan.vercel.app'
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price_data: { currency: 'usd', product_data: { name: 'Donation to Imaan Relief' }, unit_amount: amount * 100 }, quantity: 1 }],
      success_url: `${origin}/?donation=success#donate`,
      cancel_url: `${origin}/?donation=cancelled#donate`,
      integration_identifier: `imaan_donation_${Math.random().toString(36).slice(2, 10)}`,
    })
    const { error } = await supabaseAdmin.from('donations').insert({ stripe_checkout_session_id: session.id, amount_cents: amount * 100, currency: 'usd', status: 'pending' })
    if (error) throw error
    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('[v0] Checkout creation failed', error)
    return NextResponse.json({ error: 'Unable to start donation checkout.' }, { status: 500 })
  }
}

export const runtime = 'nodejs'
