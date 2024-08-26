import {Button} from '@/components/Button'
import {Container} from '@/components/Container'
import {Logo} from '@/components/Logo'

export function Header() {
    return (
        <header className="relative mt-4 z-50 flex-none lg:pt-4">
            <Container className="flex flex-wrap items-center sm:justify-between lg:flex-nowrap">
                <div className="lg:grow lg:basis-0">
                    <Logo className="h-12 w-auto text-slate-900"/>
                </div>
               
                <div className="hidden sm:flex lg:grow lg:basis-0 lg:justify-end">
                    <Button className="cursor-not-allowed" disabled>Koupit vstupenku - již brzy!</Button>
                </div>
            </Container>
        </header>
    )
}
