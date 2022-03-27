import {
  Container,
  Group,
  Select,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { LanguageHiragana, MoonStars, Sun } from "tabler-icons-react";
import ColorSchemeToggleSwitch from "../ColorSchemeToggleSwitch";

import SettingListItem from "./SettingListItem";

const localeOptions = [
  { value: "en", label: "English" },
  { value: "zh", label: "中文" },
];

type SettingPanelProps = {};

const SettingPanel: FC<SettingPanelProps> = () => {
  const { colorScheme } = useMantineColorScheme();
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const [value, setValue] = useState(localeOptions[0]);

  const onChange = (value: string | null): void => {
    const findOption = localeOptions.find((e) => e.value === value);
    if (!findOption) return;

    setValue(findOption);

    // change just the locale and maintain all other route information including href's query
    router.push({ pathname, query }, asPath, {
      locale: findOption.value,
    });
  };

  return (
    <>
      {/* use group instead */}
      <Container size="sm">
        <Title sx={(theme) => ({ marginBottom: theme.spacing.xl })}>
          Settings
        </Title>
        <Group direction="column" grow>
          <SettingListItem icon={<LanguageHiragana />} text="語言">
            <Select
              sx={{ width: 120 }}
              data={localeOptions}
              value={value.value}
              onChange={onChange}
            />
          </SettingListItem>

          <SettingListItem
            icon={
              colorScheme === "dark" ? (
                <Sun size={24} />
              ) : (
                <MoonStars size={24} />
              )
            }
            text="主題顏色"
          >
            <ColorSchemeToggleSwitch />
          </SettingListItem>
        </Group>
      </Container>
    </>
  );
};

export default SettingPanel;
