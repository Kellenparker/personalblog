import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import series from './schemas/series'
import post from './schemas/post'
import author from './schemas/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, series, blockContent],
}
