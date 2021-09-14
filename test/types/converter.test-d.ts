import { Namespace, transformKey, transformNamespace } from '../../'
import { expectType } from 'tsd'

expectType<string>(transformKey('en', 'some.key'))
expectType<Namespace>(transformNamespace('en', { some: { key: 'value' } }))
