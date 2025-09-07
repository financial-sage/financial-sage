import LeftSide from "@/components/layout/LeftSide";
import MainContainer from "@/components/layout/MainContainer";
import { NavigationProvider } from "@/contexts/NavigationContext";

export default function Wrapper() {
  return (
    <NavigationProvider>
      <div className="wrapper">
        <LeftSide />
        <MainContainer />
      </div>
    </NavigationProvider>
  );
}
