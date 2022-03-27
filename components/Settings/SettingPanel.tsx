import {
  Container,
  Group,
  Select,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { LanguageHiragana, MoonStars, Sun } from "tabler-icons-react";
import messages from "../../lib/i18n/messages";
import ColorSchemeToggleSwitch from "../ColorScheme/ColorSchemeToggleSwitch";
import SettingListItem from "./SettingListItem";

const localeOptions = [
  { value: "en", label: "English" },
  { value: "zh", label: "中文" },
];

type SettingPanelProps = {};

const SettingPanel: FC<SettingPanelProps> = () => {
  const { formatMessage } = useIntl();
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
          {formatMessage(messages["setting.title"])}
        </Title>
        <Group direction="column" grow>
          <SettingListItem
            icon={<LanguageHiragana />}
            text={formatMessage(messages["setting.language"])}
          >
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
            // text="主題顏色"
            text={formatMessage(messages["setting.theme_mode"])}
          >
            <ColorSchemeToggleSwitch />
          </SettingListItem>
        </Group>
      </Container>
    </>
  );
};

export default SettingPanel;
