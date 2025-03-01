## Steps to reproduce:
1. Build all 3 `backend`, `shared` and `errors` folders
2. Go to `backend`, run `pnpm test`
3. See that `instanceof` check fails even though they were imported from the same locations. 

Looking at `getPrototypeOf`, there appears to be some problems in the prototype chain. I have included console logs in the test file as well.
