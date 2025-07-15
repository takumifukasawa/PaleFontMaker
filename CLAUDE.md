# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PaleFontMaker is a TypeScript/Vite application that generates circuit-style font atlases for rendering text. The project focuses on creating vector-based fonts that look like circuit board traces with dots and connection points.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (runs TypeScript compiler then Vite build)
- `npm run preview` - Preview production build locally

## Code Architecture

### Core Components

The project is organized around a shape font rendering system:

1. **ShapeFont System** (`src/PaleGL/shapeFont/`):
   - `shapeFont.ts` - Base types for shape font definitions
   - `shapeFontService.ts` - Service pattern for font data and render functions
   - `shapeFontRenderer.ts` - Core renderer that manages canvas, context, and atlas
   - `buildShaderFontAtlas.ts` - Builds texture atlas from font data

2. **Circuit Font Implementation** (`src/PaleGL/shapeFont/shapeFontCircuit/`):
   - `shapeFontCircuit.ts` - Contains character definitions with coordinates, lines, dots, and stroke dots
   - `renderShapeFontCircuit.ts` - Renders circuit-style characters with lines and dots
   - `shapeFontCircuitService.ts` - Service configuration for circuit font

### Key Patterns

- **Generic Font System**: Uses TypeScript generics (`<T, U extends ShapeFontBase<T>>`) to allow different font types
- **Character Definition Format**: Each character is defined as `[coords[], lines[][], dots[], strokeDots[]]`
- **Service Pattern**: Font data and render functions are bundled as services
- **Canvas Rendering**: Direct 2D canvas rendering with white lines/dots on black background

### Configuration

- Uses Vite with TypeScript
- Path aliases configured: `@/*` maps to `src/*`
- Prettier formatting: 4 spaces, single quotes, 120 char width
- Strict TypeScript with additional linting rules

### Entry Point

`src/main.ts` initializes the renderer with a 4096x1024 canvas and renders the circuit font atlas once.

## Character Data Structure

Characters in `shapeFontCircuit.ts` follow this format:
- **coords**: Array of x,y coordinates (flattened: [x1,y1,x2,y2,...])
- **lines**: Array of line segments, each referencing coordinate indices
- **dots**: Indices of coordinates that should render as filled dots
- **strokeDots**: Indices of coordinates that should render as outlined dots

Special value `-1` in lines indicates `closePath()` operation.