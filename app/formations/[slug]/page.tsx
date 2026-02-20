import { formations } from '@/data/formations';
import { notFound } from 'next/navigation';
import FormationHero from '@/components/formations/FormationHero';
import FormationDetails from '@/components/formations/FormationDetails';
import FormationDebouches from '@/components/formations/FormationDebouches';
import FormationCTA from '@/components/formations/FormationCTA';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONTACT_INFO } from '@/constants';
import { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const formation = formations.find((f) => f.slug === params.slug);
  if (!formation) return {};

  return {
    title: `${formation.title} | CFPA GOD’S PLAN`,
    description: `Formation en ${formation.title}. Durée : ${formation.duree}. Coût : ${formation.cout}. Niveau requis : ${formation.niveau}.`,
  };
}

export function generateStaticParams() {
  return formations.map((f) => ({
    slug: f.slug,
  }));
}

export default function FormationPage({ params }: Props) {
  const formation = formations.find((f) => f.slug === params.slug);

  if (!formation) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <FormationHero 
          title={formation.title}
          niveau={formation.niveau}
          duree={formation.duree}
          cout={formation.cout}
          image={formation.image}
          whatsapp={CONTACT_INFO.whatsapp}
        />
        <FormationDetails 
          contenu={formation.contenu}
          options={formation.options}
        />
        <FormationDebouches 
          debouches={formation.debouches}
        />
        <FormationCTA />
      </main>
      <Footer />
    </>
  );
}
