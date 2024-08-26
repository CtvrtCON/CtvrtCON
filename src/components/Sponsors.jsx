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
    {name: 'JR Food', logo: jrFoodLogo,url:'https://jrfood.eu/'},
]

const sponsors = [
    {name: 'Brilo Team', logo: briloLogo,url:'https://www.brilo.team/'},
    {name: 'E-shop Rychle', logo: eshopRychleLogo,url:'https://www.eshop-rychle.cz/'},
    {name: 'Engel', logo: engelLogo,url:'https://www.pracevengelu.cz/'},
    {name: 'Inizio', logo: inizioLogo,url:'https://www.inizio.cz/'},
    {name: 'Marian Benčat', logo: marianBencatLogo,url:'https://www.linkedin.com/in/marian-ben%C4%8Dat-a832b794'},
    {name: 'NWU', logo: nwuLogo,url:'https://www.nwu.cz/'},
    {name: 'Smart Emailing', logo: smartEmailingLogo,url:'https://www.smartemailing.cz/'},
    {name: 'TicketsGP', logo: ticketsGpLogo,url:'https://www.tickets.gp/'},
    {name: 'Tomáš Zahálka', logo: tomasZahalkaLogo,url:'https://tomaszahalka.cz/'},
    {name: 'Websta', logo: webstaLogo,url:'https://websta.cz/'},
]

export function Sponsors() {
    return (
        <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
            <Container>
                <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-primary-900 sm:text-5xl">
                    Partneři
                </h2>
                <div
                    className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
                    {generalSponsors.map((sponsor) => (
                        <a 
                            href={sponsor.url}
                            key={sponsor.name}
                            className="flex items-center justify-center sm:col-start-2 "
                            target="_blank"
                        >
                            <Image src={sponsor.logo} alt={sponsor.name} unoptimized/>
                        </a>
                    ))}
                </div>
                <div
                    className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-5 md:gap-x-16 lg:gap-x-32">
                    {sponsors.map((sponsor) => (
                        <a
                            href={sponsor.url}
                            key={sponsor.name}
                            className="flex items-center justify-center"
                            target="_blank"
                        >
                            <Image src={sponsor.logo} alt={sponsor.name} unoptimized/>
                        </a>
                    ))}
                </div>
            </Container>
        </section>
    )
}
