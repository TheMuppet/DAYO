import { image } from 'https://github.com/cmorten/deno-rollup/blob/main/plugins/image/mod.ts'

export default {
  port: 3000,
  mode: "dom",
  plugins: [
      image()
  ],
  extendsImportMap: [],
};
