import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

interface HeroDataResult {
  id: number;
  name: string;
  path: string;
  extension: string;
}

// Función para obtener todos los héroes
export async function GET() {
  const heroes = await prisma.hero.findMany();
  return NextResponse.json(heroes);
}

// Función para crear un nuevo héroe
export async function POST(request: Request) {
  const { id, name, path, extension }: HeroDataResult = await request.json();
  const hero = await prisma.hero.findUnique({
    where: { id },
  });

  if (hero) {
    const deletedHero = await prisma.hero.delete({
      where: { id },
    });
    
    return NextResponse.json(deletedHero);
  } else {
    const newHero = await prisma.hero.create({
      data: {
        id,
        name,
        path,
        extension,
      },
    });

    return NextResponse.json(newHero);
  }
}
