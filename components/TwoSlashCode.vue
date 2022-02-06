<template>
  <div v-html="html"></div>
</template>

<script setup lang="ts">
import {
  createShikiHighlighter,
  renderCodeToHTML,
  runTwoSlash,
} from "shiki-twoslash";
import { ref, onMounted } from "vue";

const props = defineProps({
  code: {
    default: "",
  },
  lang: {
    default: "ts",
  },
});
const html = ref("");
onMounted(async () => {
  console.log(props.code);
  const highlighter = await createShikiHighlighter({ theme: "dark-plus" });
  const twoslash = runTwoSlash(
    `// @errors: 2551
const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;`,
    "ts",
    {}
  );

  html.value = renderCodeToHTML(
    twoslash.code,
    "ts",
    ["twoslash"],
    {
    },
    highlighter,
    twoslash
  );
});
console.log("html", html);
</script>
