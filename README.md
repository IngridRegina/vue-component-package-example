## Project description

This is an example of a vue component as an NPM package.

The component will display a message passed to the component as a prop. If the message prop is not defined, "Hello world!" will be displayed.

## Example use

first install the package with ``npm i vue-component-package-example``

import the component in your Vue file:

``import MyComponent from 'vue-component-package-example'``

then use in your template as such:

``<MyComponent message="I will be shown on the page!" />``
