# Theme tokens

This project uses CSS custom properties in `src/styles.css` for all theme values. Keep component styles token-based so dark/light mode stays consistent.

## Token groups

### Surface and text
- `--bg-app`, `--bg-surface`, `--bg-surface-strong`, `--bg-surface-modal`
- `--text-primary`, `--text-secondary`, `--text-muted`
- `--border-subtle`, `--border-strong`

### Overlays and depth
- `--overlay-soft`, `--overlay-strong`
- `--overlay-image-top`, `--overlay-image-bottom`
- `--shadow-elevated`

### Component tokens
- Chips: `--chip-default-*`, `--chip-category-*`
- Buttons: `--button-primary-*`, `--button-secondary-*`
- Inputs/dropdowns: `--input-bg`, `--input-placeholder`, `--dropdown-bg`
- Utility interaction: `--hover-soft`, `--topbar`

## Usage rules for future components

1. **Use existing tokens first.** Do not hardcode color values in components.
2. **Map intent, not component names.** Prefer surface/text/border tokens before creating new component-specific tokens.
3. **Add new tokens in both themes.** If a token is added to `:root`, add its light equivalent in `:root.light`.
4. **Keep UI/data separate.** Store design values in tokens and keep component logic focused on behavior.
5. **Preserve visual language.** Stay neutral, high-contrast, and minimal (black/white cinematic style).

## Quick example

```css
.my-new-card {
  background: var(--bg-surface);
  color: var(--text-primary);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-elevated);
}
```
