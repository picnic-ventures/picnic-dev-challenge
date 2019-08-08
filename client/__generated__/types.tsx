import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cat = {
  __typename?: "Cat";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  age?: Maybe<Scalars["Int"]>;
  owner?: Maybe<Person>;
};

export type Person = {
  __typename?: "Person";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  cats: Array<Cat>;
  cat?: Maybe<Cat>;
};

export type QueryCatArgs = {
  id: Scalars["ID"];
};
export type CatDetailQueryVariables = {
  id: Scalars["ID"];
};

export type CatDetailQuery = { __typename?: "Query" } & {
  cat: Maybe<{ __typename?: "Cat" } & Pick<Cat, "id" | "name">>;
};

export type CatListQueryVariables = {};

export type CatListQuery = { __typename?: "Query" } & {
  cats: Array<{ __typename?: "Cat" } & Pick<Cat, "id" | "name">>;
};

export const CatDetailDocument = gql`
  query CatDetail($id: ID!) {
    cat(id: $id) {
      id
      name
    }
  }
`;

export function useCatDetailQuery(
  options: Omit<Urql.UseQueryArgs<CatDetailQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<CatDetailQuery>({
    query: CatDetailDocument,
    ...options
  });
}
export const CatListDocument = gql`
  query CatList {
    cats {
      id
      name
    }
  }
`;

export function useCatListQuery(
  options: Omit<Urql.UseQueryArgs<CatListQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<CatListQuery>({ query: CatListDocument, ...options });
}
