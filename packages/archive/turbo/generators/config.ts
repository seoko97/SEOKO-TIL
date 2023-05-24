import { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("react-component", {
    description: "Adds a new react component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "컴포넌트 이름을 입력하세요.",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "append",
        path: "src/components/index.ts",
        template: 'export * from "./{{pascalCase name}}";',
      },
    ],
  });

  plop.setGenerator("react-hook", {
    description: "Adds a new react hook",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "hook 이름을 입력하세요.",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/hooks/{{name}}.ts",
        templateFile: "templates/hook.hbs",
      },
      {
        type: "append",
        path: "src/hooks/index.ts",
        template: 'export * from "./{{name}}";',
      },
    ],
  });
}
