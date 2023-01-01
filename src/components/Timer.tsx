import { createSignal, onCleanup } from 'solid-js'

export function Timer() {
  const [time, setTime] = createSignal(0)
  const timer = setInterval(() => setTime(time() + 1), 1000)
  onCleanup(() => clearInterval(timer))

  return <h2>You've been on this page for {time()} seconds.</h2>
}
