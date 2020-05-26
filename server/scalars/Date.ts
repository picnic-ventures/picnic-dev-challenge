import { GraphQLScalarType, GraphQLScalarTypeConfig, Kind } from 'graphql'

const config: GraphQLScalarTypeConfig<string, string> = {
  name: 'Date',
  description: 'A date in YYYY-MM-DD format.',
  serialize: validDate,
  parseValue: validDate,
  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      throw new TypeError(
        `Date can not represent a non-string type ${String(
          'value' in ast ? ast.value : null
        )}`
      )
    }
    return validDate(ast.value)
  },
}

// Returns the date as YYYY-MM-DD if valid & throws otherwise.
function validDate(value: any): string {
  if (typeof value !== 'string') {
    throw new TypeError(
      `Date can not represent a non-string value: ${JSON.stringify(value)}`
    )
  }
  const matches = value.match(/^(\d{4}-\d{2}-\d{2})$/)
  if (matches == null) {
    throw new TypeError('Date must be formatted YYYY-MM-DD')
  }
  const date = matches[1]
  if (Number.isNaN(Date.parse(date))) {
    throw new TypeError(`Invalid date ${date}`)
  }
  return date
}

export default new GraphQLScalarType(config)
