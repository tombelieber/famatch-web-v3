import { createStyles, TabProps, Tabs } from "@mantine/core";
import { useRouter } from "next/router";
import { FC } from "react";
import { bottomRoutes } from "../../lib/router/routes";

const BOTTOM_NAVIGATION_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: BOTTOM_NAVIGATION_HEIGHT,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  container: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));

const StyledTab: FC<TabProps> = (props) => (
  <Tabs.Tab
    sx={{ height: BOTTOM_NAVIGATION_HEIGHT }}
    style={{ borderBottomWidth: 0 }}
    {...props}
  />
);

export function FooterSocial() {
  const { classes, theme } = useStyles();
  const { push } = useRouter();

  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <Tabs
          grow
          position="apart"
          onTabChange={(active, tabKey) => {
            if (!tabKey) {
              console.error("failed to get tabKey, no route change.");
              return;
            }
            push(tabKey);
          }}
          sx={(theme) => ({
            zIndex: 100,
            height: BOTTOM_NAVIGATION_HEIGHT,
            backgroundColor:
              theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
          })}
        >
          {bottomRoutes.map(({ icon, pathname }) => (
            <StyledTab key={pathname} icon={icon} tabKey={pathname} />
          ))}
        </Tabs>
      </div>
    </div>
  );
}
