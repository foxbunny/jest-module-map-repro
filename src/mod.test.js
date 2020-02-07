import {foo} from '/subpkg/submod'
import { bar } from '/mod'

jest.mock('/subpkg/submod')

test('mock module mapper issue', function () {
  foo.mockReturnValue('test')
  expect(bar()).toBe('test bar')
})