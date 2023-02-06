import React from "react";
import styles from "./login.css"

interface ILoginProps {
    onClick: () => void;
}

export function Login({ onClick }: ILoginProps) {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <p className={styles.message}>
                    <a href="https://www.reddit.com/api/v1/authorize?client_id=RBHYABoiHVhLzvS4UyVirQ&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=identity read submit" className={styles.signin}>Sign in</a> or <a href="https://www.reddit.com/api/v1/authorize?client_id=RBHYABoiHVhLzvS4UyVirQ&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=identity read submit" className={styles.signup}>SignUp</a>
                </p>
            </div>
        </div>
    )
}