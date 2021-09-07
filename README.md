# The Jokes

A Next.js application that fetches and displays data from the public [JokeAPI](https://sv443.net/jokeapi/v2/) service provider.
Live demo available at: https://thejokes.vercel.app

## Description

The application fetches data about jokes which can customized according to their category, flagged topics or searched string value and displays the results to the frontend user.

## Installation

1. To get this project files locally on your machine, you can clone this repository by running the following command on your terminal or command line:

```bash
git clone https://github.com/cvrlnolan/thejokes
```

2. Install all the dependency packages found in the `package.json` file by running `yarn install` or `npm install` from the project root directory.

3. To start the development server of the application, run `npm run dev` or `yarn dev`. This should log some start-up application information & display the development server url: `http://localhost:3000`. Visit http://localhost:3000 to view your application.

## Usage

### General

This application was built reflecting the MVC architecture and the main dependencies(all found in the `package.json`) of the application are organised as so:

- Front-end User Interface(UI): [PrimeReact](https://primefaces.org/primereact/)
- Backend Integration: [NextJS API](https://nextjs.org/docs/api-routes/introduction) (basically [NodeJS](https://nodejs.org/))
- REST API Data Endpoint: [JokeAPI](https://sv443.net/jokeapi/v2/)

Other important services & dependency libraries of the application include:

- [axios](https://www.npmjs.com/package/axios): An http client to fetch urls and make api calls or requests within the application.
- [swr](https://swr.vercel.app/): To fetch and revalidate data on the client-side of the application while keeping the UI reactive.
- [react-transition-group](https://reactcommunity.org/react-transition-group): An animation library from which PrimeReact components use for smooth transitions.

### Directives

The application is organized from the root(`.`) as follows:

- `./page/` folder(integrated by NextJS) contains the UI Views for the application with the exception of the `./page/api/\*` sub-folder.
- `./page/api` sub-folder(integrated by NextJS) contains serverless and NodeJS backend code for the application. All of the request to the Marvel Comic API endpoint are found in this subfolder.
- `./assets/` folder contains pre-defined data selections to be used by the appliction.
- `./components/` folder contains coded UI layouts to be used through out the application.
- `./styles/` folder(integrated by NextJS) contains the global style of the application accessible by all components.
- `./public/` folder(integrated by NextJS) contains global files to be shared through the application. You can store static images here.

Absolute imports to any of these folders through the application are configured in the `jsconfig.json` file in the root.

The application's code source contains inline comments which will provide further help and guidance on how an important piece of module or component works. The code quality was tested with [JSLint](https://www.jslint.com/).

### Deployment

You may eventually want to deploy a live customized version of your app in a future instance. [Vercel](https://vercel.com/) platform is suitably built fo the deployment of NextJS application and more as they have an integrated environment to deploy directly from your own [Github Repository](https://github.com/new).

## Support

If any worries, bugs or problem arises in the future, you can create an issue, contribute or contact me via:

- [carlnolan@lootyclub.com](mailto:carlnolan@lootyclub.com)

## Roadmap

No planned schedule for this project. But might do some alternative functionality updates with time.

## License

![GitHub](https://img.shields.io/github/license/cvrlnolan/thejokes)

###

![GitHub last commit](https://img.shields.io/github/last-commit/cvrlnolan/thejokes) ![GitHub contributors](https://img.shields.io/github/contributors/cvrlnolan/thejokes) ![GitHub issues](https://img.shields.io/github/issues/cvrlnolan/thejokes) ![GitHub repo size](https://img.shields.io/github/repo-size/cvrlnolan/thejokes)

![GitHub followers](https://img.shields.io/github/followers/cvrlnolan?style=social) ![Twitter Follow](https://img.shields.io/twitter/follow/realcarlnolan?style=social)
