## Steps to reproduce:
1. Build all 3 `backend`, `shared` and `errors` folders
2. Go to `backend`, run `pnpm test`
3. See that `instanceof` check fails even though they were imported from the same locations. 
4. Go to `backend`, run `pnpm build` then `pnpm start`
5. See that script outputs `true`