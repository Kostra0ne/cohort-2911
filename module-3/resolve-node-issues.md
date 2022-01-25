# Theres seem to be some compatibility issues with some of the labs and new vrsion of Node.

### > How to fix them ?

- Go inside the cloned lab folder `cd path/to/the/lab`
- delete package-lock.json yarn.lock and node_modules with the next command:
- `rm -rf node_modules package-lock.json yarn.lock`
- Reinstall everything `npm i`
- In your `package.json` replace: `"start": "react-scripts start"` by `"start": "react-scripts --openssl-legacy-provider start"`
- `npm start` 🥳
