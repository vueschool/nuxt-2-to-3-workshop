<script setup lang="ts">
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();
const $img = useImage();
const props = defineProps<{
  md: string;
}>();

let mdText = props.md;

const images = mdText.match(/!\[(.*)\]\((.*?)\)/g) || [];
images.forEach((line) => {
  const [all, alt, src] = line.match(/!\[(.*)\]\((.*?)\)/) || Array(3);
  mdText = mdText.replace(src, $img(src, { format: "webp" }, { alt }));
});

var result = md.render(mdText);
</script>
<template>
  <div v-html="result"></div>
</template>
