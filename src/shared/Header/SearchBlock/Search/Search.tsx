import React from "react";
import { SearchIcon } from "../../../icons/searchIcon";
import styles from "./search.css"

export function Search() {
    return (
        <div className={styles.searchBox}>
            <SearchIcon />
            <input type="text" placeholder="Поиск" className={styles.searchInput}>
            </input>
        </div>
    )
}