import { HomeIcon, BookOpenIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

export default function Sidebar(props) {

    return <div className="fixed inset-y-0 left-0 w-64 max-lg:hidden">
        <nav className="flex h-full min-h-0 flex-col">
            <div className="flex flex-1 flex-col overflow-y-auto p-4 [&>[data-slot=section]+[data-slot=section]]:mt-8">
                <div data-slot="section" className="flex flex-col gap-0.5">
                    <span className="relative">
                        {/* <span className="absolute inset-y-2 -left-4 w-0.5 rounded-full bg-zinc-950 dark:bg-white"></span> */}
                        <Link className="flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5 data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:fill-zinc-500 sm:data-[slot=icon]:*:size-5 data-[slot=icon]:last:*:ml-auto data-[slot=icon]:last:*:size-5 sm:data-[slot=icon]:last:*:size-4 data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-6 data-[hover]:bg-zinc-950/5 data-[slot=icon]:*:data-[hover]:fill-zinc-950 data-[active]:bg-zinc-950/5 data-[slot=icon]:*:data-[active]:fill-zinc-950 data-[slot=icon]:*:data-[current]:fill-zinc-950 dark:text-white dark:data-[slot=icon]:*:fill-zinc-400 dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[hover]:fill-white dark:data-[active]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white dark:data-[slot=icon]:*:data-[current]:fill-white"
                            type="button" data-headlessui-state="" href="/" data-current="true"><span
                                className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                                aria-hidden="true"></span>

                            <HomeIcon className="size-6 text-blue-500" />
                            <span className="truncate">Home</span></Link>
                    </span>

                    <span className="relative">
                        {/* <span className="absolute inset-y-2 -left-4 w-0.5 rounded-full bg-zinc-950 dark:bg-white"></span> */}
                        <Link className="flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5 data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:fill-zinc-500 sm:data-[slot=icon]:*:size-5 data-[slot=icon]:last:*:ml-auto data-[slot=icon]:last:*:size-5 sm:data-[slot=icon]:last:*:size-4 data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-6 data-[hover]:bg-zinc-950/5 data-[slot=icon]:*:data-[hover]:fill-zinc-950 data-[active]:bg-zinc-950/5 data-[slot=icon]:*:data-[active]:fill-zinc-950 data-[slot=icon]:*:data-[current]:fill-zinc-950 dark:text-white dark:data-[slot=icon]:*:fill-zinc-400 dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[hover]:fill-white dark:data-[active]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white dark:data-[slot=icon]:*:data-[current]:fill-white"
                            type="button" data-headlessui-state="" href="/journals" data-current="true"><span
                                className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                                aria-hidden="true"></span>

                            <BookOpenIcon className="size-6 text-blue-500" />

                            <span className="truncate">Trades</span></Link>

                    </span>
                </div>
            </div>
        </nav>
    </div>
}