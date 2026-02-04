import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  if (!lat || !lon) {
    return NextResponse.json({ error: 'Les paramètres lat et lon sont requis' }, { status: 400 });
  }

  const apiKey = process.env.METEOSOURCE_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'Clé API manquante' }, { status: 500 });
  }

  try {
    const response = await fetch(
      `https://www.meteosource.com/api/v1/free/point?lat=${lat}&lon=${lon}&sections=current&units=metric&key=${apiKey}`,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Erreur API: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Erreur lors de la récupération des données météo:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des données météo' },
      { status: 500 },
    );
  }
}
