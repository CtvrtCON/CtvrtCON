import clsx from 'clsx'

export function Section({className, ...props}) {
    return (
        <section
            className={clsx('py-14 sm:py-20 ', className)}
            {...props}
        />
    )
}
