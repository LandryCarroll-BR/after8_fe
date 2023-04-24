import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export function NavLinks({ links }) {
  let [hoveredIndex, setHoveredIndex] = useState(null)

  return links?.map((link, index) => (
    <Link
      key={link.label}
      href={link.url}
      className="relative -mx-3 -my-2 rounded-lg px-4 py-3 font-sans text-sm font-bold uppercase  text-accent-500 transition-colors delay-150 hover:text-siteBackground hover:delay-[0ms]"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-full bg-accent-500"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{link.label}</span>
    </Link>
  ))
}
