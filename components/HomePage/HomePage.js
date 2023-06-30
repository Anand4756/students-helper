import CenterMenu from "./CenterMenu";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";

export default function HomePage() {
  return <div className="flex space-x-4">
    <LeftMenu />
    <CenterMenu />
    <RightMenu />
  </div>;
}
