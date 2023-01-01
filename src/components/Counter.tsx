import { createSignal } from 'solid-js'

export function Counter() {
  const [count, setCount] = createSignal(0)
  return (
    <button
      onClick={() => setCount(count() + 1)}
      style={{
        display: 'inline-flex',
        'border-radius': '0.3rem',
        'align-items': 'center',
        'justify-content': 'center',
        padding: '10px',
        'border-color': 'gray',
      }}
    >
      Clicked {count()} time{count() > 1 ? 's' : ''}
    </button>
  )
}
