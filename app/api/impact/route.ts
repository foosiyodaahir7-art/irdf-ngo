import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET() {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
  const { data, error } = await supabase.from('impact_metrics').select('people_reached, projects_completed, communities_supported, volunteers').limit(1).maybeSingle()
  if (error) return NextResponse.json({ error: 'Unable to load impact numbers.' }, { status: 500 })
  return NextResponse.json(data ?? { people_reached: 0, projects_completed: 0, communities_supported: 0, volunteers: 0 })
}
