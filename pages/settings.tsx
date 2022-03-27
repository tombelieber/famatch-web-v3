import type { NextPage } from "next";
import { FaqSimple } from "../components/Settings/FAQ";
import SettingPanel from "../components/Settings/SettingPanel";

const Settings: NextPage = () => {
  return (
    <>
      <SettingPanel />
      <FaqSimple />
    </>
  );
};

export default Settings;
