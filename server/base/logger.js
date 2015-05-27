/**
 * Created by Melo on 2015/1/31.
 */


var logger = require('tracer').console(
  {
    format : " <{{title}}>{{timestamp}}: {{message}} (in {{file}}:{{line}})",
    dateformat : "HH:MM:ss.L"
  });

module.exports = logger;