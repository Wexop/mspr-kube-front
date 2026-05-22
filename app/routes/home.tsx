import type {Route} from "./+types/home";
import {Anchor, Button, Checkbox, Divider, Group, Paper, PasswordInput, Stack, Text, TextInput,} from '@mantine/core';
import {upperFirst, useToggle} from "@mantine/hooks";
import {useForm} from '@mantine/form';
import Grainient from "~/components/Grainient";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "MSPR Kube Front" },
    { name: "MSPR Kube Front", content: "" },
  ];
}

export default function AuthenticationForm() {
  const [type, toggle] = useToggle(['Se connecter', 'Créer un compte']);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Email invalide'),
      password: (val) => (val.length <= 24 ? 'Le mot de passe doit faire 24 caractères minimum' : null),
    },
  });

  return (
      <Stack mah={'100vh'}>
        <div style={{height: '100vh'}}>
          <Grainient   />
        </div>
          <Paper  style={{position:'absolute'}} radius="md" p="lg" withBorder h={'100%'} w={'40%'} >
            <Text size="lg" fw={500} c="bright">
              Bienvenue dans votre espace, <br/> {type}
            </Text>

            <Divider
                my="lg"
                styles={{ label: { color: 'var(--mantine-color-bright)', opacity: 0.85 } }}
            />

            <form  onSubmit={form.onSubmit(() => {})}>
              <Stack>
                {type === 'Créer un compte' && (
                    <TextInput
                        label="Nom"
                        placeholder="Votre nom"
                        value={form.values.name}
                        onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                        radius="md"
                    />
                )}

                <TextInput
                    required
                    label="Email"
                    placeholder="email@exemple.com"
                    value={form.values.email}
                    onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                    error={form.errors.email && 'Email invalide'}
                    radius="md"
                />

                {type === 'Se connecter' &&

                    <PasswordInput
                    required
                    label="Mot de passe"
                    placeholder="*******"
                    value={form.values.password}
                    onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                    error={form.errors.password && 'Le mot de passe doit faire 24 caractères minimum'}
                    radius="md"
                />
                }

                {type === 'Créer un compte' && (
                    <Checkbox
                        label="I accept terms and conditions"
                        checked={form.values.terms}
                        onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                    />
                )}
              </Stack>

              <Group justify="space-between" mt="xl">
                <Anchor
                    component="button"
                    type="button"
                    c="bright"
                    opacity={0.85}
                    onClick={() => toggle()}
                    size="xs"
                >
                  {type === 'register'
                      ? 'Vous avez déjà un compte? Se connecter'
                      : "Vous n'avez pas de compte ? S'enregistrer"}
                </Anchor>
                <Button type="submit" radius="xl">
                  {upperFirst(type)}
                </Button>
              </Group>
            </form>
          </Paper>
      </Stack>
  );
}
