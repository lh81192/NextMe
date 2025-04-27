'use client'

import { motion } from 'framer-motion'
import WorkCard from './work-card'

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { filter: 'blur(20px)', opacity: 0 },
  visible: {
    filter: 'blur(0px)',
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Page() {
  return (
    <section>
      <section className="sm:px-14 sm:pt-6">
        <h1 className="mb-2 text-2xl font-medium tracking-tighter">
          -想做的事-
        </h1>
        <p className="prose prose-neutral mb-6 text-sm dark:prose-invert">
          我喜欢的一些折腾。
        </p>
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item}>
            <WorkCard
              />
            </motion.div>
          </motion.section>
        </motion.div>
      </section>
    </section>
  )
}
