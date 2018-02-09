# Promisify setState

A HOC to promisify [React.Component](https://reactjs.org/docs/glossary.html#components)'s `setState` method.

```jsx
import React from 'react';
import promisifySetState from 'promisify-setstate';

class Panel extends React.Component {
  onIconClick() {
    this.setState({ panelClicked: true })
      .then(() => {
        // do something awesome here... ;)
      })
      .catch(() => {
        // oops :P
      });
  }
  render() {
    return (
      <Icon onClick={this.onIconClick}/>;
    )
  }
}

export default promisifySetState(Panel);
```
