import { useState, useEffect } from 'react'
import img0 from './svg/0.svg'
import img1 from './svg/1.svg'
import img2 from './svg/2.svg'
import img3 from './svg/3.svg'
import img4 from './svg/4.svg'
import img5 from './svg/5.svg'
import img6 from './svg/6.svg'
import img7 from './svg/7.svg'
import img8 from './svg/8.svg'

function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8]

const enToRu = {
  q: 'й',
  w: 'ц',
  e: 'у',
  r: 'к',
  t: 'е',
  y: 'н',
  u: 'г',
  i: 'ш',
  o: 'щ',
  p: 'з',
  '[': 'х',
  ']': 'ъ',
  a: 'ф',
  s: 'ы',
  d: 'в',
  f: 'а',
  g: 'п',
  h: 'р',
  j: 'о',
  k: 'л',
  l: 'д',
  ';': 'ж',
  "'": 'э',
  z: 'я',
  x: 'ч',
  c: 'с',
  v: 'м',
  b: 'и',
  n: 'т',
  m: 'ь',
  ',': 'б',
  '.': 'ю',
  '`': 'ё',
}

const randomProperty = function (obj) {
  const keys = Object.keys(obj)
  return obj[keys[(keys.length * Math.random()) << 0]]
}

function Clicks() {
  const [letter, setLetter] = useState('')
  const [img, setImg] = useState(1)
  let count = 0

  useEffect(() => {
    if (!(letter < 10)) setImg(Math.floor(Math.random() * images.length))
  })

  useEffect(() => {
    const onKeypress = (e) => {
      let l = e.key
      if (l > 0) count = l
      if (l === 'Enter') l = randomProperty(enToRu)
      if (
        l === 'ContextMenu' ||
        l === ' ' ||
        l === 'Backspace' ||
        l === '§' ||
        l === '>'
      ) {
        ++count
        if (count > 40) count = 0
        setLetter(count)
      } else {
        if (l.toLowerCase() in enToRu) {
          setLetter(enToRu[l].toUpperCase())
        } else {
          setLetter(l.toUpperCase())
        }
      }
    }

    document.addEventListener('keypress', onKeypress)

    return () => {
      document.removeEventListener('keypress', onKeypress)
    }
  }, [])

  const handleClick = () => {
    setLetter(Math.floor(Math.random() * 99))
  }

  return (
    <div
      onClick={(e) => handleClick(e)}
      className="ch1"
      style={{ borderColor: getRandomColor() }}
    >
      <h1>{letter}</h1>
      {letter < 10 && (
        <div className="flex">
          {new Array(+letter).fill(0).map((_, i) => {
            return (
              <div
                key={i}
                className="item"
                style={{ backgroundImage: `url(${images[img]})` }}
              ></div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Clicks
