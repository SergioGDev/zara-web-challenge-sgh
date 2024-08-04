import React, { Suspense } from "react";
import HeroDetailWidget from "@/widgets/HeroDetailWidget/HeroDetailWidget";

interface HeroDetailPageProps {
  params: { id: string };
}

const HeroDetailPage = ({ params }: HeroDetailPageProps) => {
  return (
    <Suspense fallback={<div>Loading hero data...</div>}>
      <HeroDetailWidget id={params.id} />
    </Suspense>
  );
};


export default HeroDetailPage;
