import Sidebar from "../components/SideBar";
import Map from "../components/Map";
import User from "../components/User";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Map />
      <Sidebar />
      <User />
    </div>
  );
}

export default AppLayout;
