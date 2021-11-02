# How to Cancel Request In React

in main page (app.tsx) try to switch component `test` and `fix`

- `Test` component is not handle canceling request might be a error when component unmounted
- `Fix` component is handle canceling request by using `AbortController` see below

---

use [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)(browser support) for cannel request

## Testing on http client lib and standard node-fetch

`fetch` request can been canceled

adding `single` opts in fetch

```typescript
const rawData = await fetch("https://jsonplaceholder.typicode.com/todos/", {
  signal: controller.signal,
});
const data = await rawData.json();
```

`axios` request can been canceled

adding `single` opts in fetch

```typescript
const data = await axios.get("https://jsonplaceholder.typicode.com/todos", {
  signal: controller.signal,
});
```

`ky` might be a bug ??

refs

- [from doc](https://github.com/sindresorhus/ky#cancellation)
- [issue](https://github.com/sindresorhus/ky/issues/390)

```typescript
const data = await ky
  .get("https://jsonplaceholder.typicode.com/todos", {
    signal: controller.signal,
  })
  .json(); // not working as expected
```

see example in react useEffect [here](https://github.com/jungai/cancel-request-in-react/blob/master/src/components/Fix.tsx)