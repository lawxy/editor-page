window.GLOBAL_FORM_EDITOR_DEFAULT_VALUE = {
  formElements: [
    {
      type: 'input',
      elementName: '输入框',
      textType: 'single',
      gridSpan: 4,
      autoSize: true,
      placeholder: '请输入',
      id: 'el-prj094anovg',
      parentId: 'form-c2j399eunso',
      regExps: [
        {
          required: true,
          name: '必填',
          message: '该项必填',
          enable: true,
          id: 'regexp-vvrjeagcjp',
        },
      ],
      events: [
        {
          id: 'event-rv1gcsh7c0o',
          eventAction: 'valueChange',
          eventTargets: [
            {
              id: 'event-target-cb9u4s67uk',
              sourceId: 'el-prj094anovg',
              validateField: 'current',
            },
          ],
          eventType: 'validate',
        },
      ],
    },
    {
      type: 'container',
      elementName: '容器',
      gridSpan: 24,
      gridLayout: true,
      children: [
        {
          type: 'button',
          btnText: '按钮',
          elementName: '按钮',
          gridSpan: 2,
          id: 'el-a17oar0iteg',
          parentId: 'el-ljj1285vang',
          events: [
            {
              id: 'event-tgc7034orag',
              eventAction: 'onClick',
              eventTargets: [
                {
                  id: 'event-target-ccv9i2np8n',
                  sourceId: 'el-a17oar0iteg',
                  validateField: 'all',
                },
              ],
              eventType: 'validate',
            },
          ],
        },
      ],
      id: 'el-ljj1285vang',
      parentId: 'form-c2j399eunso',
    },
  ],
  fieldValues: {},
  formAttrs: {
    verticalGap: 8,
    horizontalGap: 8,
    id: 'form-c2j399eunso',
    customCss: '#form{\n\tpadding: 10px;\n}',
  },
  formServices: [
    {
      name: '获取图片',
      url: 'http://localhost:8888/getSrc',
      method: 'GET',
      interceptors:
        "axios.interceptors.request.use(config =>{\n  return config\n})\n\nconst DEFAULT_ERROR_MESSAGE = '请求服务报错';\n\nconst HttpStatusCode = { Ok: 200 };\n\naxios.interceptors.response.use(function (res) {\n  try {\n    if (res.status !== HttpStatusCode.Ok) {\n      message.error(DEFAULT_ERROR_MESSAGE);\n      return {};\n    }\n    const { code } = res.data;\n    if (HttpStatusCode.Ok === code) {\n      return res.data;\n    }\n    message.error(errMsg || DEFAULT_ERROR_MESSAGE);\n  } catch (e) {\n    message.error(DEFAULT_ERROR_MESSAGE);\n  }\n},\nfunction (err) {\n  message.error(err?.message || DEFAULT_ERROR_MESSAGE);\n  return Promise.reject(err);\n})\n",
      id: 'service-sldmqsn18i',
      linkingElements: [],
    },
  ],
};
