import clsx from "clsx";


export default function OverviewItem({ title, info, badgeText, badgeStyle, nanoInfo }) {

    const badge_class=`bg-lime-400/20 text-${badgeStyle}-700 group-data-[hover]:bg-${badgeStyle}-400/30 dark:bg-${badgeStyle}-400/10 dark:text-${badgeStyle}-300 dark:group-data-[hover]:bg-${badgeStyle}-400/15`;
    return <div>
        <hr role="presentation" className="w-full border-t border-zinc-950/10 dark:border-white/10" />
        <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">{title}</div>
        <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">{info}</div>
        <div className="mt-3 text-sm/6 sm:text-xs/6">
            <span className={clsx("inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline", badge_class)}>{badgeText}</span>
            <span className="text-zinc-500 ms-1">{nanoInfo}</span>
        </div>
    </div>
}


{/* <div><hr role="presentation" className="w-full border-t border-zinc-950/10 dark:border-white/10" /><div className="mt-6 text-lg/6 font-medium sm:text-sm/6">Total revenue</div><div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">$2.6M</div><div className="mt-3 text-sm/6 sm:text-xs/6"><span className="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-lime-400/20 text-lime-700 group-data-[hover]:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-[hover]:bg-lime-400/15">+4.5%</span> <span className="text-zinc-500">from last week</span></div></div>
        <div><hr role="presentation" className="w-full border-t border-zinc-950/10 dark:border-white/10" /><div className="mt-6 text-lg/6 font-medium sm:text-sm/6">Total revenue</div><div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">$2.6M</div><div className="mt-3 text-sm/6 sm:text-xs/6"><span className="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-pink-400/15 text-pink-700 group-data-[hover]:bg-pink-400/25 dark:bg-pink-400/10 dark:text-pink-400 dark:group-data-[hover]:bg-pink-400/20">+4.5%</span> <span className="text-zinc-500">from last week</span></div></div>
        <div><hr role="presentation" className="w-full border-t border-zinc-950/10 dark:border-white/10" /><div className="mt-6 text-lg/6 font-medium sm:text-sm/6">Total revenue</div><div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">$2.6M</div><div className="mt-3 text-sm/6 sm:text-xs/6"><span className="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-lime-400/20 text-lime-700 group-data-[hover]:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-[hover]:bg-lime-400/15">+4.5%</span> <span className="text-zinc-500">from last week</span></div></div>
        <div><hr role="presentation" className="w-full border-t border-zinc-950/10 dark:border-white/10" /><div className="mt-6 text-lg/6 font-medium sm:text-sm/6">Total revenue</div><div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">$2.6M</div><div className="mt-3 text-sm/6 sm:text-xs/6"><span className="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-lime-400/20 text-lime-700 group-data-[hover]:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-[hover]:bg-lime-400/15">+4.5%</span> <span className="text-zinc-500">from last week</span></div></div>
       */}