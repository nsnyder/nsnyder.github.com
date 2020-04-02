# www.snydern.com

[Nathan Snyder's website](www.snydern.com) is built using:
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

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

