import { writable } from 'svelte/store'

export const d3Scale = writable(1)

export const users = writable([])

export const activeUser = writable(null)
