## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript archetype repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Authentication functionality

All done with the `Auth` decorator, which lets you determine a list of authorized roles.

The are 3 available roles:

- Public: no role nor user needed
- User
- Admin

These can be extended by simply adding new elements to the `src/users/roles/role.enum.ts` enumeration.

```ts
@Auth(Role.Public)
@Get()
getHello(): string { return "Hello!" }
```

## Stay in touch

- Author - [Daniel Heras Quesada](https://dqnid.com)
- Twitter - [@nestframework](https://twitter.com/nestframework)
- Linkedin - [daniel-heras-quesada](https://www.linkedin.com/in/daniel-heras-quesada/)

## License

This archetype is [MIT licensed](LICENSE).
