import Image from 'next/image'

import {Container} from '@/components/Container'
import jrFoodLogo from '@/images/partners/jr-food.png'
import briloLogo from '@/images/partners/brilo.png'
import eshopRychleLogo from '@/images/partners/eshop-rychle.png'
import engelLogo from '@/images/partners/engel.png'
import inizioLogo from '@/images/partners/inizio.png'
import marianBencatLogo from '@/images/partners/marian-bencat.png'
import nwuLogo from '@/images/partners/nwu.png'
import smartEmailingLogo from '@/images/partners/smartemailing.png'
import ticketsGpLogo from '@/images/partners/tickets-gp.png'
import tomasZahalkaLogo from '@/images/partners/tomas-zahalka.png'
import webstaLogo from '@/images/partners/websta.png'

const generalSponsors = [
    {name: 'JR Food', logo: jrFoodLogo},
]

const sponsors = [
    {name: 'Brilo Team', logo: briloLogo},
    {name: 'E-shop Rychle', logo: eshopRychleLogo},
    {name: 'Engel', logo: engelLogo},
    {name: 'Inizio', logo: inizioLogo},
    {name: 'Marian Benčat', logo: marianBencatLogo},
    {name: 'NWU', logo: nwuLogo},
    {name: 'Smart Emailing', logo: smartEmailingLogo},
    {name: 'TicketsGP', logo: ticketsGpLogo},
    {name: 'Tomáš Zahálka', logo: tomasZahalkaLogo},
    {name: 'Websta', logo: webstaLogo},
]

export function Sponsors() {
    return (
        <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
            <Container>
                <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-primary-900 sm:text-5xl">
                    Patneři
                </h2>
                <div
                    className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
                    {generalSponsors.map((sponsor) => (
                        <div
                            key={sponsor.name}
                            className="flex items-center justify-center sm:col-start-2"
                        >
                            <Image src={sponsor.logo} alt={sponsor.name} unoptimized/>
                        </div>
                    ))}
                </div>
                <div
                    className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-5 md:gap-x-16 lg:gap-x-32">
                    {sponsors.map((sponsor) => (
                        <div
                            key={sponsor.name}
                            className="flex items-center justify-center"
                        >
                            <Image src={sponsor.logo} alt={sponsor.name} unoptimized/>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
