// This is an auto-generated file. You should never edit this by hand. Run `npm run types` to update it.
/* eslint-disable */

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql'
import {
  Cat as CatInternal,
  DateInterval as DateIntervalInternal,
  Person as PersonInternal,
} from '../types'
import { Context } from '../server'
export type Maybe<T> = T | null
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X]
} &
  { [P in K]-?: NonNullable<T[P]> }

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: string
}

export type Cat = {
  __typename?: 'Cat'
  id: Scalars['ID']
  age?: Maybe<Scalars['Int']>
  color?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['String']>
  liked?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  owner?: Maybe<Person>
  availability?: Maybe<Array<DateInterval>>
}

export type DateInterval = {
  __typename?: 'DateInterval'
  start: Scalars['Date']
  end: Scalars['Date']
}

export type Mutation = {
  __typename?: 'Mutation'
  like?: Maybe<Cat>
}

export type MutationLikeArgs = {
  catId: Scalars['ID']
  value: Scalars['Boolean']
}

export type Person = {
  __typename?: 'Person'
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  address?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  cats: Array<Cat>
  cat?: Maybe<Cat>
}

export type QueryCatsArgs = {
  liked?: Maybe<Scalars['Boolean']>
}

export type QueryCatArgs = {
  id: Scalars['ID']
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type isTypeOfResolverFn<T = {}> = (
  obj: T,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

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
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  Cat: ResolverTypeWrapper<CatInternal>
  ID: ResolverTypeWrapper<Scalars['ID']>
  Int: ResolverTypeWrapper<Scalars['Int']>
  String: ResolverTypeWrapper<Scalars['String']>
  Person: ResolverTypeWrapper<PersonInternal>
  DateInterval: ResolverTypeWrapper<DateIntervalInternal>
  Date: ResolverTypeWrapper<Scalars['Date']>
  Mutation: ResolverTypeWrapper<{}>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {}
  Boolean: Scalars['Boolean']
  Cat: CatInternal
  ID: Scalars['ID']
  Int: Scalars['Int']
  String: Scalars['String']
  Person: PersonInternal
  DateInterval: DateIntervalInternal
  Date: Scalars['Date']
  Mutation: {}
}

export type CatResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Cat'] = ResolversParentTypes['Cat']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  liked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  owner?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>
  availability?: Resolver<
    Maybe<Array<ResolversTypes['DateInterval']>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type DateIntervalResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['DateInterval'] = ResolversParentTypes['DateInterval']
> = {
  start?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  end?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type MutationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  like?: Resolver<
    Maybe<ResolversTypes['Cat']>,
    ParentType,
    ContextType,
    RequireFields<MutationLikeArgs, 'catId' | 'value'>
  >
}

export type PersonResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  cats?: Resolver<
    Array<ResolversTypes['Cat']>,
    ParentType,
    ContextType,
    RequireFields<QueryCatsArgs, never>
  >
  cat?: Resolver<
    Maybe<ResolversTypes['Cat']>,
    ParentType,
    ContextType,
    RequireFields<QueryCatArgs, 'id'>
  >
}

export type Resolvers<ContextType = Context> = {
  Cat?: CatResolvers<ContextType>
  Date?: GraphQLScalarType
  DateInterval?: DateIntervalResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  Person?: PersonResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
}

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>
