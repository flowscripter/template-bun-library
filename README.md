# template-bun-library

[![version](https://img.shields.io/github/v/release/flowscripter/template-bun-library?sort=semver)](https://github.com/flowscripter/template-bun-library/releases)
[![build](https://img.shields.io/github/actions/workflow/status/flowscripter/template-bun-library/release-bun-library.yml)](https://github.com/flowscripter/template-bun-library/actions/workflows/release-bun-library.yml)
[![coverage](https://codecov.io/gh/flowscripter/template-bun-library/graph/badge.svg?token=uWK0oWsBjr)](https://codecov.io/gh/flowscripter/template-bun-library)
[![docs](https://img.shields.io/badge/docs-API-blue)](https://flowscripter.github.io/template-bun-library/index.html)
[![license: MIT](https://img.shields.io/github/license/flowscripter/template-bun-library)](https://github.com/flowscripter/template-bun-library/blob/main/LICENSE)

> Project template for a Bun library

## Template Usage

Create a new Bun project using this as a template:

`bun create @flowscripter/template-bun-library`

## Bun Module Usage

Add the module:

`bun add @flowscripter/template-bun-library`

Use the module:

```typescript
import { world } from "@flowscripter/template-deno-library";

world();
```

## Development

Test: 

`bun test`

**NOTE**: The following tasks use Deno as it excels at these and Bun does not currently provide such functionality:

Format:

`deno fmt index.ts src/ tests`

Lint:

`deno lint index.ts src/ tests/`

Generate HTML API Documentation:

`deno doc --html --name=template-bun-library index.ts`

## Documentation

### Overview

Sample mermaid diagram to test rendering in markdown:

```mermaid
classDiagram
    Foo <|-- Bar
```

### API

Link to auto-generated API docs:

[API Documentation](https://flowscripter.github.io/template-bun-library/index.html)

## License

MIT © Flowscripter
