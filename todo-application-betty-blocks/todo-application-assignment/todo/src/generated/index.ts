import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  completeTodo: Todo;
  createTodo: Todo;
};


export type MutationCompleteTodoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCreateTodoArgs = {
  title: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  todos: Array<Todo>;
};

export type Todo = {
  __typename?: 'Todo';
  done: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type ListTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type ListTodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string, title: string, done: boolean }> };

export type CompleteTodoMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CompleteTodoMutation = { __typename?: 'Mutation', completeTodo: { __typename?: 'Todo', id: string, title: string, done: boolean } };

export type CreateTodoMutationVariables = Exact<{
  title: Scalars['String']['input'];
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', id: string, title: string, done: boolean } };


export const ListTodosDocument = gql`
    query ListTodos {
  todos {
    id
    title
    done
  }
}
    `;

/**
 * __useListTodosQuery__
 *
 * To run a query within a React component, call `useListTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useListTodosQuery(baseOptions?: Apollo.QueryHookOptions<ListTodosQuery, ListTodosQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListTodosQuery, ListTodosQueryVariables>(ListTodosDocument, options);
}
export function useListTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListTodosQuery, ListTodosQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListTodosQuery, ListTodosQueryVariables>(ListTodosDocument, options);
}
export function useListTodosSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListTodosQuery, ListTodosQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<ListTodosQuery, ListTodosQueryVariables>(ListTodosDocument, options);
}
export type ListTodosQueryHookResult = ReturnType<typeof useListTodosQuery>;
export type ListTodosLazyQueryHookResult = ReturnType<typeof useListTodosLazyQuery>;
export type ListTodosSuspenseQueryHookResult = ReturnType<typeof useListTodosSuspenseQuery>;
export type ListTodosQueryResult = Apollo.QueryResult<ListTodosQuery, ListTodosQueryVariables>;
export const CompleteTodoDocument = gql`
    mutation CompleteTodo($id: ID!) {
  completeTodo(id: $id) {
    id
    title
    done
  }
}
    `;
export type CompleteTodoMutationFn = Apollo.MutationFunction<CompleteTodoMutation, CompleteTodoMutationVariables>;

/**
 * __useCompleteTodoMutation__
 *
 * To run a mutation, you first call `useCompleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeTodoMutation, { data, loading, error }] = useCompleteTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCompleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<CompleteTodoMutation, CompleteTodoMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CompleteTodoMutation, CompleteTodoMutationVariables>(CompleteTodoDocument, options);
}
export type CompleteTodoMutationHookResult = ReturnType<typeof useCompleteTodoMutation>;
export type CompleteTodoMutationResult = Apollo.MutationResult<CompleteTodoMutation>;
export type CompleteTodoMutationOptions = Apollo.BaseMutationOptions<CompleteTodoMutation, CompleteTodoMutationVariables>;
export const CreateTodoDocument = gql`
    mutation CreateTodo($title: String!) {
  createTodo(title: $title) {
    id
    title
    done
  }
}
    `;
export type CreateTodoMutationFn = Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, options);
}
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;