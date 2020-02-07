import { foo } from '/subpkg/submod'

export function bar () {
  return foo() + ' bar'
}