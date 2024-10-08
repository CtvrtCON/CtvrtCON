import Link from 'next/link'
import clsx from 'clsx'

export function Button({className, ...props}) {
    className = clsx(
        'inline-flex justify-center rounded-lg bg-primary-600 p-4 text-base font-semibold text-white hover:bg-primary-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 active:text-white/70 disabled:bg-gray-600',
        className,
    )

    return typeof props.href === 'undefined' ? (
        <button className={className} {...props}  />
    ) : (
        <Link className={className} {...props} />
    )
}
