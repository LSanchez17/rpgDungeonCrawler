# GitHub Copilot Instructions for RPG Dungeon Crawler

## Project Overview
This is a TypeScript-based RPG dungeon crawler game that emphasizes object-oriented programming (OOP) design patterns. The game features procedural dungeon generation, character progression, and interactive gameplay elements.

## Code Style and Conventions

### Object-Oriented Programming
- **Always prefer OOP design patterns** when implementing new features
- Use classes with proper encapsulation (private/protected/public modifiers)  
- Implement interfaces for type safety and contract enforcement
- Follow SOLID principles where applicable
- Use inheritance and composition appropriately

### TypeScript Standards
- Use strict TypeScript configuration
- Define interfaces for all data structures
- Use proper type annotations and avoid `any` type
- Leverage union types and enums for controlled values
- Export types from dedicated type files

### Naming Conventions
- Classes: PascalCase (e.g., `DungeonGenerator`, `PlayerCharacter`)
- Interfaces: PascalCase with "Interface" suffix (e.g., `CharacterInterface`, `RoomInterface`)
- Methods/Properties: camelCase (e.g., `generateDungeon()`, `currentHealth`)
- Constants: UPPER_SNAKE_CASE (e.g., `MAX_DUNGEON_SIZE`)
- Files: PascalCase for classes, camelCase for utilities

## Project Structure

### `/src/lib/` - Core Game Classes
Contains the main domain classes that represent game entities and systems:
- `biomes/` - Biome and environment classes
- `character/` - Player and NPC character classes  
- `items/` - Item, weapon, and equipment classes
- `layouts/` - Dungeon, room, and world layout classes
- `monsters/` - Enemy and monster classes
- `utilities/` - Shared utility classes used across the library
- `weapons/` - Weapon-specific classes and mechanics
- `world/` - World generation and management classes

**When adding new game features, create classes in the appropriate subdirectory.**

### `/src/utils/` - Shared Utilities  
Contains utility functions and helper classes shared across the entire application:
- Pure functions that don't maintain state
- Helper functions for common operations
- Question/input handling utilities
- Game loop and initialization utilities

### `/src/server/` - Ollama Integration (Future)
Directory for server-side logic connecting the project to Ollama:
- LLM integration classes
- Content generation services  
- AI-powered game mechanics
- External API communication

### `/src/types/` - Type Definitions
Centralized type definitions organized by domain:
- Interface definitions for all major classes
- Enum definitions for game constants
- Union types for controlled values

## Implementation Guidelines

### Class Design
```typescript
// Example class structure
export class ExampleGameEntity implements ExampleInterface {
    private _privateProperty: string;
    protected protectedProperty: number;
    public readonly publicReadonly: boolean;

    constructor(initialValues: ExampleConstructorInterface) {
        // Initialize properties
    }

    public getProperty(): string {
        return this._privateProperty;
    }

    public performAction(): void {
        // Implementation
    }
}
```

### Interface Usage
- Always define interfaces for class contracts
- Use interfaces for method parameters and return types
- Group related interfaces in type files by domain

### Error Handling
- Use proper error handling with try/catch blocks
- Create custom error classes for domain-specific errors
- Validate input parameters in class methods

### Game Mechanics
- Encapsulate game logic within appropriate classes
- Use composition over inheritance for complex behaviors
- Implement proper separation of concerns

## Development Workflow

### Adding New Features
1. Define interfaces first in `/src/types/`
2. Implement classes in appropriate `/src/lib/` subdirectory
3. Add any shared utilities to `/src/utils/`
4. Update exports in index files
5. Test the integration points

### Code Generation Preferences
- Generate complete class implementations with all interface methods
- Include proper TypeScript types and generics
- Add JSDoc comments for public methods
- Follow the existing code organization patterns

## Game-Specific Guidance

### Dungeon Generation
- Use the existing `Dungeon` and `Room` classes as base patterns
- Implement procedural generation algorithms as class methods
- Consider difficulty scaling in generation logic

### Character System  
- Extend character classes for different entity types
- Implement stat systems using proper encapsulation
- Use interfaces for different character behaviors

### Item System
- Create item hierarchies with base classes and specific implementations
- Implement inventory management through class methods
- Use composition for item effects and behaviors

## Future Considerations

### Ollama Integration
When implementing server-side AI integration:
- Create service classes for LLM communication
- Use async/await patterns for API calls
- Implement proper error handling for external services
- Cache generated content appropriately

### Testing
- Write unit tests for individual class methods  
- Use dependency injection for testable code
- Mock external dependencies in tests

This codebase prioritizes clean, maintainable object-oriented design while building an engaging RPG experience.