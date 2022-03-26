import { setupAPIClient } from '../services/api';
import { withSSRAuth } from '../utils/withSSRAuth';
import decode from 'jwt-decode';

export default function Dashboard() {
    return (
        <>
            <h1>Metrics</h1>
        </>
    );
}

export const getServerSideProps = withSSRAuth(
    async (ctx) => {
        const apiClient = setupAPIClient(ctx);
        const response = await apiClient.get('/me');

        // console.log(response.data);

        return {
            props: {},
        };
    },
    {
        permissions: ['metrics.list'],
        roles: ['administrator'],
    }
);
