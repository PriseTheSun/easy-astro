"use client"

import React, {
  useEffect,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
} from "react"
import { AnimatePresence, motion } from "framer-motion"
import type { MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations: MotionProps = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  }

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  )
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode
  delay?: number
  className?: string
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 1000, ...props }: AnimatedListProps) => {
    const [index, setIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children]
    )

    useEffect(() => {
      if (isHovered) return

      const timeout = setTimeout(() => {
        setIndex((prevIndex) =>
          prevIndex < childrenArray.length - 1 ? prevIndex + 1 : 0
        )
      }, delay)

      return () => clearTimeout(timeout)
    }, [index, isHovered, delay, childrenArray.length])

    const itemsToShow = useMemo(() => {
      return childrenArray.slice(0, index + 1).reverse()
    }, [index, childrenArray])

    return (
      <div
        className={cn(`flex flex-col items-stretch gap-4`, className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as React.ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    )
  }
)

AnimatedList.displayName = "AnimatedList"
