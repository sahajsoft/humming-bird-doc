The infra for this project is in the `infra/` folder. Github connects with AWS through OIDC. I have run the `infra/aws-oidc manually`. You can run it from a pipeline.
However, that is the basic setup needed for the rest of the project to work.

`infra/project-infra` creates an amplify app and links it to the github repo (By linking, it listens to commits and deploys).

The site is built using Docusaurus (which uses react).

# hummingbird-doc
Documentation for humming:bird project, Using Docusaurus. This is hosted on AWS Amplify

Docs for running the site:
# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.