'use client'

import {useEffect, useState} from 'react'
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/react'
import clsx from 'clsx'

import {BackgroundImage} from '@/components/BackgroundImage'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'

const program=[
    {
    block:[{
        name: 'Snídaně',
        description: 'Kdo si přivstane, tak se může nasnídat a pokecat už ráno',
        start: '8:00',
        end: '9:00',
        }
    ]
    },{
    block:[{
        stageName: 'S1',
        stageSize: 'Větší sál',
        name: 'Úvod',
        description: 'Úvodní slovo',
        start: '9:00',
        end: '9:15',
        }],
    },{
    block:[{
        stageName: 'S1',
        stageSize: 'Větší sál',
        name: 'Tomáš Zahálka',
        id: 'tomas-zahalka',
        description: 'Jak se liší marketing ISIS, Talibánu a Al-Káidy?',
        start: '9:15',
        end: '10:00',
        },{
        stageName: 'S2',
        stageSize: 'Menší sál',
        name: 'Petr Šťastný',
        id: 'petr-stastny',
        description: 'Databázový cluster MariaDB Galera',
        start: '9:15',
        end: '10:00',
        }],
    },{
    block:[{
        name: 'Pauza',
        start: '10:00',
        end: '10:15',
        }],
    },{
    block:[{
        stageName: 'S1',
        stageSize: 'Větší sál',
        name: 'Dalibor Jaroš',
        id: 'dalibor-jaros',
        description: 'echo "441 zájemců/měsíc bez HR" > devHiring.txt',
        start: '10:15',
        end: '11:00',
        },{
        stageName: 'S2',
        stageSize: 'Menší sál',
        name: 'Martin Hrabánek',
        id: 'martin-hrabanek',
        description: 'Co dělá z brandu lovebrand?',
        start: '10:15',
        end: '11:00',
        }],
    },{
    block:[{
        name: 'Oběd',
        description: 'Prostor na oběd - někde v okolí, či případný networking',
        start: '11:00',
        end: '12:30',
        }],
    },{
    block:[{
        stageName: 'S1',
        stageSize: 'Větší sál',
        name: 'Jakub Hájek',
        id: 'jakub-hajek',
        description: 'Jak udělat dobrý projekt: UX výzkum jako základ úspěchu',
        start: '12:30',
        end: '13:15',
        },{
        stageName: 'S2',
        stageSize: 'Menší sál',
        name: 'Petr Urban',
        id: 'petr-urban',
        description: 'Mobilní aplikace: Nativní nebo multiplatformní vývoj?',
        start: '12:30',
        end: '13:15',
        }],
    },{
    block:[{
        name: 'Pauza',
        start: '13:15',
        end: '13:30',
        }],
    },{
    block:[{
        stageName: 'Stage 1',
        stageSize: 'Větší sál',
        name: 'David Zelenka',
        id: 'david-zelenka',
        description: 'Monetizace sociálních sítí pomocí virtuálních influencerů',
        start: '13:30',
        end: '14:15',
        },{
        stageName: 'Stage 2',
        stageSize: 'Menší sál',
        name: 'Panelová diskuze DEV',
        description: 'Jan Svěrák a jeho hosté',
        start: '13:30',
        end: '14:30',
        }],
    },{
    block:[{
        name: 'Svačina',
        description: 'Doplnění energie a networking',
        start: '14:30',
        end: '15:00',
        }],
    },{
    block:[{
        stageName: 'Stage 1',
        stageSize: 'Větší sál',
        name: 'Marian Benčat',
        id: 'marian-bencat',
        description: 'Jak se dělá obrovský wysiwyg editor plný dynamických výpočtů a dědění',
        start: '15:15',
        end: '16:00',
        },{
        stageName: 'Stage 2',
        stageSize: 'Menší sál',
        name: 'Panelová diskuze MKT',
        description: 'Karel Hladiš a jeho hosté',
        start: '15:00',
        end: '16:00',
        }],
    },{
    block:[{
        name: 'Pauza',
        start: '16:00',
        end: '16:15',
        }],
    },{
    block:[{
        stageName: 'Stage 1',
        stageSize: 'Větší sál',
        name: 'Martin Laudát',
        id: 'martin-laudat',
        description: 'Figma na křižovatce osudu',
        start: '16:15',
        end: '17:00',
        },{
        stageName: 'Stage 2',
        stageSize: 'Menší sál',
        name: 'Štefan Földesi',
        id: 'stefan-foldesi',
        description: 'Jak se programuje programovací jazyk',
        start: '16:15',
        end: '17:00',
        }],
    },{
    block:[{
        stageName: 'Stage 1',
        stageSize: 'Větší sál',
        name: 'Závěr',
        description: 'Přesun na after párty',
        start: '17:00',
        end: '18:00',
        }],
    },{
    block:[{
        name: 'After párty',
        description: 'Vedle v prostoru „Kavárna“',
        start: '18:00',
        end: '22:00',
        }],
    },
]

function ProgramTable({timeBlock}) {

    const blockWidth= timeBlock.block.length<=1 ? 'text-center col-span-2' : 'text-center';

    return (
        <div
            className='grid grid-cols-2 px-4 py-4 gap-x-4 auto-rows-auto odd:bg-white md:px-6 md:py-6'
        >
            {timeBlock.block.map((stage) => ( 
            
                <div id={stage.id} className={blockWidth}> 
                <div>{stage.stageName}</div>
                <div>
                    <p className="text-sm text-slate-500">
                        <time dateTime={`T${stage.start}-08:00`}>
                            {stage.start}
                        </time>
                        {' '}
                        -{' '}
                        <time dateTime={`T${stage.end}-08:00`}>
                            {stage.end}
                        </time>
                    </p>

                    <h4 className="text-lg font-semibold tracking-tight text-primary-600">
                        {stage.name}
                        {/* 
                        {stage.stageSize} */}
                    </h4>

                    {stage.description && (
                        <p className="tracking-tight text-primary-900">
                            {stage.description}
                        </p>
                    )}
                </div>
            </div>
            ))}
        
        </div>
    )
}

function ScheduleStatic() {
    return (
        <div className="flex flex-col bg-white/60 shadow-xl shadow-primary-900/5 backdrop-blur rounded-3xl overflow-hidden">
            {program.map((stage) => (  
                <ProgramTable timeBlock={stage}/>
            ))}
        </div>
    )
}

export function Schedule() {
    return (
        <Section className="relative">
        
            <Container className="relative z-10">
                <header className='text-center'>
                    <h2 className="font-display text-4xl font-medium tracking-tighter text-primary-600 sm:text-5xl">
                        Program
                    </h2>
                </header>
            </Container>
            <div className="relative mt-14 sm:mt-24">
                <BackgroundImage position="right" className="-bottom-32 -top-40"/>
                <Container className="relative">
                    <ScheduleStatic/>
                </Container>
            </div>

        </Section>
    )
}
