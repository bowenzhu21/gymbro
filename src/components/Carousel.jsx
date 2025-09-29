import { useEffect, useRef, useState } from 'react'

const shots = ['public/page1.png','public/page2.png','public/page3.png','public/page4.png','public/page5.png']

export default function Carousel(){
  const [idx, setIdx] = useState(0)
  const timer = useRef(null)

  useEffect(()=>{
    timer.current = setInterval(()=> setIdx(i => (i+1)%shots.length), 3500)
    return ()=> clearInterval(timer.current)
  },[])

  return (
    <div className="panel">
      <div className="row justify-between">
        <div className="badge">App Preview</div>
        <div className="row" style={{gap:8}}>
          {shots.map((_,i)=>(
            <button key={i} onClick={()=>setIdx(i)} aria-label={`Go to slide ${i+1}`} style={{
              width:8,height:8,borderRadius:999,border:'1px solid rgba(255,255,255,0.35)',
              background: i===idx ? '#fff' : 'transparent'
            }}/>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <img src={shots[idx]} alt={`Screenshot ${idx+1}`} />
      </div>
    </div>
  )
}
