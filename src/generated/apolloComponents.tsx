import {gql} from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type User = {
    __typename?: 'User';
    id: Scalars['ID'];
    username: Scalars['String'];
    email: Scalars['String'];
    password: Scalars['String'];
};

export type Post = {
    __typename?: 'Post';
    id: Scalars['ID'];
    title: Scalars['String'];
    desc: Scalars['String'];
    view?: Maybe<Scalars['Float']>;
};

export type LoginInput = {
    password: Scalars['String'];
    email: Scalars['String'];
};

export type RegisterInput = {
    password: Scalars['String'];
    username: Scalars['String'];
    email: Scalars['String'];
};

export type Query = {
    __typename?: 'Query';
    currentUser?: Maybe<User>;
};

export type Mutation = {
    __typename?: 'Mutation';
    login: User;
    logout: Scalars['String'];
    register: User;
};


export type MutationLoginArgs = {
    input: LoginInput;
};


export type MutationRegisterArgs = {
    input: RegisterInput;
};

export type LoginMutationVariables = Exact<{
    input: LoginInput;
}>;


export type LoginMutation = (
    { __typename?: 'Mutation' }
    & {
    login: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username'>
        )
}
    );

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
    { __typename?: 'Mutation' }
    & Pick<Mutation, 'logout'>
    );

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
    { __typename?: 'Query' }
    & {
    currentUser?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username'>
        )>
}
    );


export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
        login(input: $input) {
            id
            username
        }
    }
`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
    return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
}

export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
        logout
    }
`;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
    return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
}

export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
        currentUser {
            id
            username
        }
    }
`;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
    return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
}

export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
    return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
}

export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;

export interface IntrospectionResultData {
    __schema: {
        types: {
            kind: string;
            name: string;
            possibleTypes: {
                name: string;
            }[];
        }[];
    };
}

const result: IntrospectionResultData = {
    "__schema": {
        "types": []
    }
};
export default result;
    