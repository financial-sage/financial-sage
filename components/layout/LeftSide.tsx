
import SideMenu from "@/components/layout/menu/SideMenu";
import CategoriesMenu from "@/components/layout/menu/CategoriesMenu";
import FontsMenu from "@/components/layout/menu/FontsMenu";
import ResourceLinksMenu from "@/components/layout/menu/ResourceLinksMenu";

export default function LeftSide() {
  return (
    <div className="left-side">
      <div className="side-wrapper">
        <div className="side-title">Apps</div>
        <SideMenu />
      </div>
      <div className="side-wrapper">
        <div className="side-title">Categories</div>
        <CategoriesMenu />
      </div>
      <div className="side-wrapper">
        <div className="side-title">Fonts</div>
        <FontsMenu />
      </div>
      <div className="side-wrapper">
        <div className="side-title">Resource Links</div>
        <ResourceLinksMenu />
      </div>
    </div>
  );
}
