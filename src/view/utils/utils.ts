export function className(...cls: Array<string | boolean | undefined | null>) {
  return cls.filter(t=>Boolean(t)).join(' ')
}
