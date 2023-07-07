var fs = require("fs");
const { dirname } = require("path");
var content = fs.readFileSync("./tool.html.gz", "binary");
var hexChar = [];
for (var i = 0; i < content.length; i++) {
    hexChar.push("0x" + content.charCodeAt(i).toString("16"));
}
var size = content.length;
var cnt = `
#ifndef __nofile_h
#define __nofile_h
#define PAGE_NOFILES_SIZE ${size}
const char PAGE_NOFILES[${size}] PROGMEM = {
    ${hexChar.join(",")}
};
#endif
`
fs.writeFileSync(`${__dirname}/../esp3d/nofile.h`, cnt);
