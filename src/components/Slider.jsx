import { Button } from './Button'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { format } from 'date-fns'
import Link from 'next/link'
import { Fragment } from 'react'

const shows = [
  {
    id: 1,
    date: 'January 10th, 2022',
    time: 'All Day',
    datetime: '2022-01-10T17:00',
    name: 'Krewe of Cypress',
    imageUrl:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    location: 'Chelsea’s Live, 1010 Nicholson Dr',
  },
  {
    id: 2,
    date: 'January 10th, 2022',
    time: 'All Day',
    datetime: '2022-01-10T17:00',
    name: 'House of Blues',
    imageUrl:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    location: 'Chelsea’s Live, 1010 Nicholson Dr',
  },
  {
    id: 3,
    date: 'January 10th, 2022',
    time: 'All Day',
    datetime: '2022-01-10T17:00',
    name: 'Krewe of Cypress',
    imageUrl:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    location: 'Chelsea’s Live, 1010 Nicholson Dr',
  },
  {
    id: 4,
    date: 'January 10th, 2022',
    time: 'All Day',
    datetime: '2022-01-10T17:00',
    name: 'Krewe of Cypress',
    imageUrl:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    location: 'Chelsea’s Live, 1010 Nicholson Dr',
  },
  {
    id: 5,
    date: 'January 10th, 2022',
    time: 'All Day',
    datetime: '2022-01-10T17:00',
    name: 'Krewe of Cypress',
    imageUrl:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    location: 'Chelsea’s Live, 1010 Nicholson Dr',
  },

  // More shows...
]

export default function Slider() {
  return (
    <Tab.Group>
      <Tab.Panels className="my-28">
        <h1 className="mb-3 font-sans text-2xl font-bold uppercase text-accent-500">
          Featured Shows
        </h1>
        {shows.map((show) => (
          <Tab.Panel key={show.id}>
            <h2 className="mb-5 font-display text-8xl tracking-tightest text-gray-100">
              {show.name}
            </h2>
            <p className="mb-3 font-sans text-3xl leading-8 text-accent-500">
              6:30 PM - 9:30pm <br />
              Saturday, Plaquemine, LA
            </p>
            <Link href="#" className="mb-3 font-sans leading-8 text-accent-500">
              See event details »
            </Link>
          </Tab.Panel>
        ))}
      </Tab.Panels>

      <Tab.List className="flex gap-3">
        {shows.map((show) => (
          <Tab key={show.id} as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <Button
                className={clsx(
                  selected
                    ? 'bg-accent-500 text-siteBackground'
                    : 'bg-transparent !text-accent-500',
                  'flex h-32 w-20 flex-col items-center justify-center border-2 border-accent-500 pt-3 '
                )}
              >
                <span>{format(new Date(show.datetime), 'MMM')}</span>
                <span className="text-4xl font-bold">
                  {format(new Date(show.datetime), 'dd')}
                </span>
              </Button>
            )}
          </Tab>
        ))}
      </Tab.List>
    </Tab.Group>
  )
}
