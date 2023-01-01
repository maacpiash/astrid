/*
 * Astrid = Astro + Solid
 * Copyright (C) 2023  Mohammad Abdul Ahad Chowdhury
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import { createSignal, onCleanup } from 'solid-js'

export function Timer() {
  const [time, setTime] = createSignal(0)
  const timer = setInterval(() => setTime(time() + 1), 1000)
  onCleanup(() => clearInterval(timer))

  return <h2>You've been on this page for {time()} seconds.</h2>
}
