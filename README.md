# Front End Monorepo POC #

## What is monorepo?
Monorepo is a single repository holding the code of multiple projects which may or may not be related in some way.
Projects manages in Monorepo can depend on each other.
For example we can have couple applications that uses one shared library with some UI features.

## Advantages
There are couple advantages over multi repo
* You can work on multiple applications and create just one pull request.
* Reuse as much code as possible. Using Monorepo approach can reduce amount of duplicated code through multiple applications
* Development is faster as all the packages are linked together.
When you make change in one application you see the result of this change in application that depends on it.
* Collaboration across teams. Splitting work of multiple teams that works on different modules and later they could be easily combined to one.
* You can run `unit tests`, `linters` or `precommits` for each application in parallel mode.
* Easier refactoring as we don't have to adjust changes in each repository.
* In front end applications it's simplified with provided libraries like `lerna` or `yarn`.

## Disadvantages
Everything's not great, so there are some disadvantages:
* Onboarding new developers can become harder as they are confronted with huge codebase instead of smaller codebases.
* Very large Monorepos could provide some technical limitations of some source control systems.
Mist of them are not suited or that. Managing access might be hard to implement.
* Integrating a Monorepo into an existing build process is not very easy as it requires plenty of changes.
* They require more time to build or test them on cloud agents.


## Used libraries

### lerna
A tool for managing JavaScript projects with multiple packages.

### yarn
Package manager used in this monorepo, `npm` alternative

### yarn workspaces
Workspaces are a new way to setup your package architecture that’s available by default starting from Yarn 1.0. It allows you to setup multiple packages in such a way that you only need to run ``yarn install`` once to install all of them in a single pass.

### create-react-app
Official CLI used to create `React` application

### create-react-library
CLI for creating reusable, modern `React` libraries using `Rollup` and create-react-app.

### rollup
Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application.

### husky
Tool used to run pre commits.

### lint-staged
Tool combined with husky that allows to analyze(lint) just changed files.

## Getting started
Running this project locally is easy
* Let's start with installing `yarn` globally - https://yarnpkg.com/lang/en/docs/install/
* Navigate to root folder of this Monorepo and use `yarn` in command line.
All packages will be downloaded and saved to root's `node_modules`.
Yarn will also create links with packages, for example it will link `shared` package to `test-app`.
* Use `yarn start:shared` to start watch mode in library with shared components, optional.
* Open another terminal instance and use `yarn start` to start main application.
* Application is served on http://localhost:3000/ .
