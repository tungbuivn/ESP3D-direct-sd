//LLRP DEVICE SCANNER
var net = require('net'), Socket = net.Socket;

var checkPort = function (port: number, host: string, callback: (...args: any) => void) {
    var socket = new Socket(), status: string = null;

    // Socket connection established, port is open
    socket.on('connect', function () { status = 'open'; socket.end(); });
    socket.setTimeout(1500);// If no response, assume port is not listening
    socket.on('timeout', function () { status = 'closed'; socket.destroy(); });
    socket.on('error', function (_exception: any) { status = 'closed'; });
    socket.on('close', function (_exception: any) { callback(null, status, host, port); });

    socket.connect(port, host);
}
export async function scanServer() {
    var LAN = '192.168.1'; //Local area network to scan (this is rough)
    var LLRP = 22; //globally recognized LLRP port for RFID readers
    var found: Promise<string>[] = [];

    //scan over a range of IP addresses and execute a function each time the LLRP port is shown to be open.
    for (var i = 1; i <= 255; i++) {
        found.push(new Promise((resolve) => {
            checkPort(LLRP, LAN + '.' + i, function (error, status, host, port) {
                if (status == "open") {
                    resolve(`${host}`);
                    console.log("Reader found: ", host, port, status);
                } else {
                    resolve("");
                }
            });
        }))

    }
    var rs = await Promise.all(found);
    return rs.filter(o => o != "");
}
