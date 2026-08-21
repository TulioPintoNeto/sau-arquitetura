import CN from 'classnames';
import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props {
 children: ReactNode;
 className?: string;
}

export function Row({
 children, className
}: Props) {
 return (
   <div className={CN(styles.row, className)}>
    {children}
   </div>
 );
}
