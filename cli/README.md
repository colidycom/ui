# ColidyUI CLI

A CLI with helper commands for managing ColidyUI components inside a Next.js project.

-   [Website](https://ui.colidy.com)
-   [Documentation](https://ui.colidy.com/docs)

## Features

-   Initialize ColidyUI inside a Next.js project.
-   Install ColidyUI components.
-   Uninstall ColidyUI components.
-   List all available ColidyUI components.

## Installation

To install the ColidyUI CLI, use npm:

```bash
npm install -g @colidy/ui
# or
npx @colidy/ui
```

## Usage

### Initializing ColidyUI

To initialize ColidyUI inside your Next.js project, run:

```bash
colidyui init
```

This command checks for required files (`tailwind.config.ts`, `tsconfig.json`, `globals.css`) and sets up the necessary configurations.

### Installing Components

To install a specific ColidyUI component, use:

```bash
colidyui install <component_name>
```

You can also install multiple components at once by separating their names with commas:

```bash
colidyui install component1,component2
```

### Uninstalling Components

To uninstall a specific ColidyUI component, use:

```bash
colidyui uninstall <component_name>
```

### Listing Available Components

To list all available ColidyUI components, run:

```bash
colidyui components
```

## Examples

### Initialize ColidyUI

```bash
colidyui init
```

### Install a Component

```bash
colidyui install Button
```

### Uninstall a Component

```bash
colidyui uninstall Button
```

### List All Components

```bash
colidyui components
```
