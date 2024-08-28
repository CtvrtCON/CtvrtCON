import {Button} from '@/components/Button'

export function BuyTicketButton({className}) {
    return (
        <Button href="https://form.fapi.cz/?id=d8c98bd4-11ce-4109-87ce-15ceadc32eb6" target="_blank" className={className}>
            Koupit vstupenku!
        </Button>
    )
}
