'use client'

import {useEffect, useState} from 'react'
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/react'
import clsx from 'clsx'

import {BackgroundImage} from '@/components/BackgroundImage'
import {Container} from '@/components/Container'

const schedule = [
    {
        date: 'Stage 1',
        dateTime: '2024-11-23',
        summary:
            'Větší sál',
        timeSlots: [
            {
                name: 'Snídaně',
                description: 'Kdo si přivstane, tak se může nasnídat a pokecat už ráno',
                start: '8:00',
                end: '9:00',
            },
            {
                name: 'Úvod',
                description: 'Úvodní slovo',
                start: '9:00',
                end: '9:15',
            },
            {
                name: 'Tomáš Zahálka',
                id: 'tomas-zahalka',
                description: 'Jak se liší marketing ISIS, Talibánu a Al-Káidy?',
                start: '9:15',
                end: '10:00',
            },
            {
                name: 'Pauza',
                start: '10:00',
                end: '10:15',
            },
            {
                name: 'Dalibor Jaroš',
                id: 'dalibor-jaros',
                description: 'echo "441 zájemců/měsíc bez HR" > devHiring.txt',
                start: '10:15',
                end: '11:00',
            },
            {
                name: 'Oběd',
                description: 'Prostor na oběd - někde v okolí, či případný networking',
                start: '11:00',
                end: '12:30',
            },
            {
                name: 'Jakub Hájek',
                id: 'jakub-hajek',
                description: 'Jak udělat dobrý projekt: UX výzkum jako základ úspěchu',
                start: '12:30',
                end: '13:15',
            },
            {
                name: 'Pauza',
                start: '13:15',
                end: '13:30',
            },
            {
                name: 'David Zelenka',
                id: 'david-zelenka',
                description: 'Monetizace sociálních sítí pomocí virtuálních influencerů',
                start: '13:30',
                end: '14:15',
            },
            {
                name: 'Svačina',
                description: 'Doplnění energie a networking',
                start: '14:15',
                end: '15:15',
            },
            {
                name: 'Marian Benčat',
                id: 'marian-bencat',
                description: 'Jak se dělá obrovský wysiwyg editor plný dynamických výpočtů a dědění',
                start: '15:15',
                end: '16:00',
            },
            {
                name: 'Pauza',
                start: '16:00',
                end: '16:15',
            },
            {
                name: 'Martin Laudát',
                id: 'martin-laudat',
                description: 'Figma na křižovatce osudu',
                start: '16:15',
                end: '17:00',
            },
            {
                name: 'Závěr',
                description: 'Přesun na after párty',
                start: '17:00',
                end: '18:00',
            },
            {
                name: 'After párty',
                description: 'Vedle v prostoru „Kavárna“',
                start: '18:00',
                end: '22:00',
            }
        ],
    },
    {
        date: 'Stage 2',
        dateTime: '2024-11-23',
        summary:
            'Menší sál',
        timeSlots: [
            {
                name: 'Snídaně',
                description: 'Kdo si přivstane, tak se může nasnídat a pokecat už ráno',
                start: '8:00',
                end: '9:00',
            },
            {
                name: 'Úvod',
                description: 'Úvodní slovo',
                start: '9:00',
                end: '9:15',
            },
            {
                name: 'Petr Šťastný',
                id: 'petr-stastny',
                description: 'Databázový cluster MariaDB Galera',
                start: '9:15',
                end: '10:00',
            },
            {
                name: 'Pauza',
                start: '10:00',
                end: '10:15',
            },
            {
                name: 'Martin Hrabánek',
                id: 'martin-hrabanek',
                description: 'Co dělá z brandu lovebrand?',
                start: '10:15',
                end: '11:00',
            },
            {
                name: 'Oběd',
                description: 'Prostor na oběd - někde v okolí, či případný networking',
                start: '11:00',
                end: '12:30',
            },
            {
                name: 'Petr Urban',
                id: 'petr-urban',
                description: 'Mobilní aplikace: Nativní nebo multiplatformní vývoj?',
                start: '12:30',
                end: '13:15',
            },
            {
                name: 'Pauza',
                start: '13:15',
                end: '13:30',
            },
            {
                name: 'Panelová diskuze DEV',
                description: 'Jan Svěrák a jeho hosté',
                start: '13:30',
                end: '14:30',
            },
            {
                name: 'Svačina',
                description: 'Doplnění energie a networking',
                start: '14:30',
                end: '15:00',
            },
            {
                name: 'Panelová diskuze MKT',
                description: 'Karel Hladiš a jeho hosté',
                start: '15:00',
                end: '16:00',
            },
            {
                name: 'Pauza',
                start: '16:00',
                end: '16:15',
            },
            {
                name: 'Štefan Földesi',
                id: 'stefan-foldesi',
                description: 'Jak se programuje programovací jazyk',
                start: '16:15',
                end: '17:00',
            },
            {
                name: 'Závěr',
                description: 'Přesun na after párty',
                start: '17:00',
                end: '18:00',
            },
            {
                name: 'After párty',
                description: 'Vedle v prostoru „Kavárna“',
                start: '18:00',
                end: '22:00',
            }
        ],
    },
]

function ScheduleTabbed() {
    let [tabOrientation, setTabOrientation] = useState('horizontal')

    useEffect(() => {
        let smMediaQuery = window.matchMedia('(min-width: 640px)')

        function onMediaQueryChange({matches}) {
            setTabOrientation(matches ? 'vertical' : 'horizontal')
        }

        onMediaQueryChange(smMediaQuery)
        smMediaQuery.addEventListener('change', onMediaQueryChange)

        return () => {
            smMediaQuery.removeEventListener('change', onMediaQueryChange)
        }
    }, [])

    return (
        <TabGroup
            className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 md:hidden"
            vertical={tabOrientation === 'vertical'}
        >
            <TabList
                className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
                {({selectedIndex}) => (
                    <>
                        {schedule.map((day, dayIndex) => (
                            <div
                                key={day.dateTime}
                                className={clsx(
                                    'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                                    dayIndex !== selectedIndex && 'opacity-70',
                                )}
                            >
                                <DaySummary
                                    day={{
                                        ...day,
                                        date: (
                                            <Tab className="ui-not-focus-visible:outline-none">
                                                <span className="absolute inset-0"/>
                                                {day.date}
                                            </Tab>
                                        ),
                                    }}
                                />
                            </div>
                        ))}
                    </>
                )}
            </TabList>
            <TabPanels>
                {schedule.map((day) => (
                    <TabPanel
                        key={day.dateTime}
                        className="ui-not-focus-visible:outline-none"
                    >
                        <TimeSlots day={day}/>
                    </TabPanel>
                ))}
            </TabPanels>
        </TabGroup>
    )
}

function DaySummary({day}) {
    return (
        <>
            <h3 className="text-2xl font-semibold tracking-tight text-primary-900">
                <time dateTime={day.dateTime}>{day.date}</time>
            </h3>
            <p className="mt-1.5 text-base tracking-tight text-primary-900">
                {day.summary}
            </p>
        </>
    )
}

function TimeSlots({day, className}) {
    return (
        <ol
            role="list"
            className={clsx(
                className,
                'space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-primary-900/5 backdrop-blur',
            )}
        >
            {day.timeSlots.map((timeSlot, timeSlotIndex) => (
                <li
                    key={timeSlot.start}
                    id={timeSlot.id}
                    aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end}`}
                >
                    {timeSlotIndex > 0 && (
                        <div className="mx-auto mb-8 h-px w-48 bg-primary-500/10"/>
                    )}
                    <h4 className="text-lg font-semibold tracking-tight text-primary-900">
                        {timeSlot.name}
                    </h4>
                    {timeSlot.description && (
                        <p className="mt-1 tracking-tight text-primary-900">
                            {timeSlot.description}
                        </p>
                    )}
                    <p className="mt-1 font-mono text-sm text-slate-500">
                        <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
                            {timeSlot.start}
                        </time>
                        {' '}
                        -{' '}
                        <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
                            {timeSlot.end}
                        </time>
                    </p>
                </li>
            ))}
        </ol>
    )
}

function ScheduleStatic() {
    return (
        <div className="hidden md:grid md:grid-cols-2 md:gap-x-8">
            {schedule.map((day) => (
                <section key={day.dateTime}>
                    <DaySummary day={day}/>
                    <TimeSlots day={day} className="mt-10"/>
                </section>
            ))}
        </div>
    )
}

export function Schedule() {
    return (
        <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
            <Container className="relative z-10">
                <div className="mx-auto max-w-2xl md:mx-0 md:max-w-4xl md:pr-24">
                    <h2 className="font-display text-4xl font-medium tracking-tighter text-primary-600 sm:text-5xl">
                        Program
                    </h2>
                </div>
            </Container>
            <div className="relative mt-14 sm:mt-24">
                <BackgroundImage position="right" className="-bottom-32 -top-40"/>
                <Container className="relative">
                    <ScheduleTabbed/>
                    <ScheduleStatic/>
                </Container>
            </div>
        </section>
    )
}
