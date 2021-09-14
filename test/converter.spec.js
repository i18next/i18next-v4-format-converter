import { transformNamespace } from '../index.js'
import should from 'should'

describe('converter - transformNamespace', () => {
  it('should transform old namespaces as expected', async () => {
    const old1 = {
      someKey: 'normal',
      different: 'normal two',
      myKey_0: 'no keys',
      myKey_1: 'one key',
      myKey_2: 'two keys',
      myKey_3: 'few {{count}} keys',
      myKey_4: 'many {{count}} keys',
      myKey_5: 'other {{count}} keys'
    }
    const expectedNew1 = {
      someKey: 'normal',
      different: 'normal two',
      myKey_zero: 'no keys',
      myKey_one: 'one key',
      myKey_two: 'two keys',
      myKey_few: 'few {{count}} keys',
      myKey_many: 'many {{count}} keys',
      myKey_other: 'other {{count}} keys'
    }
    const new1 = transformNamespace('ar', old1)
    should(new1).eql(expectedNew1)

    const old2 = {
      someKey: 'normal',
      different: 'normal two',
      myKey: 'singular key',
      myKey_plural: 'plural key'
    }
    const expectedNew2 = {
      someKey: 'normal',
      different: 'normal two',
      myKey: 'singular key',
      myKey_other: 'plural key'
    }
    const new2 = transformNamespace('en', old2)
    should(new2).eql(expectedNew2)

    const old3 = {
      someKey: 'normal',
      different: {
        nested: 'whatever'
      },
      arr: ['1234', '123412341234'],
      myKey_0: 'no keys',
      myKey_1: 'one key',
      myKey_2: 'two keys',
      myKey_3: 'few {{count}} keys',
      myKey_4: 'many {{count}} keys',
      myKey_5: 'other {{count}} keys',
      more: {
        nesting: {
          here: {
            myKey_1: 'one key',
            myKey_2: 'two keys',
            myKey_3: 'few {{count}} keys'
          }
        }
      }
    }
    const expectedNew3 = {
      someKey: 'normal',
      different: {
        nested: 'whatever'
      },
      arr: ['1234', '123412341234'],
      myKey_zero: 'no keys',
      myKey_one: 'one key',
      myKey_two: 'two keys',
      myKey_few: 'few {{count}} keys',
      myKey_many: 'many {{count}} keys',
      myKey_other: 'other {{count}} keys',
      more: {
        nesting: {
          here: {
            myKey_one: 'one key',
            myKey_two: 'two keys',
            myKey_few: 'few {{count}} keys'
          }
        }
      }
    }
    const new3 = transformNamespace('ar', old3)
    should(new3).eql(expectedNew3)
  })
})