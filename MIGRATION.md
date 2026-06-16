# Migrating from v3 to v4

V4 is a larger departure than previous releases and includes many breaking changes. This guide covers everything required to move a project from v3 to v4.

## 1. Packaging and dependencies

### ESM only — CommonJS build dropped

v4 ships **ES modules only**. The package is now `"type": "module"` and no longer publishes a CommonJS (`dist/index.cjs`) build. If your project consumes the design system via `require('@0xsequence/design-system')`, you must switch to `import` / ESM. Bundlers (Vite, etc.) and modern Node ESM consumers are unaffected.

### Peer dependency changes

- **`react-hook-form` removed** as a peer dependency (see [Removed form components](#3-form-components-and-react-hook-form-removed)).
- **`motion` removed** as a peer dependency (see [Animations](#7-motion-dependency-removed)).
- **`lucide-react` added** as a peer dependency for icons (see [Icons](#8-icons-migrated-to-lucide-react)):

```
pnpm add lucide-react
```

## 2. Migrated from Radix UI to Base UI

Internals moved from `@radix-ui/*` to [`@base-ui/react`](https://base-ui.com/). For most usage this is a smooth transition. The most notable breaking change is composition:

- The `@radix-ui/react-slot` `asChild` prop is **no longer valid**. Base UI uses a standard `render` prop instead. See https://base-ui.com/react/handbook/composition.

```diff
- <Button asChild><a href="/home">Home</a></Button>
+ <Button render={<a href="/home">Home</a>} />
```

Some primitive sub-exports also changed as part of this move:

- **`DropdownMenu`** — `DropdownMenuCheckboxIndicator` and `DropdownMenuRadioIndicator` are removed.
- **`Popover`** — `PopoverAnchor` is removed.

## 3. Form components and `react-hook-form` removed

`react-hook-form` and all controlled form components that depended on it have been removed, including `Form`, `ControlledTextInput`, `ControlledCheckbox`, `ControlledSelect`, `ControlledRadioGroup`, `ControlledSwitch`, `ControlledTextArea`, `ControlledNumericInput`, and `ControlledFileInput`.

Form handling is out of scope of the design system — it should not dictate which form library you use or how you wire up the primitives. See https://ui.shadcn.com/docs/forms for how to integrate the design-system primitives with various React form libraries, or copy the v3 `Controlled*` implementations into your own project.

## 4. Removed components

| Removed | Replacement |
| --- | --- |
| `Image` | Use a plain `<img>`. This component only added fade-in-on-load animation. |
| `Modal` | Use the `Dialog` primitive components. |
| `IconButton` | Use `<Button iconOnly><XIcon /></Button>`. |
| `Button.Helper` | Use `Button` directly with children. |
| `Text` | Use default Tailwind text classes. |
| `Callout` (and `CalloutButton`, `CalloutContent`, `CalloutHeader`, `CalloutIcon`) | Use `Alert` and its sub-components. |

`textVariants` has also been removed — use default Tailwind text classes instead.

## 5. Removed utilities

The string utilities `capitalize`, `pluralize`, and `kebabize` are no longer exported. These were used internally but were never intended to be part of the public API.

## 6. Changed component APIs

### Card is now composite

v3 exported a single `Card` (plus `cardVariants`). v4 adds a composable set of sub-components: `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, and `CardFooter`. Update single-element card usage to compose these pieces.

### Tooltip

- `vOffset` / `hOffset` props are renamed to the generalized `sideOffset` / `alignOffset`.
- A `TooltipProvider` is **no longer wrapped around every `Tooltip.Helper`** automatically. Wrap your app (or the relevant subtree) once with `TooltipProvider`.
- New `showArrow` prop (defaults to `true`).
- `Tooltip` now also exports its primitives (`TooltipTrigger`, `TooltipContent`, `TooltipProvider`, `TooltipPrimitive`). Use `Tooltip.Helper` for the old all-in-one behavior.

### Popover

- New `showArrow` prop.
- `PopoverAnchor` export removed (see [Base UI migration](#2-migrated-from-radix-ui-to-base-ui)).

### Collapsible

`Collapsible` now exports its primitives (`CollapsibleTrigger`, `CollapsibleContent`, `CollapsiblePrimitive`). Use `Collapsible.Helper` for the old behavior.

### NumericInput simplified

`NumericInput` no longer accepts `leftIcon`, `rightIcon`, or `controls` props. To add icons or controls, compose it with `InputGroup` / `InputGroupNumericInput`.

### Progress is now composite

`Progress` now exports `ProgressTrack`, `ProgressIndicator`, `ProgressLabel`, and `ProgressValue` for finer control over composition.

### Other primitive exports

Several components now expose their underlying Base UI primitive for advanced composition: `CheckboxPrimitive`, `SwitchPrimitive`, `RadioGroupPrimitive`, `ToastPrimitive`, plus `badgeVariants`. `PINCodeInput` is now built on `Input` internally and accepts `className` / `inputClassName`.

## 7. `motion` dependency removed

The `motion` dependency is removed. Components now use CSS transitions and animation classes on primitive components so they can be easily overridden. If you want richer animation, add `motion` within your own project.

## 8. Icons migrated to lucide-react

The custom icon set and icon tooling have been removed in favor of [`lucide-react`](https://lucide.dev/), which is now a peer dependency. Replace design-system icon imports with the equivalent lucide icons:

```diff
- import { CloseIcon } from '@0xsequence/design-system'
+ import { X } from 'lucide-react'
```

## 9. Tokens and styling

- **Gradient color tokens removed:** `gradientBackdrop`, `gradientPrimary`, and `gradientSecondary` are gone (`gradientSkeleton` remains). Replace references with solid color tokens or your own gradients.
- **Default font changed to Fustat** (`--font-sans`). Override it in your CSS if you need a different typeface.
- **Color scale rebranded to Polygon** — the Tailwind purple color scale is overridden with the Polygon-branded scale.
- **Focus ring default color** changed to `border-focus` (was black) to avoid color-transition flicker.
- New `background-tooltip` color token.

## 10. New components

v4 adds the following components (additive — no migration required, but available to adopt):

- `Calendar`
- `Combobox`
- `Pagination`
- `Sidebar`

---

# Migrating from v2 to v3

V3 attempts to be mostly compatible but there are some breaking changes that will need to be addressed.

1. Form components are no longer wrapped in a `Field` component, so properties like `labelLocation`, `label`, and `description` are no longer on components like `Checkbox`, `TextInput`, etc. You will need to wrap these components in a `Field` component manually. `Field` is now broken up into a collection of Field-based components like `FieldSet`, `FieldGroup`, `Field`, `FieldLabel`, `FieldDescription`, and `FieldError` to give more control over how fields are displayed. Check the Field and Form examples in Storybook, or refer to the shadcn Field docs.

2. `RadioGroup` no longer takes an options object. Instead you must use `RadioGroup` and `RadioGroupItem` components:

   ```jsx
   <RadioGroup>
     <RadioGroupItem />
     <RadioGroupItem />
     <RadioGroupItem />
   </RadioGroup>
   ```

3. `Button` is now a simple component which lets you create your own buttons with children content of your choice. The legacy Button component is renamed `Button.Helper`, which accepts properties like `leftIcon`, `rightIcon`, `label`, etc.

4. Button variants have changed. `glass` is no longer available; `secondary` is now the default. Some variants have been removed, including `feature`, `glass`, `emphasis`, and `raised`.

5. Glass layers and blur effects: many of the raised popover layers (Toast, Popover, Tooltip, Select) used a glass blurred effect. While this looked good in some cases, it caused contrast and readability issues when overlaid on user-generated content, and lighter content showed through too much. These now use opaque layers instead.

6. `Divider` is replaced with the shadcn `Separator` component, which supports horizontal and vertical orientation.

7. `TabbedNav` has been removed in favor of the `Tabs` components. For similar behavior, build a component within your project from `Tabs`, `TabsList`, and `TabsTrigger`.

8. `Select` has been broken up into composite components. The legacy Select behavior can be accessed via `Select.Helper`.
