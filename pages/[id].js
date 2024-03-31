import { useRouter } from 'next/router'
import { Contents } from "@/components/data";
import styles from "@/styles/Section.module.css";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MyHeader from '@/components/MyHeader';
 
export default function Section() {

    const router = useRouter()
    const [content,setContent] = useState(null)
    useEffect(()=>{
        if(router.isReady){
            setContent(Contents.find((item)=>(item.id===router.query.id)))
        }
    },[router.isReady])
  return (<>
    <main>
        <MyHeader/>
        {content ? (
            <>
                <h1 className={styles.main_h1}>{content.name}</h1>
                <div className={styles.main_container}>
                    {content.sections.map((item,index)=>(
                    <Link href={"/section/"+content.id+"/"+item.secId} key={index}>
                        <div className={styles.main_container_content} style={{backgroundColor:content.mainColor}}>{item.name}</div>
                    </Link>
                    ))}
                </div>
            </>
        ):(
            <>
                <h1 className={styles.main_h1}>コンテンツが見つかりませんでした。</h1>
                <div className={styles.main_container}>
                    <div className={styles.main_container_content} >練習一覧に戻る</div>
                </div>
            </>
        )}
    </main>
  </>)
}