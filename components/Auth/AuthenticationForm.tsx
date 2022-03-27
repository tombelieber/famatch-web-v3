import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  Paper,
  PaperProps,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import { upperFirst, useForm, useToggle } from "@mantine/hooks";
import { useIntl } from "react-intl";
import messages from "../../lib/i18n/messages";
import {
  GoogleButton,
  TwitterButton,
} from "../shared/SocialButtons/SocialButtons";

export function AuthenticationForm(props: PaperProps<"div">) {
  const { formatMessage } = useIntl();
  const LOGIN = formatMessage(messages["authentication.form.login"]);
  const REGISTER = formatMessage(messages["authentication.form.register"]);

  const [type, toggle] = useToggle(LOGIN, [LOGIN, REGISTER]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validationRules: {
      email: (val) => /^\S+@\S+$/.test(val),
      password: (val) => val.length >= 6,
    },
  });

  const onSubmit = form.onSubmit((formValues) => {
    console.log(formValues);
  });

  return (
    <Paper
      radius="md"
      p="xl"
      withBorder
      {...props}
      sx={(theme) => ({
        [`@media (min-width: ${theme.breakpoints.xs}px)`]: { width: 420 },
      })}
    >
      <Text size="lg" weight={500}>
        {formatMessage(messages["authentication.form.title"], { type })}
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
      </Group>

      <Divider
        label={formatMessage(messages["authentication.form.or_span"])}
        labelPosition="center"
        my="lg"
      />

      <form onSubmit={form.onSubmit(() => {})}>
        <Group direction="column" grow>
          {type === REGISTER && (
            <TextInput
              label={upperFirst(
                formatMessage(messages["authentication.form.name"]),
              )}
              placeholder={formatMessage(
                messages["authentication.form.name_placeholder"],
              )}
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
              }
            />
          )}

          <TextInput
            required
            label={upperFirst(
              formatMessage(messages["authentication.form.email"]),
            )}
            placeholder="hello@famatch.io"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={
              form.errors.email &&
              formatMessage(messages["authentication.form.invalid_email"])
            }
          />

          <PasswordInput
            id="auth-pw"
            autoComplete="on"
            required
            label={upperFirst(
              formatMessage(messages["authentication.form.password"]),
            )}
            placeholder={formatMessage(
              messages["authentication.form.password_placeholder"],
            )}
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              formatMessage(messages["authentication.form.password_too_less"])
            }
          />

          {type === REGISTER && (
            <Checkbox
              label={formatMessage(messages["authentication.form.accept_tos"])}
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
          )}
        </Group>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="gray"
            onClick={() => toggle()}
            size="xs"
          >
            {type === REGISTER
              ? formatMessage(
                  messages["authentication.form.already_have_account"],
                )
              : formatMessage(
                  messages["authentication.form.dont_have_account"],
                )}
          </Anchor>
          <Button type="submit" onClick={onSubmit}>
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
