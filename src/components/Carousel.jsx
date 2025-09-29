import { useEffect, useRef, useState } from 'react'

const shots = ['page1.png','page2.png','page3.png','page4.png','page5.png']

export default function Carousel(){
  const [idx, setIdx] = useState(0)
  const timer = useRef(null)

  useEffect(()=>{
    timer.current = setInterval(()=> setIdx(i => (i+1)%shots.length), 3500)
    return ()=> clearInterval(timer.current)
  },[])

  return (
    <div className="panel" style={{ position: 'relative', textAlign: 'center', padding: '16px' }}>
      {/* Small label */}
      <div style={{ marginBottom: '16px' }}>  {/* was 8px before */}
        <span
          style={{
            fontSize: '12px',
            fontWeight: '600',
            color: '#d1d5db',
            letterSpacing: '0.5px',
          }}
        >
          App Preview
        </span>
      </div>

      {/* Screenshot */}
      <div>
        <img
          src={shots[idx]}
          alt={`Screenshot ${idx+1}`}
          style={{ width: '100%', borderRadius: '12px' }}
        />
      </div>

      {/* Dots (rectangular pills) */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 16 }}>
        {shots.map((_,i)=>(
          <button
            key={i}
            onClick={()=>setIdx(i)}
            aria-label={`Go to slide ${i+1}`}
            style={{
              width: 20,
              height: 8,
              borderRadius: 4,
              border: '1px solid rgba(255,255,255,0.35)',
              background: i===idx ? '#fff' : 'transparent',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
    </div>
  )
}