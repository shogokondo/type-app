import { useRouter } from 'next/router'
import { Contents } from "@/components/data";
import styles from "@/styles/PlayGame.module.css";
import React, { useEffect, useState } from 'react';
import MyHeader from '@/components/MyHeader';


export default function PlayGame() {
  const router = useRouter()
  const [content,setContent] = useState(null)

  const [isStart,setIsStart] = useState(false)
  const [isKeyFinish,setIsKeyFinish] = useState(false)
  const [currentText,setCurrentText] = useState(0)
  const [currentChara,setCurrentChara] = useState(0)
  const [count,setCount] = useState(null)
  const [isViewResult,setIsViewResult] = useState(false)
  const [startTime,setStartTime] = useState(null)
  const [isViewExplanation,setisViewExplanation] = useState(false)

  // const [badPlay] = useSound(badAudio);

  useEffect(()=>{
    // 前ページからクエリを取得する（取得するまではcontentがnull）
    if(router.isReady){
      const {id,sectionId} = router.query
      const tmp = Contents
      .find((item)=>(item.id==sectionId))
      .sections
      .find((item)=>(item.secId==id))

      setContent(tmp)
    }
  },[router.isReady])

  // キー入力を監視するイベントリスナーを登録
  useEffect(() => {
    const handleKeyDown = (event) => {
      const badSound = document.getElementById("badSound")
      const correctSound = document.getElementById("correctSound")
      const questionStartSound = document.getElementById("questionStartSound")
      // 文字の入力に関する処理
      if((isStart && content.question[currentText].main[currentChara] === event.key )|| (event.key === "Enter" && content.question[currentText].main[currentChara]==="\n")){
        setCurrentChara((prev) => {

          if(prev+1 === content.question[currentText].main.length){
            playSound(questionStartSound)
            setIsKeyFinish(true)
            // setCurrentText(prev => prev+1)
          }
          // badPlay()
          playSound(correctSound)
          return prev+1
        })
      }else if(currentChara+1 > content.question[currentText].main.length && event.key === content.question[currentText].answer){
        if(currentText+1 >= content.question.length){
          setIsViewResult(true)
        }else{
          setIsKeyFinish(false)
          setCurrentChara(0)
          setCurrentText(prev => prev+1)
        }
      }else if(
        isStart &&
        event.key.length === 1 &&  // 1文字のキーであるか
        !event.ctrlKey &&          // コントロールキーが押されていないか
        !event.altKey &&           // Altキーが押されていないか
        !event.metaKey &&          // メタキー（WindowsキーまたはCommandキー）が押されていないか
        event.key !== "Shift" &&   // シフトキーが押されていないか
        event.key !== "Control" && // コントロールキーが押されていないか
        event.key !== "Alt" &&     // Altキーが押されていないか
        event.key !== "Meta" &&    // メタキー（WindowsキーまたはCommandキー）が押されていないか
        event.key !== "Enter"
      ){
        playSound(badSound)
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentChara,content,isStart]);

  function gameCount(){
    setCount(3)
    setTimeout(()=>setCount(2),1000)
    setTimeout(()=>setCount(1),2000)
    setTimeout(()=>{
      gameStart()
      let tmp = new Date()
      setStartTime(tmp)
    },3000)
  }
  function gameStart(){
    setIsStart(true)
  }
  function playSound(element){
    element.pause()
    element.currentTime = 0;
    element.play()
  }

  function switchView(){
    if(content && !isStart){
      // スタートボタン画面
      return(<>
        <h1 className={styles.main_h1}>{content.name}</h1>
        {count === null ? 
          (<button className={styles.startButton} onClick={gameCount}>スタート</button>)
          :(<h1 className={styles.main_h1}>{count}</h1>)}
      </>)
    }else if(isViewResult){
      // 結果画面
      let duration = new Date()-startTime
      const seconds = Math.floor(duration / 1000) % 60;
      const minutes = Math.floor(duration / (1000 * 60)) % 60;
      return (
      <table>
        <tr><td>入力時間</td><td>{minutes+"分"+seconds+"秒"}</td></tr>
      </table>)
    }else if(content && isStart){
      //ゲーム画面
      return (<>
        <h1 className={styles.main_question}>
          {content.question[currentText]
            .main.split(" ").join("␣").split("\n")
            .map((item,index)=>(<React.Fragment key={index}>{">"+item}<br/></React.Fragment>))}
        </h1>
        <h1 className={styles.keyInput}>
          {content.question[currentText]
            .main.split(" ").join("␣").slice(0, currentChara).split("\n")
            .map((item,index)=>(<React.Fragment key={index}>
              <span className={styles.yellowBack}>{">"+item}</span>
              <br/>
              </React.Fragment>))}
        </h1>
        {isViewExplanation ? 
        (<div className={styles.explanation}>
          {content.question[currentText].explanation.split("\n").map((item,index)=>(<div key={index}>{item}</div>))}
          <button onClick={()=>{setisViewExplanation(false)}} className={styles.ok_button}>
            OK
          </button>
        </div>)
        :(<button className={styles.explanation_button} onClick={()=>{setisViewExplanation(true)}}>解説</button>)}
        {isKeyFinish ? (
          <div className={styles.answerArea}>
            <h2 className={styles.answerPrompt}>{content.question[currentText].prompt}</h2>
            <div className={styles.answerContainer}>
              {content.question[currentText].isImg ? 
              (<>{content.question[currentText].options.map((item,index)=>(<button key={index} className={styles.answerOptions}>{item.title}.　<img src={item.text}></img></button>))}</>):
              (<>{content.question[currentText].options.map((item,index)=>(<button key={index} className={styles.answerOptions}>{item.title}.　{item.text}</button>))}</>)}
            </div>
          </div>
        ):(<></>)}
      </>)
    }else{
      // 何も表示しない
      return (<></>)
    }
  }
  return (<>
    <main>
      <MyHeader/>
      <audio src="/sounds/不正解.mp3" preload='auto' id="badSound"></audio>
      <audio src="/sounds/正解.mp3" preload='auto' id="correctSound"></audio>
      <audio src="/sounds/問題出題.mp3" preload='auto' id="questionStartSound"></audio>
      {switchView()}
    </main>
  </>)
}