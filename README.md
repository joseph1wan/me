# Portfolio

## Development

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Run GH Actions locally. You must install these dependencies:
- [act](https://github.com/nektos/act): `brew install act`
- [GitHub CLI](https://www.google.com/search?client=safari&rls=en&q=gh+clie&ie=UTF-8&oe=UTF-8): `brew install gh`

Actions for this repo require these secrets set in env variables:
- `SSH_PRIVATE_KEY`: A private key matching a deploy key set in the repo
- `GH_USERNAME`: GitHub username for commits
- `GH_EMAIL`: GitHub email for commits

### `npm run deploy`

Builds the app for production to the `build` folder and then deploys the app
using the `gh-pages` npm package.

# References
[Action for setting the `ssh-agent` with a private key](https://github.com/webfactory/ssh-agent)

