import SessionClient from "../auth/SessionClient";
import { useNavigation } from "@/contexts/NavigationContext";
import DashboardView from "../../app/(root)/dashboard/DashboardView";
import TransactionsView from "../../app/(root)/transactions/TransactionsView";
import CategoriesView from "../../app/(root)/categories/CategoriesView";

export default function MainContainer() {
    const { currentView } = useNavigation();

    const renderView = () => {
        switch (currentView) {
            case 'dashboard':
                return <DashboardView />;
            case 'transactions':
                return <TransactionsView />;
            case 'categories':
                return <CategoriesView />;
            case 'home':
            default:
                return <SessionClient />;
        }
    };

    return (
        <div className="main-container">
            {/* <MainHeader /> */}
            {renderView()}
        </div>
    );
}
