import { AppShell } from "@mantine/core";
import type { FC } from "react";
import { headerLinks } from "../../lib/common/constant";
import { HeaderAction } from "../Header";

type FamatchAppShellProps = {};

const FamatchAppShell: FC<FamatchAppShellProps> = ({ children }) => {
  return (
    <>
      <AppShell
        fixed
        header={<HeaderAction links={headerLinks} />}
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
    </>
  );
};

export default FamatchAppShell;
