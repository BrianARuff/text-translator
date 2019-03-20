# text-translator# text-translator

How to use?

1. `import {TranslateText} from 'text-translator';`

2. `<TranslateText content={{"en-US": "hello world"}} />`

Note: The data you pass into the `content` prop should be an object structured like step 2 above. You should be using the official language codes as this library draws from the browsers `navigator.languages` for the users locale.
