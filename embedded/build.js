var fs = require("fs");

function GetBinaryArray(filename) {
    var content = fs.readFileSync(filename, "binary");
    var hexChar = [];
    for (var i = 0; i < content.length; i++) {
        hexChar.push("0x" + content.charCodeAt(i).toString("16"));
    }
    var size = content.length;
    return {
        size: size,
        content: hexChar.join(",")
    }
}
function writeMain() {
    // var { content, size } = GetBinaryArray("./tool.html.gz");

    var cnt = `
    #ifndef __nofile_h
    #define __nofile_h
    #define PAGE_NOFILES_SIZE ${1}
    const char PAGE_NOFILES[${1}] PROGMEM = {
        1
    };
    #endif
    `
    fs.writeFileSync(`${__dirname}/../esp3d/nofile.h`, cnt);
}
function writeSetting() {
    // var { content, size } = GetBinaryArray(`${__dirname}/../esp3d/data/index.html.gz`);
    var cnt = `
    #ifndef __SETTINGSHTML_H
    #define __SETTINGSHTML_H
    #define PAGE_SETTINGS_SIZE ${1}
    const char PAGE_SETTINGS[${1}] PROGMEM = {
        1
    };
    #endif
    `
    fs.writeFileSync(`${__dirname}/../esp3d/settings_html.h`, cnt);
}
var cnt=fs.readFileSync("./dist/tool.html");
fs.writeFileSync(__dirname+"/../esp3d/data/index.html",cnt);
// fs.readFileSync("./dist/tool.html");

writeMain();
// build binary for setting files
writeSetting();
