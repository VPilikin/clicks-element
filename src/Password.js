import { useEffect, useState } from 'react'
import { Container, Pagination } from 'react-bootstrap'
import { useResize } from './utilites/useResize'

function Password() {
  const [num, setNum] = useState([])
  const [result, setResult] = useState([])
  const numLength = useResize().width > 800 ? 10 ** 10 : 10 ** 5

  useEffect(() => {
    setNum(() => getRandomNumber(numLength))
    const onKeypress = (e) => {
      let l = e.key
      if (l >= 0) {
        setResult((result) => [...result, l])
      }
      if (
        l === 'ContextMenu' ||
        l === ' ' ||
        l === 'Backspace' ||
        l === '§' ||
        l === '>' ||
        l === 'Enter'
      ) {
        setNum(() => getRandomNumber(numLength))
        setResult([])
      }
    }

    document.addEventListener('keypress', onKeypress)

    return () => {
      document.removeEventListener('keypress', onKeypress)
    }
  }, [])

  const validate = result.map((el, i) => (el == num[i] ? true : false))

  const getRandomNumber = (n) => {
    const random = Math.floor(Math.random() * n)
      .toString()
      .split('')
    while (random.length < 4) {
      random.unshift('0')
    }
    return random
  }

  return (
    <Container className="mt-5 d-flex flex-column align-items-center ">
      <Pagination size="lg">
        {num.map((el, i) => (
          <Pagination.Item
            key={i}
            className={`big ${
              validate[i] ? 'green' : validate[i] === false ? 'red' : ''
            }`}
          >
            {el}
          </Pagination.Item>
        ))}
      </Pagination>
      <Container
        className="mt-5 d-flex flex-column align-items-center d-sm-none"
        fluid
      >
        <Pagination size="lg">
          {[1, 2, 3].map((el, i) => (
            <Pagination.Item
              onClick={() => {
                setResult((result) => [...result, el])
              }}
              key={i + ' ' + el}
              className={`big tel-keys`}
            >
              {el}
            </Pagination.Item>
          ))}
        </Pagination>
        <Pagination size="lg">
          {[4, 5, 6].map((el, i) => (
            <Pagination.Item
              onClick={() => {
                setResult((result) => [...result, el])
              }}
              key={i + ' ' + el}
              className={`big tel-keys`}
            >
              {el}
            </Pagination.Item>
          ))}
        </Pagination>
        <Pagination size="lg">
          {[7, 8, 9].map((el, i) => (
            <Pagination.Item
              onClick={() => {
                setResult((result) => [...result, el])
              }}
              key={i + ' ' + el}
              className={`big tel-keys`}
            >
              {el}
            </Pagination.Item>
          ))}
        </Pagination>
        <Pagination size="lg">
          {['^', 0, '^'].map((el, i) => (
            <Pagination.Item
              onClick={() => {
                if (el == 0) {
                  setResult((result) => [...result, el])
                } else {
                  setNum(() => getRandomNumber(numLength))
                  setResult([])
                }
              }}
              key={i + ' ' + el}
              className={`big tel-keys`}
            >
              {el}
            </Pagination.Item>
          ))}
        </Pagination>
      </Container>
    </Container>
  )
}

export default Password
