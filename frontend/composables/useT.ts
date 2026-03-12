import { computed } from 'vue';
import { useLangStore } from '~/stores/lang';
import { messages } from '~/i18n/messages';

type Vars = Record<string, string | number>;

const interpolate = (template: string, vars?: Vars) => {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_m, key) => {
    const value = vars[key];
    return value === undefined || value === null ? '' : String(value);
  });
};

export const useT = () => {
  const lang = useLangStore();

  const t = (key: string, vars?: Vars) => {
    const dict = messages[lang.locale] ?? messages.id;
    const fallbackDict = messages.id;
    const value = dict[key] ?? fallbackDict[key] ?? key;
    return interpolate(value, vars);
  };

  const locale = computed(() => lang.locale);

  return { t, locale, lang };
};
