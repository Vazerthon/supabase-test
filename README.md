# Getting started

1. Run `yarn`
2. Run `yarn supabase:start` (will download Docker images)
3. Create a `.env.local` file in the project root

```
VITE_SUPABASE_URL={use output from console}
VITE_SUPABASE_ANON_KEY={use output from console}
```

4. Open Supabase studio (get url from console output)
5. Create a user
6. Run `yarn start`
7. Log in

# Link with Supabase

1. Run `yarn supabase login`
2. Get hosted project ref from hosted Supabase Studio
3. Run `yarn supabase link --project-ref {project ref}`
