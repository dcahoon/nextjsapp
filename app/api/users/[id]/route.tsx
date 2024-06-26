import { NextRequest, NextResponse } from "next/server";

interface Props {
    params: { id: number }
}

export function GET(
    request: NextRequest, 
    { params }: { params: { id: number} }) {

    if (params.id > 10) 
        return NextResponse.json({ error: 'User not found' }, { status: 404 })

    return NextResponse.json({ id: 1, name: 'Dylan'})
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: number} }) {

    const body = await request.json()
    
    if (!body.name)
        return NextResponse.json({ error: 'Name is required'}, { status: 400})

    if (params.id > 10)
        return NextResponse.json({ error: 'User not found'}, { status: 404})

    return NextResponse.json({ id: 1, name: body.name })

}