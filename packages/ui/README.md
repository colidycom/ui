# ColidyUI CLI

A CLI with helper commands for managing ColidyUI components inside a Next.js project.

-   [Website](https://ui.colidy.com)
-   [Documentation](https://ui.colidy.com/docs)

## Features

-   Initialization of the ColidyUI components into a Next.js project (`init` command).
-   Installation of specific or all components (`install` command).
-   Uninstallation of components (`uninstall` command).

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

### Key Functionalities:

1. **Config Management**:

    - The script checks and manages a local `colidy.config.json` file to store configurations like the directory for component installation.
    - Provides functions to get, update, and validate the configuration.

2. **Component Installation**:

    - Fetches the list of components from a GitHub repository.
    - Validates component names and dependencies.
    - Installs components into the specified directory, handles dependencies, and logs the process.

3. **Component Uninstallation**:

    - Removes a specified component from the project directory.

4. **Command Structure**:
    - The CLI uses `commander` to define commands (`init`, `install`, `uninstall`) and their respective actions.
