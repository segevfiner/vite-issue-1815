"use strict";

// src/index.ts
var import_log = require("@swimm/log");
(0, import_log.withLogContext)(
  {
    foo: "bar"
  },
  () => {
    import_log.logger.info("Hello, World!");
  }
);
//# sourceMappingURL=index.js.map