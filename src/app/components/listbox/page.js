'use client';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react'

const people = [
  { id: "D1", name: 'Today' },
  { id: "D7", name: 'Last 7 days' },

  { id: "W1", name: 'This week' },
  { id: "M1", name: 'This Month' },
  { id: "Y1", name: 'This year' }
]

export default function Example() {
  const [selected, setSelected] = useState(people[1])

  return (
    <div className="mx-auto h-screen pt-20">
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          className={clsx(
            'relative block border border-white/5  w-40 rounded-lg bg-white/5 py-1.5 px-3 text-left text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
        >
          {selected.name}
          <ChevronUpDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'w-[var(--button-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none  my-0.5',
            'transition origin-top duration-200 ease-out data-[leave]:data-[closed]:opacity-0'
          )}
        >
          {people.map((person) => <>
            <ListboxOption
              key={person.name}
              value={person}
              className="relative group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
            >

              <div className="text-sm/6 text-white">{person.name}</div>
              <CheckIcon className="invisible fill-white group-data-[selected]:visible  absolute top-3 right-2.5 size-3" />
            </ListboxOption>
            { person.id=="D7" && <hr className='border-white/5 my-2'/>}
          </>)}
        </ListboxOptions>
      </Listbox>
    </div>
  )
}
