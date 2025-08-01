## Minitroopers

This is the repository for Minitroopers !

[Roadmap](https://gitlab.com/eternaltwin/minitroopers/minitroopers/-/wikis/Roadmap)

## Frontend

> Made with [Angular 20](https://angular.dev/) and [TailwindCSS](https://tailwindcss.com/).

## Backend

> Made with [Node.js](https://nodejs.org/en/), [ExpressJS](https://expressjs.com/), [Prisma](https://prisma.io/), written in [Typescript](https://www.typescriptlang.org/).

## Contributing
```

### Manual setup

- Fork this project

- Make sure your NodeJS version are up to date (v22.1x.x)

- Setup your local Postgres databases (minitroopers + [eternaltwin](https://gitlab.com/eternaltwin/eternaltwin/-/blob/master/docs/db.md))

- Copy `.env.sample` to `.env` and adapt the variables

- Copy `eternaltwin.toml.example` to `eternaltwin.toml` and adapt the variables

- Install dependencies: `npm install`

- Run db migration with `npm run prisma` (additional for windows only : then manually copy content from /prisma/package.reference.json to /prisma/package.json)

- Start etwin local `npm run eternaltwin:start`

- Start project `turbo run dev`

- Commit and push your changes

- Create a pull request to merge your fork into `main`

## File Structure

```
├── apps                    
│       ├── client              # Frontend Angular
│       └── server              # Backend ExpressJS
│  
├── packages                
│       ├── prisma              # Prisma types definitions for both front and back end
│       └── shared              # Shared resources for both front and back end
│   
└── node_modules            # Node modules

```
