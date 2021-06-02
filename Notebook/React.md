## React

#### Online code playground

[CodePen](https://reactjs.org/redirect-to-codepen/hello-world)
[CodeSandbox](https://codesandbox.io/s/new)

#### A re-introduction to JavaScript (JS tutorial)

[You will fell more confident learning React]()

#### Tips

* Use Date.now() as a temp non-repeated id.

* 判断提前，and just use `return` :
```
handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
        return;
    }
    ...
}
```

* React is pretty flexible but it has a single strict rule:
```
All react components must act like pure functions with respect to their props.
```