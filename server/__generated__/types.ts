import { GraphQLResolveInfo } from "graphql";
import { Context } from "../";
export type Maybe<T> = T | null;
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
  age?: Maybe<Scalars["Int"]>;
  color?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["String"]>;
  liked?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  owner?: Maybe<Person>;
};

export type Mutation = {
  __typename?: "Mutation";
  like?: Maybe<Cat>;
};

export type MutationLikeArgs = {
  catId: Scalars["ID"];
  value: Scalars["Boolean"];
};

export type Person = {
  __typename?: "Person";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  cats: Array<Cat>;
  cat?: Maybe<Cat>;
};

export type QueryCatsArgs = {
  liked?: Maybe<Scalars["Boolean"]>;
};

export type QueryCatArgs = {
  id: Scalars["ID"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Cat: ResolverTypeWrapper<Cat>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Person: ResolverTypeWrapper<Person>;
  Mutation: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Boolean: Scalars["Boolean"];
  Cat: Cat;
  ID: Scalars["ID"];
  Int: Scalars["Int"];
  String: Scalars["String"];
  Person: Person;
  Mutation: {};
};

export type CatResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Cat"] = ResolversParentTypes["Cat"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  age?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  liked?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes["Person"]>, ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  like?: Resolver<
    Maybe<ResolversTypes["Cat"]>,
    ParentType,
    ContextType,
    MutationLikeArgs
  >;
};

export type PersonResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Person"] = ResolversParentTypes["Person"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  cats?: Resolver<
    Array<ResolversTypes["Cat"]>,
    ParentType,
    ContextType,
    QueryCatsArgs
  >;
  cat?: Resolver<
    Maybe<ResolversTypes["Cat"]>,
    ParentType,
    ContextType,
    QueryCatArgs
  >;
};

export type Resolvers<ContextType = Context> = {
  Cat?: CatResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
