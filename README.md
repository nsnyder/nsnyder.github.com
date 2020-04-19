# www.snydern.com

[Nathan Snyder's website](https://www.snydern.com) is built using:
- Vue
- TailwindCSS
- [Simple Icons](https://simpleicons.org)

To make life easier in PHPStorm and other IntelliJ IDEs,
run:

```
mkdir .util
npx tailwind build src/styles/main.css -o .util/output.css
# For convenience, the above has been aliased to:
npm run autocomplete
```

PHPStorm should pickup the file and autocomplete classes for you.
(Even if you're running an old version like me 😅)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

You may also choose to run `vue ui` or `npm run vue-ui` to have a nicer interface.

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Deployment

Currently, the site will automatically be built when anything is merged
or pushed to the `staging` branch.

The process was taken from [this tutorial](https://dev.to/rolanddoda/deploy-to-github-pages-like-a-pro-with-github-actions-4hdg).
All the magic happens in `/scripts/github-deploy.js` and then in `/.github/workflows/github-deploy.yml`.

## Editors

I've chosen to exclude any editor specific files from the git directory,
but here a few setups that may be beneficial.

### VSCode

For the Tailwind files to be linted properly, I'd suggest following
[this tutorial](https://www.meidev.co/blog/visual-studio-code-css-linting-with-tailwind/).

Among the plugins you may want to install are:
- Vetur, by Pine Wu (for Vue)
- Tailwind CSS Intellisense, by Brad Cornes
- Headwind, by Ryan Heybourn (for opinionated, consistent class sorting)
