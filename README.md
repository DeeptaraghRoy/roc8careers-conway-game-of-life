# Conway's Game of Life

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

Live Demo Link: []()

This project is a simple Frontend application. It demonstrates the implementation of John Conway's Game of Life Algorithm. This is 1 of 2 Questions given to me as Roc8 Moonshot. The Question is as follows:

Q1. Implement Conway's Game of Life in the programming language of your choice. Here's an example: https://playgameoflife.com/

Hint: Make a 2d array of 30 x 30. Now write a function that takes in an initial state and calculates the next state based on the following rules. Every cell observes its surrounding neighbours to check whether its living area is underpopulated, overpopulated or suitable to live in. Each cell has 8 neighbours (except for the ones at the edge of the grid).

1. A dead cell will come alive if exactly 3 neighbours are living.

2. A living cell will stay alive it 2 or 3 neighbours are living.

3. Cells with less than 2 neighbours will die of underpopulation, cells with 4 or more neighbours will die of overpopulation. Build a Ul on top of it. Add a button to start/stop the game. Add a button to create a random start state or write your name in the grid.

## Setup and Installation

First, clone the repository to your local machine:

```bash
git clone https://github.com/DeeptaraghRoy/roc8careers-conway-game-of-life.git
```

## Navigate into the project directory:

```bash
cd 
```

## Install the project dependencies:

```bash
npm install
```

OR, to install while disabling protection

```bash
npm install --force
```

## To start the project in local machine:

```bash
npm run dev
```

The application should now be locally hosted on http://localhost:3000.

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

## Contributing

If you want to contribute to this project, you're always welcome! Please fork the repository and create a pull request with your changes.