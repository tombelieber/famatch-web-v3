import {
  Burger,
  Button,
  Center,
  Container,
  createStyles,
  Group,
  Header,
  Menu,
} from "@mantine/core";
import { upperFirst, useBooleanToggle } from "@mantine/hooks";
import { NextLink } from "@mantine/next";
import { useIntl } from "react-intl";
import { ChevronDown } from "tabler-icons-react";
import { HeaderLink } from "../../lib/common/constant";
import messages from "../../lib/i18n/messages";
import { ColorSchemeToggle } from "../ColorScheme/ColorSchemeToggle";
import { FamatchLogo } from "../shared/FamatchLogo";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

interface HeaderActionProps {
  links: HeaderLink[];
}

export function HeaderAction({ links }: HeaderActionProps) {
  const { classes } = useStyles();
  const { formatMessage } = useIntl();
  const [opened, toggleOpened] = useBooleanToggle(false);
  const items = links.map((link) => {
    const menuItems = link.sublinks?.map((item) => (
      <Menu.Item key={item.pathname}>{formatMessage(item.label)}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={`menu-item-${link.pathname}`}
          trigger="hover"
          delay={0}
          transitionDuration={0}
          placement="end"
          gutter={1}
          control={
            <NextLink href={link.pathname} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>
                  {formatMessage(link.label)}
                </span>
                <ChevronDown size={12} />
              </Center>
            </NextLink>
          }
        >
          {menuItems}
        </Menu>
      );
    }

    return (
      <NextLink
        key={`anchor-${link.pathname}`}
        href={link.pathname}
        className={classes.link}
      >
        {formatMessage(link.label)}
      </NextLink>
    );
  });

  return (
    <Header height={HEADER_HEIGHT}>
      <Container className={classes.inner} fluid>
        <Group>
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
          />
          <FamatchLogo />
        </Group>

        <Group spacing={24} className={classes.links} position="center">
          {items}
        </Group>

        <Group spacing={24} position="right" noWrap>
          <div className={classes.links}>
            <ColorSchemeToggle />
          </div>
          <Button radius="xl" size="md" sx={{ height: 30 }}>
            {upperFirst(formatMessage(messages["authentication.form.login"]))}
          </Button>
        </Group>
      </Container>
    </Header>
  );
}
