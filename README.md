# React component library for Generosity Market app

> A library of React components created using `create-react-app`.

[![Build Status](https://travis-ci.org/JGordy/stalls-ui.svg?branch=master)](https://travis-ci.org/JGordy/stalls-ui)
[![npm](https://badge.fury.io/js/%40jgordy24%2Fstalls-ui.svg)](https://badge.fury.io/js/%40jgordy24%2Fstalls-ui)
[![Downloads](https://img.shields.io/npm/dw/@jgordy24/stalls-ui.svg)](https://img.shields.io/npm/dw/@jgordy24/stalls-ui)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](http://jgordy.github.io/stalls-ui/?path=/story/welcome--to-storybook)

## Installation

Run the following command:
`npm install --save @jgordy24/stalls-ui`

### Import/using component example

```jsx
import { Button } from '@jgordy24/stalls-ui'

const App = () => {

    const handleClick => (e) => {
        /* do something */
    };

    return (
        <div>
            <Button
                bsStyle='success'
                label='label-text-here'
                onClick={handleClick}
            />
        </div>
    );
}
```

```bash
More examples coming soon
```
