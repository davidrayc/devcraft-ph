# Inventory app

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Development Setup (Backend)

0. Set up environment variables using the example provided. Make any changes to `.env` as needed.

```
cp .env.example .env
```

1. Install dependencies.

```
pnpm install
```

2. Set up the database.

Install PostgreSQL locally and make sure it's running.

Create the database. Make sure the database name is as specified in `.env` above.

Unix/Linux:
```
createdb devcraftph
```

3. Push migrations to create the database structure.

```
pnpm drizzle-kit push:pg
```

Note: if you make changes to the schema, you will need to regenerate migrations and push again.

```
# If you've made schema changes
pnpm drizzle-kit generate:pg
pnpm drizzle-kit push:pg
```

4. Load seed data for testing (optional).

Unix/Linux:
```
psql devcraftph < db/seeds.sql
```

5. Run the dev server

```
pnpm dev
```

6. Test API

At this point you should now be able to query the API. For example, using `curl`:

```
$ curl http://localhost:3000/api/v1/items/1
{"id":1,"code":"WX4D2","name":"Lava lamp","ageing":"2024-03-17","description":"Retro lighting acccessory","imagePath":"path/to/lava-lamp.jpg","auditHistories":[{"id":1,"userId":1,"itemId":1,"user":{"id":1,"employeeId":"GX0001","firstName":"Bob","lastName":"Builder","email":"bob@builders.ph"}}]}
```

7. Start hacking!

Check `app/api/v1/items/[id]/route.ts` for an example API implementation.

8. Linting

Make sure to run the linter if you make changes, e.g.:

```
pnpm eslint . --fix
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
