import Image from 'next/image'

import {Container} from '@/components/Container'
import {Section} from '@/components/Section'

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
        <Section className="relative">
            <Container>
            <header className='text-center'>
                <h2 className="font-display text-4xl font-medium tracking-tighter text-primary-600 sm:text-5xl">
                    Partneři
                </h2>
            </header>
            <div className='flex flex-col gap-12 mt-14'>
                <div
                    className="mx-auto flex items-center max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 md:grid-cols-3 md:gap-x-16 lg:gap-x-32">
                    {generalSponsors.map((sponsor) => (
                        <a 
                            href={sponsor.url}
                            key={sponsor.name}
                            className="flex items-center justify-center  max-w-80"
                            target="_blank"
                        >
                            <Image src={sponsor.logo} alt={sponsor.name} unoptimized/>
                        </a>
                    ))}
                </div>
                <div
                   className="grid grid-cols-2 gap-x-12 gap-y-6 ui-not-focus-visible:outline-none sm:gap-x-12 md:gap-y-6 md:gap-x-24 md:gap-y-12 md:grid-cols-5">
                    {sponsors.map((sponsor) => (
                        <a
                            href={sponsor.url}
                            key={sponsor.name}
                            className="block self-center justify-center max-w-40 m-auto"
                            target="_blank"
                        >
                            <Image src={sponsor.logo} alt={sponsor.name} unoptimized/>
                        </a>
                    ))}
                </div>
                </div>
            </Container>
        </Section>
    )
}
