import {BackgroundImage} from '@/components/BackgroundImage'
import {Button} from '@/components/Button'
import {Container} from '@/components/Container'
import {Layout} from '@/components/Layout'

export default function NotFound() {
    return (
        <Layout showFooter={false}>
            <div className="relative flex h-full items-center py-20 sm:py-36">
                <BackgroundImage className="-top-36 bottom-0"/>
                <Container className="relative flex w-full flex-col items-center">
                    <p className="font-display text-2xl tracking-tight text-primary-900">
                        404
                    </p>
                    <h1 className="mt-4 font-display text-4xl font-medium tracking-tighter text-primary-600 sm:text-5xl">
                        Nenalezeno
                    </h1>
                    <p className="mt-4 text-lg tracking-tight text-primary-900">
                        Omlouváme se, ale stránku, kterou hledáte, jsme nenašli.
                    </p>
                    <Button href="/" className="mt-8">
                        Jít zpátky domů
                    </Button>
                </Container>
            </div>
        </Layout>
    )
}
