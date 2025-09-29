export default function Lightbox({ src, onClose }){
  if(!src) return null
  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <img className="lightbox-img" src={src} alt="screenshot" />
    </div>
  )
}
