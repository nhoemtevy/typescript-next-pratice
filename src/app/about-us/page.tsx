import React from 'react'
import styles from "./AboutUs.module.css"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About us",
  description: "This is about us shop",
  keywords: ['shop', 'ecommerce', 'sell']
};
const page = () => {
  return (
    <div className={styles.heading}>
      About Page
    </div>
  )
}

export default page
