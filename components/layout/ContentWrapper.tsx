import InstalledProducts from "@/components/common/InstalledProducts";
import AppsCard from "@/components/common/AppsCard";

export default function ContentWrapper() {
    return (
        <div className="content-wrapper">

            <InstalledProducts />
            <AppsCard />
        </div>
    );
}
