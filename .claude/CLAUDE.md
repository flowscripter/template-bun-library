# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`@flowscripter/template-bun-library` -- project template for a Bun library. Exports a minimal `world()` function as an example of a publishable Bun module.

## Commands

```bash
# Install
bun install

# Test
bun test

# Format (auto-fixes in place)
bunx oxfmt

# Lint
bunx oxlint index.ts src/ tests/

# Generate HTML API documentation
bunx typedoc --readme none index.ts
```

## Architecture

- `index.ts` -- public entry point; re-exports everything from `src/`
- `src/world.ts` -- example exported function (`world()`)
- `tests/world_test.ts` -- Bun test suite for the world module
- `tsconfig.json` -- TypeScript configuration
- `package.json` -- module metadata; `"module": "index.ts"` for Bun resolution

This line was added to test the docs-only gate and can be removed.
