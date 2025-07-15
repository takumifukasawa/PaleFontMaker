# PaleFontMaker

A TypeScript/Vite application for generating circuit-style font atlases. Creates vector-based fonts that resemble circuit board traces with dots and connection points.

## Features

- **Circuit-style fonts**: Characters rendered as circuit board traces with lines and dots
- **Vector-based rendering**: Scalable font rendering using HTML5 Canvas
- **Font atlas generation**: Creates texture atlases for efficient font rendering
- **TypeScript support**: Fully typed with strict TypeScript configuration
- **Modular architecture**: Extensible system for different font styles

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm

### Installation

```bash
npm install
```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

The project uses a modular shape font system:

- **ShapeFont System**: Base types and rendering infrastructure
- **Circuit Font Implementation**: Specific implementation for circuit-style characters
- **Character Definitions**: Each character defined with coordinates, lines, dots, and stroke dots
- **Canvas Rendering**: Direct 2D canvas rendering with customizable styling

## Character Format

Characters are defined with:
- **coords**: Array of x,y coordinates
- **lines**: Line segments connecting coordinates
- **dots**: Filled circle markers
- **strokeDots**: Outlined circle markers

## Project Structure

```
src/
├── main.ts                     # Application entry point
├── PaleGL/
│   └── shapeFont/
│       ├── shapeFont.ts        # Base font types
│       ├── shapeFontService.ts # Service pattern
│       ├── shapeFontRenderer.ts # Core renderer
│       ├── buildShaderFontAtlas.ts # Atlas generation
│       └── shapeFontCircuit/
│           ├── shapeFontCircuit.ts # Character definitions
│           ├── renderShapeFontCircuit.ts # Circuit renderer
│           └── shapeFontCircuitService.ts # Service config
```

## Configuration

- **Vite**: Build tool with TypeScript support
- **Path aliases**: `@/*` maps to `src/*`
- **Prettier**: Code formatting with 4 spaces, single quotes
- **TypeScript**: Strict mode with additional linting rules

## License

This project is private and not licensed for distribution.
