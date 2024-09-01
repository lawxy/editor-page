import { IApi } from "umi";

const csn = [
  "https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js",
  "https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js",
  "https://cdn.jsdelivr.net/npm/dayjs@1.11.7/dayjs.min.js",
  "https://cdn.jsdelivr.net/npm/antd@5.20.3/dist/antd.min.js",
  "https://cdn.jsdelivr.net/npm/@ant-design/pro-components@2.7.15/dist/pro-components.min.js",
  "https://cdn.jsdelivr.net/gh/lawxy/editor-ui@4.0/umd/ui.min.js",
];

export default (api: IApi) => {
  api.modifyHTML(($) => {
    $("#root").after(csn.map((url) => `<script src='${url}'></script>`));
    return $;
  });
};
