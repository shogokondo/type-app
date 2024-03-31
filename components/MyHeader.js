import styles from "@/styles/MyHeader.module.css";
import Link from "next/link";
import UserInfo from "./UserInfo";


export default function MyHeader() {
    return (
        <Link href="/">
            <div className={styles.header}>
                <div className={styles.header_icon}>
                    Programing
                </div>
                <UserInfo></UserInfo>
            </div>
        </Link>
    );
  }
  