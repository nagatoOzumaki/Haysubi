---
title: 'article6'
description: 'Well... MDX is more or less like the markdown files we always see in ...'
date: 'August 25/2022'
author: 'adil'
cover_image: 'https://ai.github.io/size-limit/logo.svg'
---

# Redux

Similarly, this "expensive" logic will re-run after every dispatched action. Not only will it probably create new references, but it's work that doesn't need to be done unless state.data actually changes.

Because of this, we need a way to write optimized selectors that can avoid recalculating results if the same inputs are passed in. This is where the idea of memoization comes in.

Memoization is a form of caching. It involves tracking inputs to a function, and storing the inputs and the results for later reference. If a function is called with the same inputs as before, the function can skip doing the actual work, and return the same result it generated the last time it received those input values. This optimizes performance by only doing work if inputs have changed, and consistently returning the same result references if the inputs are the same.

Next, we'll look at some options for writing memoized selectors.

<img src="https://ai.github.io/size-limit/logo.svg" align="right"
     alt="Size Limit logo by Anton Lovchikov" width="120" height="178">

# ValidationSchema

As you can see above, validation is left up to you. Feel free to write your own validators or use a 3rd party library. At The Palmer Group, we use Yup for object schema validation. It has an API that's pretty similar to Joi and React PropTypes but is small enough for the browser and fast enough for runtime usage. Because we ❤️ Yup sooo much, Formik has a special config option / prop for Yup object schemas called validationSchema which will automatically transform Yup's validation errors into a pretty object whose keys match values and touched. This symmetry makes it easy to manage business logic around error messages.

To add Yup to your project, install it from NPM.

Copy

# Redux

Similarly, this "expensive" logic will re-run after every dispatched action. Not only will it probably create new references, but it's work that doesn't need to be done unless state.data actually changes.

Because of this, we need a way to write optimized selectors that can avoid recalculating results if the same inputs are passed in. This is where the idea of memoization comes in.

Memoization is a form of caching. It involves tracking inputs to a function, and storing the inputs and the results for later reference. If a function is called with the same inputs as before, the function can skip doing the actual work, and return the same result it generated the last time it received those input values. This optimizes performance by only doing work if inputs have changed, and consistently returning the same result references if the inputs are the same.

Next, we'll look at some options for writing memoized selectors.

<img src="https://ai.github.io/size-limit/logo.svg" align="right"
     alt="Size Limit logo by Anton Lovchikov" width="120" height="178">

# ValidationSchema

As you can see above, validation is left up to you. Feel free to write your own validators or use a 3rd party library. At The Palmer Group, we use Yup for object schema validation. It has an API that's pretty similar to Joi and React PropTypes but is small enough for the browser and fast enough for runtime usage. Because we ❤️ Yup sooo much, Formik has a special config option / prop for Yup object schemas called validationSchema which will automatically transform Yup's validation errors into a pretty object whose keys match values and touched. This symmetry makes it easy to manage business logic around error messages.

To add Yup to your project, install it from NPM.

Copy
