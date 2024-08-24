# @colidy/ui-utils

A utility package for merging Tailwind CSS classes and color names.

## Installation

```bash
npm install @colidy/ui-utils
```

## Usage

```typescript
import { cn, colors, withColidyUI } from "@colidy/ui-utils";

const classes = cn("class1", "class2");
console.log(classes); // Outputs merged classes

console.log(colors); // Outputs list of color names

const tailwindConfig = {
  // your Tailwind CSS configuration
};

const mergedConfig = withColidyUI(tailwindConfig);
```

## API

### `withColidyUI(tailwindConfig: any): object`

A function to merge custom Tailwind CSS configuration with Colidy UI presets.

**Parameters:**

-   `tailwindConfig`: The base Tailwind CSS configuration object.

**Returns:**

-   A merged configuration object with extended Colidy UI themes.

### `cn(...inputs: ClassValue[]): string`

Combines and merges Tailwind CSS class names using `clsx` and `tailwind-merge`.

**Parameters:**

-   `...inputs`: List of class values to be combined.

**Returns:**

-   A string of merged class names.

### `colors: string[]`

An array of Tailwind CSS color names.

## License

MIT

```
MIT License

Copyright (c) 2024 Colidy

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
