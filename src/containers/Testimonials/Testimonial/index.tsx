import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props {
  person: ReactNode;
  testimonial: ReactNode;
}

export function Testimonial({
 person, testimonial,
}: Props) {
 return (
   <section className={styles.testimonialSection} itemScope itemType="http://schema.org/Review">
    <p className={styles.testimonial} itemProp="reviewBody">{testimonial}</p>
    <p className={styles.person}>{person}</p>
    <meta itemProp="datePublished" content="2023-10-12" />
   </section>
 );
}
