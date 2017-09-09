
**Programming assignment for the [Udacity React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019) program.**

# Readable

> This project is built with React, Redux and React Router.  This app, users are able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users are also be able to edit and delete posts and comments.

 
---




## API

This applications consumes data from an API designed by Udacity specifically for the assignment, which can be found on [Udacity's GitHub](https://github.com/udacity/reactnd-project-readable-starter).
A copy of their repository is present here (on `server/` folder) so both could be deployed together.

---

## Installation

Install all necessary modules to run the current project.

```bash
$ git clone https://github.com/fernandobrito/reactnd-project-readable
$ cd reactnd-project-readable/
$ npm install
$ cd server/
$ npm install
```

---

## Development

First, start the API backend. It will be served on `http://localhost:5001/api/`:

```bash
$ cd reactnd-project-readable/server/
$ npm start
```

Then, go back to the root of the project and run the development server in another terminal. 
The app will be served with live reloading on `http://localhost:3000`.

```bash
$ cd reactnd-project-readable/
$ npm start
```

**Note to reviewer:** To make deployment easier, I have modified the backend API server so routes live under a `api/` namespace.
If you use the server inside `server/` folder, it should work as expected. In case you want to use the original
server, please start the front-end server passing the API URL as a variable (like below) or update `.env.development`
with the correct API URL.

```bash
$ REACT_APP_API_SERVER=http://localhost:3000 npm start
```

---

## Build

Build the app for production to the `build` folder.

```bash
$ cd reactnd-project-readable/
$ npm run build
```
---


## Contributing

1. Fork it
2. Create your feature branch with specs (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

---
