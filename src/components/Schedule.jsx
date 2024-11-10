'use client'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { BuyTicketButton } from '@/components/BuyTicketButton'

const program = [
  {
    block: [
      {
        name: 'Snídaně',
        description: 'Kdo si přivstane, tak se může nasnídat a pokecat už ráno',
        start: '8:00',
        end: '9:00',
      },
    ],
  },
  {
    block: [
      {
        name: 'Úvodní slovo',
        start: '9:00',
        end: '9:15',
      },
    ],
  },
  {
    block: [
      {
        stageName: 'Stage 1',
        stageSize: 'Větší sál',
        name: 'Jak se liší marketing ISIS, Talibánu a Al-Káidy?',
        id: 'tomas-zahalka',
        description: 'Tomáš Zahálka',
        start: '9:15',
        end: '10:00',
      },
      {
        stageName: 'Stage 2',
        stageSize: 'Menší sál',
        name: 'Databázový cluster MariaDB Galera',
        id: 'petr-stastny',
        description: 'Petr Šťastný',
        start: '9:15',
        end: '10:00',
      },
    ],
  },
  {
    block: [
      {
        name: 'Pauza',
        start: '10:00',
        end: '10:15',
      },
    ],
  },
  {
    block: [
      {
        stageName: 'Stage 1',
        stageSize: 'Větší sál',
        name: 'Profilování a optimalizace v Pythonu: když na výkonu záleží',
        id: 'martin-vastl',
        description: 'Martin Vastl',
        start: '10:15',
        end: '11:00',
      },
      {
        stageName: 'Stage 2',
        stageSize: 'Menší sál',
        name: 'Co dělá z brandu lovebrand?',
        id: 'martin-hrabanek',
        description: 'Martin Hrabánek',
        start: '10:15',
        end: '11:00',
      },
    ],
  },
  {
    block: [
      {
        name: 'Oběd',
        description: 'Prostor na oběd - někde v okolí, či případný networking',
        start: '11:00',
        end: '12:30',
      },
    ],
  },
  {
    block: [
      {
        stageName: 'Stage 1',
        stageSize: 'Větší sál',
        name: 'Jak udělat dobrý projekt: UX výzkum jako základ úspěchu',
        id: 'jakub-hajek',
        description: 'Jakub Hájek',
        start: '12:30',
        end: '13:15',
      },
      {
        stageName: 'Stage 2',
        stageSize: 'Menší sál',
        name: 'Mobilní aplikace: Nativní nebo multiplatformní vývoj?',
        id: 'petr-urban',
        description: 'Petr Urban',
        start: '12:30',
        end: '13:15',
      },
    ],
  },
  {
    block: [
      {
        name: 'Pauza',
        start: '13:15',
        end: '13:30',
      },
    ],
  },
  {
    block: [
      {
        stageName: 'Stage 1',
        stageSize: 'Větší sál',
        name: 'Monetizace sociálních sítí pomocí virtuálních influencerů',
        id: 'david-zelenka',
        description: 'David Zelenka',
        start: '13:30',
        end: '14:15',
      },
      {
        stageName: 'Stage 2',
        stageSize: 'Menší sál',
        name: 'Panelová diskuze DEV - Jan Svěrák',
        description: 'Obě strany mince - tvorba UI z pohledu designu a frontendu',
        guests: 'Jakub Jetleb, Kateřina N. Voláková, Martin Laudát, Jakub Hájek',
        start: '13:30',
        end: '14:30',
      },
    ],
  },
  {
    block: [
      {
        name: 'Svačina',
        description: 'Doplnění energie a networking',
        start: '14:15',
        end: '15:15',
      },
    ],
  },
  {
    block: [
      {
        stageName: 'Stage 1',
        stageSize: 'Větší sál',
        name: 'Jak se dělá obrovský wysiwyg editor plný dynamických výpočtů a dědění',
        id: 'marian-bencat',
        description: 'Marian Benčat',
        start: '15:15',
        end: '16:00',
      },
      {
        stageName: 'Stage 2',
        stageSize: 'Menší sál',
        name: 'Panelová diskuze MKT - Karel Hladiš',
        description: 'Jak se liší “úspěšný” e-shop od toho “neúspěšného”?',
        guests: 'Tomáš Zahálka, Petr Voves, Jan Brož',
        start: '15:00',
        end: '16:00',
      },
    ],
  },
  {
    block: [
      {
        name: 'Pauza',
        start: '16:00',
        end: '16:15',
      },
    ],
  },
  {
    block: [
      {
        stageName: 'Stage 1',
        stageSize: 'Větší sál',
        name: 'Figma na křižovatce osudu',
        id: 'martin-laudat',
        description: 'Martin Laudát',
        start: '16:15',
        end: '17:00',
      },
      {
        stageName: 'Stage 2',
        stageSize: 'Menší sál',
        name: 'Jak se programuje programovací jazyk',
        id: 'stefan-foldesi',
        description: 'Štefan Földesi',
        start: '16:15',
        end: '17:00',
      },
    ],
  },
  {
    block: [
      {
        name: 'Zakončení',
        start: '17:00',
        end: '18:00',
      },
    ],
  },
  {
    block: [
      {
        stageName: 'Prostor „Kavárna“',
        name: 'Večírek + after párty',
        start: '18:00',
        end: '22:00',
      },
    ],
  },
]

function ProgramTable({ timeBlock }) {
  const blockWidth = timeBlock.block.length <= 1 ? 'col-span-2' : ''

  return (
    <div className="grid auto-rows-auto grid-cols-2 py-6 first:!bg-white/60 odd:bg-white md:px-6 md:py-6 [&:nth-child(2)]:bg-white">
      {timeBlock.block.map((stage, i) => (
        <div
          id={stage.id}
          className={`${blockWidth} flex flex-col border-r px-4 text-center last:border-r-0 sm:px-8`}
          key={i}
        >
          <h4 className="mb-2 font-semibold tracking-tight text-primary-900 sm:text-lg">
            {stage.name}
            {/* {stage.stageSize} */}
          </h4>

          {stage.description && (
            <p className="mb-4 tracking-tight text-slate-600">
              {stage.description}
            </p>
          )}

          {stage.guests && (
            <p className="mb-4 tracking-tight text-slate-600">
              Hosté: {stage.guests}
            </p>
          )}

          <div className="mt-auto font-mono text-sm text-slate-600">
            {stage.stageName}
          </div>

          <p className="font-mono text-sm text-slate-600">
            <time dateTime={`T${stage.start}-08:00`}>{stage.start}</time> -{' '}
            <time dateTime={`T${stage.end}-08:00`}>{stage.end}</time>
          </p>
        </div>
      ))}
    </div>
  )
}

function ScheduleStatic() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col overflow-hidden rounded-3xl bg-white/60 shadow-xl shadow-primary-900/5 backdrop-blur">
      {program.map((stage, i) => (
        <ProgramTable timeBlock={stage} key={i} />
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <Section className="relative" id="program">
      <Container className="relative z-10">
        <header className="text-center">
          <h2 className="mb-4 font-display text-4xl font-medium tracking-tighter text-primary-600 sm:text-5xl">
            Program
          </h2>
        </header>
      </Container>
      <div className="relative mt-8 text-center sm:mt-14">
        <BackgroundImage position="left" className="-bottom-32 -top-40" />
        <Container className="relative">
          <ScheduleStatic />
          <BuyTicketButton className="mt-8" />
        </Container>
      </div>
    </Section>
  )
}
