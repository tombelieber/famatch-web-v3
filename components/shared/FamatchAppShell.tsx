import { AppShell } from "@mantine/core";
import type { FC } from "react";
import { navigationRoutes } from "../../lib/router/routes";
import { AppHeader } from "../AppHeader";
import { BottomNavigationTabs } from "../BottomNavigationTabs";

type FamatchAppShellProps = {};

const FamatchAppShell: FC<FamatchAppShellProps> = ({ children }) => {
  return (
    <>
      <AppShell
        fixed
        header={<AppHeader links={navigationRoutes} />}
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        {/* Your application here */}
        {children}
      </AppShell>
      <BottomNavigationTabs />
    </>
  );
};

export default FamatchAppShell;
