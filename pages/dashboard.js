import { useQuery } from "@apollo/client";
import { userDetails } from "../app/api/graphql"
import { useAuthentication } from "../app/api/authorization";

function Dashboard() {

    const { isSignedIn } = useAuthentication();

    function Check() {
        if (isSignedIn()) {
            return <div> Signed In!! </div>
        }
        return <div>Not Signed In :/</div>
    };

    const { data, loading } = useQuery(userDetails);
    if (loading) {
        return (
            <div>Page Loading...</div>
        );
    }
    return (
        <div>
            <Check />
            Hello {data.userDetails.username}!!
        </div>
    );
};

export default Dashboard;