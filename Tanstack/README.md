## TANSTACK QUERY

> Handle and manage data when we fetch api from server.

1. Data fetching made easy.
2. Built-in loading and Error states
3. Automatic Caching
4. Pagination and infinite Scrolling

### Installation

```ts
npm install @tanstack/react-query

```

also install `react router dom`

```ts
npm i react-router-dom
```

## QueryClient Provider

> Responsible for providing all the feature of react query / tanstack query.
> `app.tsx:`

```ts
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
```

### useQuery() hook

> To fetch the data from the server or api. Remove useState and useEffect uses. Accept 2 argument.

- queryKey
- queryFn

```ts
const { data } = useQuery({
  queryKey: ["posts"],
  queryFn: getPostsData,
});
```

We can also handle loading and error state using like this

```ts
const { data, isPending, isError, error } = useQuery({
  queryKey: ["posts"],
  queryFn: getPostsData,
});

if (isPending) return <div> Loading ....</div>;
if (isError)
  return <div> Error: {error.message || "Something went wrong!"}</div>;
```

### Add react query davtools

```ts
npm i @tanstack/react-query-devtools
```

### useQuery vs useMutation

**useQuery:** Fetches and reads data(GET requests) from an API and automatically caches the result.

**useMutation:** Used for creating, updating, or deleting data(POST, PUT, DELETE requests) and allows triggering manual side effects.

### gcTime - (Garbage Collection Time)

In TanStack Query, cached data is shown while a query is loading or refetching, and the cache updates once the request completes.

gcTime defines how long inactive queries stay in the cache before being removed. A query becomes inactive when no component uses it.

By default, inactive queries are deleted after 5 minutes. If reused before that, cached data is returned instead of refetching.

we can use gcTime Like this:

```ts
const { data, isPending, isError, error } = useQuery({
  queryKey: ["posts"],
  queryFn: getPostsData,
  `gcTime: 1000`,
});
```

### staleTime

During staleTime, the data is considered fresh, so no new API request is made.
Once staleTime expires, the data becomes stale, and a new API request is triggered when the query is used again.

`Example:`

```ts
const { data, isPending, isError, error } = useQuery({
  queryKey: ["posts"],
  queryFn: getPostsData,
  gcTime: 1000,
  `staleTime: 10000`,
});
```

### Pooling

Polling is used to automatically refetch an API at a fixed interval.
It can also be configured to run in the background, meaning the API will continue to refresh even when the app is in another browser tab.

`example:`

```ts
const { data, isPending, isError, error } = useQuery({
  queryKey: ["posts"],
  queryFn: getPostsData,
  // gcTime: 1000,
  // staleTime: 10000,
  `refetchInterval: 5000,
  refetchIntervalInBackground: true`,
});
```

### placeholderData: keepPreviousData

This option tells TanStack Query to keep showing the previous data while a new request is loading (for example, during pagination or parameter changes).
It prevents empty or flashing UI by displaying the last available data until the new data arrives.

```ts
const { data, isPending, isError, error } = useQuery({
  queryKey: ["posts", pageNumber],
  queryFn: () => fetchPostsRQ(pageNumber),
  // gcTime: 1000,
  // staleTime: 10000,
  // refetchInterval: 5000,
  // refetchIntervalInBackground: true,
  placeholderData: keepPreviousData,
});
```

## useMutation

### use mutation for delete operation

```ts
const queryClient = useQueryClient();

const deleteMutation = useMutation({
  mutationFn: (id: number) => deletePost(id),
  onSuccess: (data, id) => {
    //queryClient.invalidateQueries({ queryKey: ["posts", pageNumber] });
    //refetching the data after deletion(use for real api)

    queryClient.setQueryData(["posts", pageNumber], (curElem: any) => {
      // use for fake api
      return curElem?.filter((post: any) => post.id !== id);
    });
  },
});
```
