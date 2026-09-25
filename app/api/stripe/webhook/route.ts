import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
  const signature = (await headers()).get('stripe-signature')
  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) return NextResponse.json({ error: 'Webhook is not configured.' }, { status: 400 })
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, { auth: { autoRefreshToken: false, persistSession: false } })
    const event = stripe.webhooks.constructEvent(await request.text(), signature, process.env.STRIPE_WEBHOOK_SECRET)
    if (event.type === 'checkout.session.completed' || event.type === 'checkout.session.async_payment_succeeded') {
      const session = event.data.object as Stripe.Checkout.Session
      if (session.payment_status === 'paid') {
        await supabaseAdmin.from('donations').update({ status: 'paid', donor_email: session.customer_details?.email ?? null, paid_at: new Date().toISOString() }).eq('stripe_checkout_session_id', session.id)
      }
    }
    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('[v0] Stripe webhook failed', error)
    return NextResponse.json({ error: 'Invalid webhook.' }, { status: 400 })
  }
}

export const runtime = 'nodejs'
