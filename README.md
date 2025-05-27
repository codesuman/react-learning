# React + TypeScript + Vite

### Debounce : 

💡 What changes were added ?

* `searchText` stores the user-typed value (immediately responsive).

* A `useEffect` runs on `searchText` changes and:

* Starts a timer of `500ms`.

* If the user types again before `500ms`, the old timer is cleared.

* After `500ms` of no typing, it `dispatches` the real search.