# So, you want to create your fullstack app ?

## 1. Let's create the server and client folder

- `mkdir <name-of-your-app>`
- `cd <name-of-your-app>`

Now we are going to need to create the client and the server.
The server and the client should have a **different** `git` repository, this is important !

---

### Server, 2 choices:

No matter which choice you make, you will need to create a `git` repository for the **_server_**

> ### Using express generator:

    npx express-generator --no-view server

You will need to configure the package.json (Add the dev script). Create your connection to the DB, your `.env`, pretty much all the basic configuration

> ### Using IronLauncher

    npx ironlauncher@latest --json

You can add the `--auth` flag to setup basic authentification.

---

### Client, 2 choices:

No matter which choice you make, you will need to create a `git` repository for the **_client_**

> ### Using Create-React-App:

    npx create-react-app <name-of-your-app>

You will have the base CRA app, you can add a `.env` file, all the `.env` variables should begin with `REACT_APP_...`

> ### Using Vite:

    npm init vite@latest <name-of-your-app>

You will have the blazingly fast Vite app, you will be able to use the `.env` using `VITE_APP...` notation.

---

---

# C-C-C-COMBO

---

> ### Power of the fullstack:

    npx ironlauncher@latest <name-of-your-app> --fs

You might gave guessed, `--fs` stands for FullStack, that's you, one command, fullstack, ez-pz.

> If you don't really like using flags, well you're in luck !
>
> You can use the ironlauncher cli interface and be guided though the creation of your app.
>
> >     npx ironlauncher@latest <name-of-your-app>
> >
> > &nbsp;
