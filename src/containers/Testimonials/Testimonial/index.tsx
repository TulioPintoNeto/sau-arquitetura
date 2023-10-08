import React from 'react';
import styles from './styles.module.scss';

interface Props {
  person: string;
  testimonial: string;
}

export function Testimonial({
 person, testimonial,
}: Props) {
 return (
   <section className={styles.testimonialSection}>
    <p className={styles.testimonial}>{testimonial}</p>
    <p className={styles.person}>{person}</p>
   </section>
 );
}
