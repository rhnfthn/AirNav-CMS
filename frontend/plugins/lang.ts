import { useLangStore } from '~/stores/lang';

export default defineNuxtPlugin(() => {
  const lang = useLangStore();
  if (!lang.ready) lang.initFromCookie();
});
