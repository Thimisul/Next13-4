import { NextResponse } from 'next/server';

export async function GET() {
  const data = [
    {
        "description": "Negócios",
        "icon": "Building2",
        "svgIcon": ""
    },
    {
        "description": "Usuários",
        "icon": "Users",
        "svgIcon": ""
    },
    {
        "description": "Transações",
        "icon": "ArrowDownUp",
        "svgIcon": ""
    },
  ]
  return NextResponse.json({ data });
}