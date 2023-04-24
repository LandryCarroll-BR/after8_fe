import { useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  sub,
} from 'date-fns'

import Image from 'next/image'
import { calendarAPI } from '@/services/axios'

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
    name: 'Krewe of Cypress',
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
  {
    id: 6,
    date: 'January 10th, 2022',
    time: 'All Day',
    datetime: '2022-01-10T17:00',
    name: 'Krewe of Cypress',
    imageUrl:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    location: 'Chelsea’s Live, 1010 Nicholson Dr',
  },
  {
    id: 7,
    date: 'January 10th, 2022',
    time: 'All Day',
    datetime: '2022-01-10T17:00',
    name: 'Krewe of Cypress',
    imageUrl:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    location: 'Chelsea’s Live, 1010 Nicholson Dr',
  },
  {
    id: 8,
    date: 'January 10th, 2022',
    time: 'All Day',
    datetime: '2022-01-10T17:00',
    name: 'Krewe of Cypress',
    imageUrl:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    location: 'Chelsea’s Live, 1010 Nicholson Dr',
  },
  {
    id: 9,
    date: 'January 10th, 2022',
    time: 'All Day',
    datetime: '2022-01-10T17:00',
    name: 'Krewe of Cypress',
    imageUrl:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    location: 'Chelsea’s Live, 1010 Nicholson Dr',
  },
  {
    id: 10,
    date: 'January 10th, 2022',
    time: 'All Day',
    datetime: '2022-01-10T17:00',
    name: 'Krewe of Cypress',
    imageUrl:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    location: 'Chelsea’s Live, 1010 Nicholson Dr',
  },
  {
    kind: 'calendar#event',
    etag: '"3363239281972000"',
    id: '3rk2pt1gd9sompdtt2b1spvljp',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3JrMnB0MWdkOXNvbXBkdHQyYjFzcHZsanAgYWZ0ZXI4Ym9va2luZ0Bt',
    created: '2023-04-16T04:34:00.000Z',
    updated: '2023-04-16T04:34:00.986Z',
    summary: 'test',
    creator: {
      email: 'after8booking@gmail.com',
      self: true,
    },
    organizer: {
      email: 'after8booking@gmail.com',
      self: true,
    },
    start: {
      dateTime: '2023-04-21T00:00:00-05:00',
      timeZone: 'America/Chicago',
    },
    end: {
      dateTime: '2023-04-21T01:00:00-05:00',
      timeZone: 'America/Chicago',
    },
    iCalUID: '3rk2pt1gd9sompdtt2b1spvljp@google.com',
    sequence: 0,
    eventType: 'default',
  },
  // More shows...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Calendar() {
  let today = startOfToday()
  const [selectedDay, setSelectedDay] = useState(today)
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  useEffect(() => {
    async function loadEvents() {
      const data = await calendarAPI.fetchEvents()
    }
    loadEvents()
  }, [])

  let filler = new Array()
  for (let index = 0; index < 42; index++) {
    filler.push(index)
  }

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function previousMonth() {
    let firstDayPreviousMonth = sub(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayPreviousMonth, 'MMM-yyyy'))
  }

  let colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
  ]

  return (
    <div className="my-28">
      <h2 className="font-sans text-3xl font-bold leading-6 text-accent-500">
        Upcoming Shows
      </h2>
      <div className="my-5 border-y border-accent-900 py-5 lg:grid lg:grid-cols-12 lg:gap-x-16">
        <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
          <div className="flex items-center text-gray-900">
            <button
              onClick={previousMonth}
              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-accent-500 hover:text-accent-600"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex flex-auto flex-col items-center justify-center text-center font-sans text-accent-500">
              <span className="m-0 text-sm leading-tight">
                {format(firstDayCurrentMonth, 'yyyy')}
              </span>
              <span className="text-2xl font-bold leading-tight">
                {format(firstDayCurrentMonth, 'MMMM')}
              </span>
            </div>
            <button
              onClick={nextMonth}
              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-accent-500 hover:text-accent-600"
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 grid grid-cols-7 font-sans text-xs font-bold leading-6 text-accent-500">
            <div>SUN</div>
            <div>MON</div>
            <div>TUE</div>
            <div>WED</div>
            <div>THU</div>
            <div>FRI</div>
            <div>SAT</div>
          </div>
          <div className="relative isolate mt-2 grid grid-cols-7 gap-0.5 overflow-hidden rounded-lg bg-accent-700 text-sm shadow ring-2 ring-accent-700">
            {days.map((day, dayIdx) => (
              <button
                key={day.toString()}
                onClick={() => setSelectedDay(day)}
                type="button"
                className={classNames(
                  'aspect-square bg-siteBackground py-1.5 text-accent-600 hover:bg-accent-900 focus:z-10',
                  isEqual(day, selectedDay) &&
                    'bg-accent-500/10 text-accent-600',
                  !isEqual(day, selectedDay) &&
                    !isSameMonth(day, firstDayCurrentMonth) &&
                    !isToday(day) &&
                    'text-accent-800',
                  dayIdx === 0 && colStartClasses[getDay(day)]
                )}
              >
                <time
                  dateTime={format(day, 'yyyy-MM-dd')}
                  className={classNames(
                    'mx-auto flex h-8 w-8 items-center justify-center rounded-full font-sans text-xl font-bold',
                    isToday(day) && 'bg-accent-600 text-siteBackground'
                  )}
                >
                  {format(day, 'd')}
                </time>
              </button>
            ))}
            <div className="pointer-events-none absolute right-0 top-0 isolate -z-10 grid h-full w-full grid-cols-7 gap-0.5 overflow-hidden rounded-lg bg-accent-700">
              {filler.map((item) => (
                <div
                  key={item}
                  className="pointer-events-none aspect-square bg-siteBackground py-1.5 focus:z-10"
                ></div>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="mt-8 w-full rounded-full border-2 border-accent-500 px-12 py-5 text-center font-sans text-sm font-bold uppercase text-accent-500 hover:bg-accent-500 hover:text-siteBackground"
          >
            Contact us for booking info
          </button>
        </div>
        <UpcomingShows />
      </div>
    </div>
  )
}

export function UpcomingShows() {
  return (
    <ol className="mt-4 max-h-[500px] divide-y divide-accent-900 overflow-scroll text-sm leading-6 lg:col-span-7 xl:col-span-8">
      {shows.map((meeting) => (
        <li key={meeting.id} className="relative flex space-x-6 py-6 xl:static">
          <div className="flex-auto">
            <h3 className="pr-10 font-sans text-2xl font-bold text-gray-100 xl:pr-0">
              {meeting.name}
            </h3>
            <dl className="mt-2 flex flex-col font-sans text-lg leading-tight text-accent-500">
              <div className="flex items-start">
                <dt className="mt-0.5">
                  <span className="sr-only">Date</span>
                </dt>
                <dd>
                  <time dateTime={meeting.datetime}>
                    {meeting.date} at {meeting.time}
                  </time>
                </dd>
              </div>
              <div className="mt-2 flex items-start">
                <dt className="mt-0.5">
                  <span className="sr-only">Location</span>
                </dt>
                <dd>{meeting.location}</dd>
              </div>
            </dl>
          </div>
          <Image
            src={meeting.imageUrl}
            alt=""
            width="120"
            height="120"
            className=" aspect-square flex-none border border-accent-500 object-cover mix-blend-lighten"
          />
        </li>
      ))}
    </ol>
  )
}
