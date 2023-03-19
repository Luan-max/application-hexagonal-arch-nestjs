# Description

Application in NestJS, using a Hexagonal Architecture.

- [Archictecure in whimsical](https://whimsical.com/arquitetura-hexagonal-nestjs-Ca7VDnWYUiyBxPHQV8VaoM)

# What is Hexagonal Architecture? / Port adapter

- [Hexagonal architecture](https://reflectoring.io/spring-hexagonal/)

![Hexagonal](https://camo.githubusercontent.com/e0ed1dc9373bdcea57bb357cf01c292c6c4ef5dd71be1d92d591a754e2691fac/68747470733a2f2f6465762d746f2d75706c6f6164732e73332e616d617a6f6e6177732e636f6d2f75706c6f6164732f61727469636c65732f61316c75703065776a34396474753238713464352e706e67)

# Explanation and Example of Port-Adapter

![Example](https://camo.githubusercontent.com/d10be249e4db1ec177c69645d5b082a134aa18c87b07d85c52b82a384696e53f/68747470733a2f2f6465762d746f2d75706c6f6164732e73332e616d617a6f6e6177732e636f6d2f75706c6f6164732f61727469636c65732f6b733868633936676f33377136717463696971752e706e67)


# Ports
## Inbound/Input/Driving Ports: 
  An input port (driving port) lets the application core to expose the functionality to the outside of the world.

## Outbound/Output Ports / Driven Ports: 
  A type of interface that is used by the application core to reach things outside of itself

  - like getting some data from a database
  - consume api from other service

# Adapters

## Driving / Primary / Input Adapter
  An adapter to use the implementation of the driving/input port. It could be a RESTful API controller, a MVC web controller, or a console app.

 - TicketController use TicketService from domain

## Driven / Secondary / Output Adapter
  An adapter to implement the driven/outbound port, It could be used to implement a database, a queue, a messaging system, etc.

 - TicketInMemory implement the outbound port
  It would be injected into the TicketService which is the implementation of the inbound port and the core business logic.
The injection itself is handled by nestjs in ticket.module.ts
    

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

## References

[NestJS Clean Code Using Hexagonal Architecture ](https://towardsdev.com/nest-js-clean-code-using-hexagonal-architecture-3442a37a6e8e)

