
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Label } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx';
import { Fragment } from "react";

export const LIMIT_DAY_FILTER_LIST = {
  "D1": 'Today',
  "D7": 'Last 7 days',
  "W1": 'This week',
  "M1": 'This Month',
  "Y1": 'This year'
}

export default function DayFilter({ value, onChange }) {
  return <Listbox value={value} onChange={onChange}>
    <ListboxButton
      className={clsx(
        'relative block border  w-40 rounded-lg py-1.5 px-3 text-left text-sm/6',
        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
      )}
    >
      {LIMIT_DAY_FILTER_LIST[value]}
      <ChevronUpDownIcon
        className="group pointer-events-none absolute top-2.5 right-2.5 size-4"
        aria-hidden="true"
      />
    </ListboxButton>
    <ListboxOptions
      anchor="bottom"
      transition
      className={clsx(
        'w-[var(--button-width)] rounded-xl border border-white/5 bg-zinc-800 shadow-sm p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none  my-0.5',
        'transition origin-top duration-200 ease-out data-[leave]:data-[closed]:opacity-0'
      )}>
      {Object.keys(LIMIT_DAY_FILTER_LIST).map((code) => <Fragment key={code}>
        <ListboxOption
          value={code}
          className="relative group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10">
          <div className="text-sm/6 text-white">{LIMIT_DAY_FILTER_LIST[code]}</div>
          <CheckIcon className="invisible fill-white group-data-[selected]:visible  absolute top-3 right-2.5 size-3" />
        </ListboxOption>
        {code == "D7" && <hr className='border-white/5 my-2' />}
      </Fragment>)}
    </ListboxOptions>
  </Listbox>
}