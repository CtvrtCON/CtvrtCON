import {Container} from '@/components/Container'
import {Logo} from '@/components/Logo'

export function Footer() {
    return (
        <footer className="flex-none py-16">
            <Container className="flex flex-col items-center justify-between md:flex-row">
                <Logo className="h-12 w-auto text-slate-900"/>
                <p className="mt-6 text-base text-slate-500 md:mt-0">
                    &copy; {new Date().getFullYear()} <a href="https://ctvrtkon.cz" target="_blank">Čtvrtkon z.s.</a>
                </p>
            </Container>
        </footer>
    )
}
