// store

state = {
  list: [],
  user: void 0,
}

// dispatch
const dispatch = (action) => {
  // change
  listeners.forEach(l => {
    l()
  })
}

// select
const select = (fn) => fn(state)

function selector(state) {
  return state.list
}

// subscribe
const subscribe = (listener) => {
  listeners.push(listener)
}
