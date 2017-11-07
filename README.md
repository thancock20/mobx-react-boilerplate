## thancock20-mobx-react-boilerplate

This project is originally cloned from [the official mobx-react-boilerplate](https://github.com/mobxjs/mobx-react-boilerplate).

It:
* Adds `eslint` and `prettier-eslint` to keep code automatically formatted on save (I use Atom and it's packages).
* Adds `bootstrap` and `reactstrap` for quick prototyping.
* Upgrades `react` to v16.
* Switches from `babel-preset-2015` to `babel-preset-env`.
* Sets `useStrict(true)` so the `mobx` store can only be mutated by `actions`.
* Uses `Provider` and `inject` from `mobx-react` to add the `mobx` store  to `react`'s context.
* Adds `DOCTYPE` and `meta` tags to `index.html`.
* Changes the example project from a todo app to a simple counter.

### Run the example

```
npm install
npm start
```

Browser should open automatically. Otherwise, navigate to the URL reported in the terminal
