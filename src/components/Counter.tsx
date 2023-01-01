import { createSignal } from 'solid-js'

export function Counter() {
  const [count, setCount] = createSignal(0)
  return (
    <button onClick={() => setCount(count() + 1)}>
      Clicked {count()} time{count() > 1 ? 's' : ''}
    </button>
  )
}
