import {BackgroundImage} from '@/components/BackgroundImage'
import {Button} from '@/components/Button'
import {Container} from '@/components/Container'

export function Hero() {
    return (
        <div className="relative py-20 sm:pb-24 sm:pt-36">
            <BackgroundImage className="-bottom-14 -top-36"/>
            <Container className="relative">
                <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
                    <h1 className="font-display text-5xl font-bold tracking-tighter text-primary-600 sm:text-7xl">
                        <span className="sr-only">Čtvrtkon - </span> ČtvrtCON konference
                    </h1>
                    <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-primary-900">
                        <p>
                            Historicky 1. celodenní konference pro celou komunitu Čtvrtkonu.<br/>
                            Přijďte se potkat a nachytřit napříč všemi hlavními chaptery:<br/>
                            Development (DEV), Marketing (MKT), Design (DSN).<br/>
                            Čekají na Vás dva sály s přednáškami souběžně a přestávky na networking.<br/>
                            Než to začne, tak si dáme snídani a odpoledne bude připravena svačina.<br/>
                            A kdo bude chtít, tak může pokračovat na after párty přímo na místě.
                        </p>
                    </div>
                    <Button className="mt-10 w-full cursor-not-allowed" disabled>
                        Koupit vstupenku - již brzy!
                    </Button>
                    <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
                        {[
                            ['Přednášek', '10'],
                            ['Panelové diskuze', '2'],
                            ['Kapacita míst', '100'],
                            ['Místo', 'Riegrova 51'],
                        ].map(([name, value]) => (
                            <div key={name}>
                                <dt className="font-mono text-sm text-primary-600">{name}</dt>
                                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-primary-900">
                                    {value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </Container>
        </div>
    )
}
