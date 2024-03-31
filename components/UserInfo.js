import styles from "@/styles/UserInfo.module.css";
import { signInWithPopup } from "firebase/auth";
import Link from "next/link";
import {useAuthState} from "react-firebase-hooks/auth"
import { auth, provider } from "./auth";

export default function UserInfo() {
    const [user] = useAuthState(auth)
    const signInwithGoogle = () => {
        signInWithPopup(auth,provider)
    }
    const signOutwithGoogle = () => {
        auth.signOut()
    }
    return (
        <div className={styles.userInfo}>
            {user ? 
            (<>
                <h1 className={styles.userName}>{user.displayName}</h1>
                <img src={user.photoURL} className={styles.userImg}/>
                <button className={styles.loginButton} onClick={signOutwithGoogle}>ログアウト</button>
                <Link href="hello"><div className={styles.createPracticeLink}>演習の作成</div></Link>
            </>):
            (<>
                <h1 className={styles.userName}>ゲスト</h1>
                <img src="/img/guest.jpeg"className={styles.userImg}/>
                <button className={styles.loginButton} onClick={signInwithGoogle}>googleアカウントでサインイン</button>
            </>)}
        </div>
    );
  }
  