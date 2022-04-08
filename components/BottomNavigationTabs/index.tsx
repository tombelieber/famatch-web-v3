import { createStyles, TabProps, Tabs } from "@mantine/core";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
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

export function BottomNavigationTabs() {
  const { classes } = useStyles();
  const { push, pathname } = useRouter();

  const [activeTab, setActiveTab] = useState(1);
  const onChange = (active: number, tabKey: string) => {
    setActiveTab(active);
    push(tabKey);
  };

  useEffect(() => {
    const findIndex = bottomRoutes.findIndex(
      (route) => route.pathname === pathname,
    );
    if (findIndex !== -1) {
      setActiveTab(findIndex);
    }
  }, [pathname]);

  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <Tabs
          grow
          position="apart"
          active={activeTab}
          onTabChange={onChange}
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
