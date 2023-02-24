import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = () => {
  const verbs = [
    "Made",
    "Crafted",
    "Created",
    "Coded",
    "Developed",
    "Designed",
    "Engineered",
    "Fabricated",
    "Formed",
    "Programmed",
    "Produced",
    "Built",
    "Assembled",
    "Constructed",
  ]

  const adverb = [
    "care ",
    "love ",
    "passion ",
    "heart ",
    "soul ",
    "blood, sweat, and tears ",
    "desire "
  ]

  return <div className={styles.test}>
      &copy; {new Date().getFullYear()} - 
      {verbs[Math.floor(Math.random() * verbs.length)]} with {adverb[Math.floor(Math.random() * adverb.length)] }
      by <a href="https://adam-barr.me" target="_blank" rel="noopener noreferrer">Adam</a>
  </div>
}
