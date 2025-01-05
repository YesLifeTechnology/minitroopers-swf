## Minitroopers

This is the repository for Minitroopers !

[Roadmap](https://gitlab.com/eternaltwin/minitroopers/minitroopers/-/wikis/Roadmap)

## Frontend

> Made with [Angular 18](https://angular.dev/) and [TailwindCSS](https://tailwindcss.com/).

## Backend

> Made with [Node.js](https://nodejs.org/en/), [ExpressJS](https://expressjs.com/), [Prisma](https://prisma.io/), written in [Typescript](https://www.typescriptlang.org/).

## Contributing

<!-- ### Automated setup (linux only)

Requires docker and docker compose (see [here](https://docs.docker.com/engine/install/))

```bash
bash <(curl -fsSL https://gitlab.com/eternaltwin/minitroopers/minitroopers/-/raw/main/setup.sh?ref_type=heads)    -->
```

### Manual setup

- Fork this project

- Make sure your NodeJS version are up to date (v22.x.x)

- Setup your local Postgres databases (minitroopers + [eternaltwin](https://gitlab.com/eternaltwin/eternaltwin/-/blob/master/docs/db.md))

- Copy `/server/.env.sample` to `/server/.env` and adapt the variables

- Copy `eternaltwin.toml.example` to `eternaltwin.toml`

- Install dependencies: `npm install`

- Run db migration with `npm run prisma` (then manually copy content from /prisma/package.reference.json to /prisma/package.json)

- Start the server, client and etwin local server with `npm run dev`

- Commit and push your changes

- Create a pull request to merge your fork into `main`

## Documentation

Every

- Component
- Method
- Callback

Should have a corresponding documentation.

## File Structure

```
├── client                  # Frontend Angular
├── prisma                  # Prisma types definitions for both front and back end
├── server                  # Backend ExpressJS
    ├── prisma              # DB
    └── src
        ├── controllers     # Controllers
        ├── utils           # Utility functions
        └── ...
└── shared                  # Shared ressourcs for both front and back end
```
