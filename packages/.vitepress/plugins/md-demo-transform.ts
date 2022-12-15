import type { Plugin } from "vite";
import path from "path";

const MATCHER = /:::\s*demo\s*(.*)\s*:::/;
const useMatcher = (flags?: string) => new RegExp(MATCHER, flags);

function parseComponent(match: string, id: string) {
  const [m, componentPath] = match.match(useMatcher()) ?? [];
  const componentName = "demo" + path.basename(componentPath);
  const sourcePath = path.join(id.substring(0, id.lastIndexOf("/")), componentPath);
  return { componentPath, componentName, sourcePath };
}

/**
 * Use in .md:
 *```md
 * ::: demo
 * ./basic
 * :::
 * ```
 */
export function mdDemoTransform(): Plugin {
  return {
    name: "md-demo-transform",
    enforce: "pre",
    transform(code, id) {
      if (!id.endsWith(".md")) return;

      const demoMatches = code.match(useMatcher("g"));
      const importScripts = demoMatches
        ?.map(match => {
          const { componentPath, componentName } = parseComponent(match, id);
          const script = `import ${componentName} from "${componentPath}.vue";`;
          return script;
        })
        ?.join("\n");
      code = importScripts ? `<script setup>\n${importScripts}\n</script>\n\n` + code : code;
      demoMatches?.forEach(match => {
        const { componentName, sourcePath } = parseComponent(match, id);
        const demoTemplate = `<demo>
<template #demo>
<${componentName}></${componentName}>
</template>
<template #code>

<<< ${sourcePath}.vue

</template>
</demo>`;
        code = code.replace(match, demoTemplate);
      });

      return code;
    }
  };
}
