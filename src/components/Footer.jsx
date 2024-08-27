import {Container} from '@/components/Container'
import {Logo} from '@/components/Logo'

export function Footer() {
    return (
        <footer className="flex-none py-14 relative  ">
            <Container className="flex flex-col items-center justify-between gap-6">
                <Logo className="h-12 w-auto text-slate-900"/>
                <p className="text-base text-slate-500 md:mt-0">
                    &copy; {new Date().getFullYear()} <a href="https://ctvrtkon.cz" target="_blank">Čtvrtkon z.s.</a>
                </p>
            </Container>
        </footer>
    )
}
