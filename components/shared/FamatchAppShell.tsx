import { AppShell } from "@mantine/core";
import type { FC } from "react";
import { navigationRoutes } from "../../lib/router/routes";
import { FooterSocial } from "../BottomTabs/FooterSocial";
import { HeaderAction } from "../Header";

type FamatchAppShellProps = {};

const FamatchAppShell: FC<FamatchAppShellProps> = ({ children }) => {
  return (
    <>
      <AppShell
        fixed
        header={<HeaderAction links={navigationRoutes} />}
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
      <FooterSocial />
    </>
  );
};

export default FamatchAppShell;
