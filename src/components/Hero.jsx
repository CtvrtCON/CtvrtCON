import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'

export function Hero() {
  return (
    <Section className="relative">
      <BackgroundImage
        position="right"
        className="pointer-events-none opacity-75 lg:opacity-100"
      />
      <Container className="relative">
        <div className="mx-auto flex flex-col items-start gap-6">
          <h1 className="font-display text-6xl font-bold leading-9 tracking-tight text-primary-700 lg:text-8xl">
            <span className="sr-only">Čtvrtkon - </span> ČtvrtCON{' '}
            <span className="text-3xl lg:text-5xl">konference</span>
          </h1>
          <div className="flex font-mono">
            <div className="-mx-0 flex flex-col text-lg text-primary-700 sm:flex-row sm:gap-4 sm:text-xl">
              <p>
                <time dateTime="2024-11-23">23.11.2024</time>
              </p>
              <span className="hidden sm:block">|</span>
              <p>Riegrova 51, České Budějovice</p>
            </div>
          </div>
          <div className="text-primary-900">
            <p className="mb-2">
              Historicky první celodenní konference pro celou komunitu
              Čtvrtkonu.
              <br />
              Přijďte se potkat a nachytřit napříč všemi hlavními chaptery:
              <br />
              Development (DEV), Marketing (MKT), Design (DSN).
            </p>
            <p>
              Čekají na Vás dva sály s přednáškami souběžně a přestávky na
              networking.
              <br />
              Než to začne, tak si dáme snídani a odpoledne bude připravena
              svačina.
              <br />A kdo bude chtít, tak může pokračovat na after párty přímo
              na místě.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-16 sm:gap-y-10 lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Přednášek', '10'],
              ['Panelové diskuze', '2'],
              ['Kapacita míst', '100'],
              ['Místo', 'Riegrova 51'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-primary-700">{name}</dt>
                <dd className="font-mono font-semibold tracking-tight text-primary-900 sm:text-2xl">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Button className="cursor-not-allowed" disabled>
              Koupit vstupenku - již brzy!
            </Button>
            <a
              className="inline-flex justify-center rounded-lg border-2 border-primary-600 p-4 text-base font-semibold text-primary-600 hover:border-primary-500 hover:bg-primary-500 hover:text-white focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 active:text-white/70 disabled:bg-gray-600"
              href="#program"
            >
              Program
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
