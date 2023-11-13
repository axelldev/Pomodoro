export interface Timer {
  seconds: number
  mode: "work" | "break" | "longBreak"
  counter: number
  paused: boolean
}