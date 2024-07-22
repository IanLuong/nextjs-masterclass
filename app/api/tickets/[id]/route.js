import { NextRequest, NextResponse } from 'next/server';

export async function GET(_request, { params }) {
  const { id } = params;
  const res = await fetch(`http://localhost:4000/tickets/${id}`);
  
  if (!res.ok) {
    return NextResponse({ error: 'Cannot find ticket' }, { status: 404 });
  }
  
  const tickets = await res.json();
  return NextResponse.json(tickets, { status: 200 });
}

export async function PUT() {}

export async function DELETE() {}
