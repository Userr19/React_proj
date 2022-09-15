import * as React from "react";
import styles from './header.less';
import {hot} from 'react-hot-loader/root'

function HeaderComponent() {
    console.log(styles, styles.example);
    return (
        <header className = {styles.header}>
            <h1 className={styles.example}>Hellow Reactp</h1>
            <p className = {styles.paragraph}>This is my first project on React. And that shit is works)), Again?</p>
        </header>
    )
}

export const Header = hot(HeaderComponent);