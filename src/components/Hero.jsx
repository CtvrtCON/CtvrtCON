import {BackgroundImage} from '@/components/BackgroundImage'
import {Button} from '@/components/Button'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'

export function Hero() {
    return (
        <Section className="relative">
            <BackgroundImage className="-bottom-14 -top-36 pointer-events-none"/>
            <Container className="relative">
                <div className="mx-auto flex items-start flex-col gap-6 ">
                    <h1 className="font-display text-5xl font-bold tracking-tighter text-primary-600 sm:text-6xl xl:text-8xl">
                        <span className="sr-only">Čtvrtkon - </span> ČtvrtCON <span className="text-2xl sm:text-5xl">konference</span>
                    </h1>
                    <div
                    className="flex font-mono">
                        <div className="-mx-0 flex flex-col  text-primary-600 sm:text-xl sm:flex-row sm:gap-4">
                            <p>
                                <time dateTime="2024-11-23">23.11.2024</time>
                            </p>
                            <span className='hidden sm:block'>|</span>
                            <p>Riegrova 51, České Budějovice</p>
                        </div>
                    </div>
                    <div className=" font-mono text-primary-900">
                        <p>
                            Historicky 1. celodenní konference pro celou komunitu Čtvrtkonu.<br/>
                            Přijďte se potkat a nachytřit napříč všemi hlavními chaptery:<br/>
                            Development (DEV), Marketing (MKT), Design (DSN).<br/>
                            Čekají na Vás dva sály s přednáškami souběžně a přestávky na networking.<br/>
                            Než to začne, tak si dáme snídani a odpoledne bude připravena svačina.<br/>
                            A kdo bude chtít, tak může pokračovat na after párty přímo na místě.
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
                                <dt className="font-mono text-primary-600">{name}</dt>
                                <dd className="font-mono font-semibold tracking-tight text-primary-900 sm:text-2xl">
                                    {value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                    <Button className="mt-4 cursor-not-allowed" disabled>
                        Koupit vstupenku - již brzy!
                    </Button>
                </div>
            </Container>
        </Section>
    )
}
