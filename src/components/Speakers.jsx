'use client'

import {useEffect, useId, useState} from 'react'
import Image from 'next/image'
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/react'
import clsx from 'clsx'

import {Container} from '@/components/Container'
//import defaultImage from '@/images/avatars/default.webp'
import daliborjarosImage from '@/images/avatars/daliborjaros.webp'
import davidzelenkaImage from '@/images/avatars/davidzelenka.webp'
import jakubhajekImage from '@/images/avatars/jakubhajek.webp'
import marianbencatImage from '@/images/avatars/marianbencat.webp'
import martinhrabanekImage from '@/images/avatars/martinhrabanek.webp'
import martinlaudatImage from '@/images/avatars/martinlaudat.webp'
import petrstastnyImage from '@/images/avatars/petrstastny.webp'
import petrurbanImage from '@/images/avatars/petrurban.webp'
import stefanfoldesiImage from '@/images/avatars/stefanfoldesi.webp'
import tomaszahalkaImage from '@/images/avatars/tomaszahalka.webp'

const days = [
    {
        name: 'Speakers',
        dateTime: '2024-11-23',
        speakers: [
            {
                name: 'Dalibor Jaroš',
                url: '#dalibor-jaros',
                role: 'Výkonný ředitel zahraničních projektů & CEO Collabimu',
                company: 'INIZIO Internet Media s.r.o.',
                image: daliborjarosImage,
            },
            {
                name: 'David Zelenka',
                url: '#david-zelenka',
                role: 'Chief Marketing Officer',
                company: 'Brilo Team',
                image: davidzelenkaImage,
            },
            {
                name: 'Jakub Hájek',
                url: '#jakub-hajek',
                role: 'Head of UX & Design',
                company: 'Brilo Team',
                image: jakubhajekImage,
            },
            {
                name: 'Marian Benčat',
                url: '#marian-bencat',
                role: 'Konzultant a programátor na volné noze',
                company: '',
                image: marianbencatImage,
            },
            {
                name: 'Martin Hrabánek',
                url: '#martin-hrabanek',
                role: 'Brand designer',
                company: 'Brandtastic',
                image: martinhrabanekImage,
            },
            {
                name: 'Martin Laudát',
                url: '#martin-laudat',
                role: 'Lead Product Designer & Design System Manager',
                company: 'Dotidot',
                image: martinlaudatImage,
            },
            {
                name: 'Petr	Šťastný',
                url: '#petr-stastny',
                role: 'DevOps & cloud master na volné noze',
                company: '',
                image: petrstastnyImage,
            },
            {
                name: 'Petr Urban',
                url: '#petr-urban',
                role: 'Lead Software Engineer',
                company: 'JLL',
                image: petrurbanImage,
            },
            {
                name: 'Štefan Földesi',
                url: '#stefan-foldesi',
                role: 'Product Manager',
                company: 'GoPay',
                image: stefanfoldesiImage,
            },
            {
                name: 'Tomáš Zahálka',
                url: '#tomas-zahalka',
                role: 'SEO / PPC specialista pro Shoptet klienty s nízkým pudem sebezáchovy',
                company: '',
                image: tomaszahalkaImage,
            },
        ],
    },
]

function ImageClipPaths({id, ...props}) {
    return (
        <svg aria-hidden="true" width={0} height={0} {...props}>
            <defs>
                <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
                    <path
                        d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0"/>
                </clipPath>
                <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
                    <path
                        d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7"/>
                </clipPath>
                <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
                    <path
                        d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0"/>
                </clipPath>
            </defs>
        </svg>
    )
}

export function Speakers() {
    let id = useId()
    let [tabOrientation, setTabOrientation] = useState('horizontal')

    useEffect(() => {
        let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

        function onMediaQueryChange({matches}) {
            setTabOrientation(matches ? 'vertical' : 'horizontal')
        }

        onMediaQueryChange(lgMediaQuery)
        lgMediaQuery.addEventListener('change', onMediaQueryChange)

        return () => {
            lgMediaQuery.removeEventListener('change', onMediaQueryChange)
        }
    }, [])

    return (
        <section
            id="speakers"
            aria-labelledby="speakers-title"
            className="py-20 sm:py-32"
        >
            <ImageClipPaths id={id}/>
            <Container>
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2
                        id="speakers-title"
                        className="font-display text-4xl font-medium tracking-tighter text-primary-600 sm:text-5xl"
                    >
                        Přednášející
                    </h2>
                </div>
                <TabGroup
                    className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
                    vertical={tabOrientation === 'vertical'}
                >
                    <TabPanels className="lg:col-span-4">
                        {days.map((day) => (
                            <TabPanel
                                key={day.dateTime}
                                className="grid grid-cols-1 gap-x-8 gap-y-10 ui-not-focus-visible:outline-none sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-5"
                                unmount={false}
                            >
                                {day.speakers.map((speaker, speakerIndex) => (
                                    <div key={speakerIndex}>
                                        <a
                                            className="block group relative h-[17.5rem] transform overflow-hidden rounded-4xl"
                                            href={speaker.url}>
                                             
                                            <div
                                                className={clsx(
                                                    'absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                                                    [
                                                        'border-primary-300',
                                                        'border-primary-100',
                                                        'border-sky-300',
                                                    ][speakerIndex % 3],
                                                )}
                                            />
                                            <div
                                                className="absolute inset-0 bg-primary-50"
                                                style={{clipPath: `url(#${id}-${speakerIndex % 3})`}}
                                            >
                                                <Image
                                                    className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                                                    src={speaker.image}
                                                    alt=""
                                                    priority
                                                    sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                />
                                            </div>
                                        </a>
                                        <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                                            {speaker.name}
                                        </h3>
                                        <p className="mt-1 text-base tracking-tight text-slate-500">
                                            {speaker.role}
                                            {speaker.company && <span><br/>@ {speaker.company}</span>}
                                        </p>
                                    </div>
                                ))}
                            </TabPanel>
                        ))}
                    </TabPanels>
                </TabGroup>
            </Container>
        </section>
    )
}
