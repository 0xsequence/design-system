export const isTruthy = <T>(value: T | undefined | null): value is T =>
  Boolean(value)
