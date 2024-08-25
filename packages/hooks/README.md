# @colidy/hooks

This library provides a collection of custom React hooks to simplify various tasks, including form management, state management, and other utilities. Each hook is designed to be reusable and easy to integrate into your React projects.

## Table of Contents

1. [Introduction](#introduction)
2. [Hooks](#hooks)
    - [useForm](#useform)
    - [usePrevious](#useprevious)
    - [useToggle](#usetoggle)
    - [useInterval](#useinterval)
    - [useLocalStorage](#uselocalstorage)
    - [useFetch](#usefetch)
    - [useDebounce](#usedebounce)
    - [useOnClickOutside](#useonclickoutside)
    - [useHover](#usehover)
    - [useOnlineStatus](#useonlinestatus)
    - [useScrollPosition](#usescrollposition)
    - [useTimeout](#usetimeout)
    - [useDarkMode](#usedarkmode)
    - [useKeyPress](#usekeypress)
    - [useFocus](#usefocus)
    - [useMediaQuery](#useMediaQuery)
    - [useTableOfContents](#useTableOfContents)
3. [Contributing](#contributing)
4. [License](#license)

## Introduction

This library contains a set of custom React hooks that are useful for various aspects of React development. These hooks provide reusable logic for managing state, handling forms, and more.

## Hooks

### `useForm`

A custom hook for managing form state, validation, and submission. Allows you to handle form values, errors, and submission with ease.

#### Usage:

```typescript
import { useForm } from '@colidy/hooks/useForm';

const MyForm: React.FC = () => {
  const initialValues = { username: '', email: '', password: '' };

  const validate = {
    username: (value: string) => {
      if (!value) throw new Error('Username is required');
    },
    email: (value: string) => {
      if (!value) throw new Error('Email is required');
      if (!/\S+@\S+\.\S+/.test(value)) throw new Error('Email is invalid');
    },
    password: (value: string) => {
      if (!value) throw new Error('Password is required');
      if (value.length < 6) throw new Error('Password must be at least 6 characters');
    }
  };

  const { values, errors, handleChange, handleSubmit, resetForm } = useForm({
    initialValues,
    validate,
  });

  const onSubmit = () => {
    console.log(values);
    resetForm(); // Reset form after submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="username" value={values.username} onChange={handleChange} />
      {errors.username && <p>{errors.username}</p>}
      <input name="email" value={values.email} onChange={handleChange} />
      {errors.email && <p>{errors.email}</p>}
      <input name="password" type="password" value={values.password} onChange={handleChange} />
      {errors.password && <p>{errors.password}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};
```

### `usePrevious`

A hook to store the previous value of a state or prop.

#### Usage:

```typescript
import { usePrevious } from '@colidy/hooks/usePrevious';

const MyComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {previousCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

### `useToggle`

A hook to toggle between `true` and `false`.

#### Usage:

```typescript
import { useToggle } from '@colidy/hooks/useToggle';

const ToggleComponent: React.FC = () => {
  const [isToggled, toggle] = useToggle();

  return (
    <div>
      <p>{isToggled ? 'On' : 'Off'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};
```

### `useInterval`

A hook to manage intervals.

#### Usage:

```typescript
import { useInterval } from '@colidy/hooks/useInterval';

const IntervalComponent: React.FC = () => {
  useInterval(() => {
    console.log('Interval triggered');
  }, 1000);

  return <div>Check console for interval logs every second.</div>;
};
```

### `useLocalStorage`

A hook to manage state synced with `localStorage`.

#### Usage:

```typescript
import { useLocalStorage } from '@colidy/hooks/useLocalStorage';

const LocalStorageComponent: React.FC = () => {
  const [value, setValue] = useLocalStorage('myKey', 'defaultValue');

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => setValue('New Value')}>Update Value</button>
    </div>
  );
};
```

### `useFetch`

A hook to fetch data with loading and error states.

#### Usage:

```typescript
import { useFetch } from '@colidy/hooks/useFetch';

const FetchComponent: React.FC = () => {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div>Data: {JSON.stringify(data)}</div>;
};
```

### `useDebounce`

A hook to debounce a value over a specified delay.

#### Usage:

```typescript
import { useDebounce } from '@colidy/hooks/useDebounce';

const DebounceComponent: React.FC = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 500);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};
```

### `useOnClickOutside`

A hook to handle clicks outside of a specified element.

#### Usage:

```typescript
import { useOnClickOutside } from '@colidy/hooks/useOnClickOutside';

const ClickOutsideComponent: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    console.log('Clicked outside the component');
  });

  return <div ref={ref}>Click outside of this box to trigger an action.</div>;
};
```

### `useHover`

A hook to detect hover state.

#### Usage:

```typescript
import { useHover } from '@colidy/hooks/useHover';

const HoverComponent: React.FC = () => {
  const [hoverRef, isHovered] = useHover();

  return (
    <div ref={hoverRef} style={{ backgroundColor: isHovered ? 'lightblue' : 'lightgray' }}>
      Hover over me!
    </div>
  );
};
```

### `useOnlineStatus`

A hook to track online/offline status.

#### Usage:

```typescript
import { useOnlineStatus } from '@colidy/hooks/useOnlineStatus';

const OnlineStatusComponent: React.FC = () => {
  const isOnline = useOnlineStatus();

  return <p>{isOnline ? 'Online' : 'Offline'}</p>;
};
```

### `useScrollPosition`

A hook to track the scroll position of the window.

#### Usage:

```typescript
import { useScrollPosition } from '@colidy/hooks/useScrollPosition';

const ScrollPositionComponent: React.FC = () => {
  const scrollY = useScrollPosition();

  return <p>Scroll Position: {scrollY}px</p>;
};
```

### `useTimeout`

A hook to handle timeouts.

#### Usage:

```typescript
import { useTimeout } from '@colidy/hooks/useTimeout';

const TimeoutComponent: React.FC = () => {
  useTimeout(() => {
    console.log('Timeout completed');
  }, 3000);

  return <p>Check console after 3 seconds for timeout message.</p>;
};
```

### `useDarkMode`

A hook to detect dark mode preference.

#### Usage:

```typescript
import { useDarkMode } from '@colidy/hooks/useDarkMode';

const DarkModeComponent: React.FC = () => {
  const isDarkMode = useDarkMode();

  return <p>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>;
};
```

### `useKeyPress`

A

hook to detect key presses.

#### Usage:

```typescript
import { useKeyPress } from '@colidy/hooks/useKeyPress';

const KeyPressComponent: React.FC = () => {
  const isEnterPressed = useKeyPress('Enter');

  return <p>{isEnterPressed ? 'Enter key pressed' : 'Press the Enter key'}</p>;
};
```

### `useFocus`

A hook to manage focus state and programmatically set focus on an element.

#### Usage:

```typescript
import React from 'react';
import { useFocus } from '@colidy/hooks/useFocus';

const FocusComponent: React.FC = () => {
  const { isFocused, setFocus, elementRef } = useFocus();

  return (
    <div>
      <input
        ref={elementRef as React.RefObject<HTMLInputElement>}
        type="text"
        placeholder="Click to focus"
      />
      <p>The input is {isFocused ? 'focused' : 'not focused'}</p>
      <button onClick={setFocus}>Focus Input</button>
    </div>
  );
};

export default FocusComponent;
```

### `useMediaQuery`

A hook to track and respond to changes in media queries.

#### Usage:

```typescript
import React from 'react';
import { useMediaQuery } from '@colidy/hooks/useMediaQuery';

const MediaQueryComponent: React.FC = () => {
  const { matches, updateQuery } = useMediaQuery('(min-width: 768px)');

  return (
    <div>
      <p>Is screen wider than 768px? {matches ? 'Yes' : 'No'}</p>
      <button onClick={() => updateQuery('(min-width: 1024px)')}>
        Update to 1024px
      </button>
    </div>
  );
};

export default MediaQueryComponent;
```

### `useTableOfContents`

A hook to programmatically set focus on an element.

#### Usage:

```typescript
import React from 'react';
import { useTableOfContents } from '@colidy/hooks/useTableOfContents';

interface TOCItem {
  id: string;
  level: number;
  title: string;
}

const TocComponent: React.FC = () => {
  const { contents, active } = useTableOfContents(['h2', 'h3', 'h4'], '[data-toc]');

  return (
    <div>
      <div data-toc>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </div>
      <ul>
      {contents.map(({ id, level, text }) => (
        <li key={id} style={{ marginLeft: \`\${level - 2}em\` }}>
          {\`Title: \${text}, Level: \${level}, Id: \${id}\`}
        </li>
      ))}
      </ul>
    </div>
  );
};

export default TocComponent;
```

## Contributing

If you have suggestions or improvements for these hooks, please feel free to contribute by opening an issue or a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
