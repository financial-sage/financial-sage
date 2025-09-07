import SessionClient from "../auth/SessionClient";
import ContentWrapper from "./ContentWrapper";
import { useNavigation } from "@/contexts/NavigationContext";
import DashboardView from "../views/DashboardView";
import TransactionsView from "../views/TransactionsView";
import CategoriesView from "../views/CategoriesView";

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
