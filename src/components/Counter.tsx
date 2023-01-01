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
