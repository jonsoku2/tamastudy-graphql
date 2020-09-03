import React from 'react';
import { GetServerSideProps } from 'next';
import { initializeApollo } from '../lib/apolloClient';
import { CurrentUserDocument } from '../generated/apolloComponents';
import { ApolloClient, NormalizedCacheObject, useQuery } from '@apollo/client';
import PageLayout from '../components/layouts/AppPageLayout';

const IndexPage = () => {
    const { data, loading } = useQuery(CurrentUserDocument);

    if (loading) {
        return <div>loading ...</div>;
    }

    if (!data) {
        return <div>loading ...</div>;
    }

    return <PageLayout title="Home | Next.js + TypeScript Example">Home!</PageLayout>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();
    const res = await apolloClient.query({
        query: CurrentUserDocument,
        context: {
            headers: {
                cookie: ctx.req.headers.cookie,
            },
        },
    });
    apolloClient.writeQuery({
        query: CurrentUserDocument,
        data: {
            currentUser: res.data?.currentUser,
        },
    });
    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
        },
    };
};

export default IndexPage;
