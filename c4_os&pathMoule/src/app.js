console.log("Hello World");


// 1). firstly telling about the path module and its purpose in node.js.
// 2). The path module provides utilities for working with file and directory paths.
// 3). It helps to handle and manipulate file paths in a cross-platform way.
// 4). It is especially useful when dealing with file paths in different operating systems (Windows, macOS, Linux) where the path separators may differ.
// 5). The path module is built into Node.js, so you don't need to install it separately.

// 6). You can require it in your Node.js application using the following code:


const path = require('path');
// 7). The path module provides several methods to work with file paths, including:
// - path.join(): Joins multiple path segments into a single path, using the appropriate separator for the current operating system.
// - path.resolve(): Resolves a sequence of paths or path segments into an absolute path.
// - path.basename(): Returns the last portion of a path, similar to the Unix basename command.
// - path.dirname(): Returns the directory name of a path, similar to the Unix dirname command.
// - path.extname(): Returns the file extension of a path, similar to the Unix command for getting file extensions.
// - path.parse(): Parses a path string into an object containing various components of the path (root, dir, base, ext, name).
// - path.format(): Formats a path object into a string.
// - path.isAbsolute(): Determines if a path is an absolute path or a relative path.
// - path.sep: The platform-specific path segment separator (e.g., '/' on Unix, '\' on Windows).
// - path.delimiter: The platform-specific path delimiter (e.g., ':' on Unix, ';' on Windows).
// - path.posix: Provides POSIX-specific path methods and properties.
// - path.win32: Provides Windows-specific path methods and properties.
// - path.normalize(): Normalizes a path, resolving '..' and '.' segments.
// - path.relative(): Returns the relative path from one path to another.
// - path.resolve(): Resolves a sequence of paths or path segments into an absolute path.



// secondly telling about network list interfaces and its purpose in node.js
// 1). The network interfaces module in Node.js provides a way to access and manage network interfaces on the system.
// 2). It allows you to retrieve information about the network interfaces available on the machine, such as their IP addresses, MAC addresses, and other properties.
// 3). This module is useful for network-related applications, such as creating servers, clients, or monitoring network activity.
// 4). The network interfaces module is built into Node.js, so you don't need to install it separately.
// 5). You can access it using the following code:
const os = require('os'); 




//   but ther is a external library called network list interfaces which is used to get the network interfaces and their details in a more user-friendly way.
// 6). You can install it using npm (Node Package Manager) with the following command:
// npm install network-list-interfaces
// 7). Once installed, you can use it in your Node.js application like this:
const networkListInterfaces = require('network-list-interfaces');
// 8). The network interfaces module provides several methods to work with network interfaces, including:
// - os.networkInterfaces(): Returns an object containing information about the network interfaces on the system.
// - os.networkInterfaces().forEach(): Iterates over the network interfaces and their addresses.
// - os.networkInterfaces().map(): Maps the network interfaces to a new array of objects containing relevant information.
// - os.networkInterfaces().filter(): Filters the network interfaces based on specific criteria (e.g., IPv4, IPv6, internal, external).
// - os.networkInterfaces().find(): Finds a specific network interface based on criteria (e.g., name, address).
// - os.networkInterfaces().get(): Retrieves a specific network interface by name or address.
// - os.networkInterfaces().getAll(): Retrieves all network interfaces on the system.
// - os.networkInterfaces().getByName(): Retrieves a specific network interface by name.
// - os.networkInterfaces().getByAddress(): Retrieves a specific network interface by address.
// - os.networkInterfaces().getByType(): Retrieves network interfaces by type (e.g., IPv4, IPv6).
// - os.networkInterfaces().getByFamily(): Retrieves network interfaces by address family (e.g., IPv4, IPv6).
// - os.networkInterfaces().getByInternal(): Retrieves network interfaces by internal/external status.
// - os.networkInterfaces().getByExternal(): Retrieves network interfaces by external/internal status.
// - os.networkInterfaces().getByMAC(): Retrieves network interfaces by MAC address.
// - os.networkInterfaces().getByIPv4(): Retrieves network interfaces by IPv4 address.
// - os.networkInterfaces().getByIPv6(): Retrieves network interfaces by IPv6 address.
// - os.networkInterfaces().getByHostname(): Retrieves network interfaces by hostname.
// - os.networkInterfaces().getByDomain(): Retrieves network interfaces by domain name.
// - os.networkInterfaces().getByNetwork(): Retrieves network interfaces by network name.
// - os.networkInterfaces().getByNetworkType(): Retrieves network interfaces by network type (e.g., Ethernet, Wi-Fi).



// 9). the telling about path module in node.js
// 10). The path module in Node.js provides utilities for working with file and directory paths.
// 11). It helps to handle and manipulate file paths in a cross-platform way, making it easier to work with file systems on different operating systems (Windows, macOS, Linux).
// 12). The path module is built into Node.js, so you don't need to install it separately.
// 13). You can require it in your Node.js application using the following code:
const path = require('path');
// 14). The path module provides several methods to work with file paths, including:
// - path.join(): Joins multiple path segments into a single path, using the appropriate separator for the current operating system.
// - path.resolve(): Resolves a sequence of paths or path segments into an absolute path.
// - path.basename(): Returns the last portion of a path, similar to the Unix basename command.
// - path.dirname(): Returns the directory name of a path, similar to the Unix dirname command.
// - path.extname(): Returns the file extension of a path, similar to the Unix command for getting file extensions.
// - path.parse(): Parses a path string into an object containing various components of the path (root, dir, base, ext, name).
// - path.format(): Formats a path object into a string.
// - path.isAbsolute(): Determines if a path is an absolute path or a relative path.
// - path.sep: The platform-specific path segment separator (e.g., '/' on Unix, '\' on Windows).
// - path.delimiter: The platform-specific path delimiter (e.g., ':' on Unix, ';' on Windows).
// - path.posix: Provides POSIX-specific path methods and properties.
// - path.win32: Provides Windows-specific path methods and properties.
// - path.normalize(): Normalizes a path, resolving '..' and '.' segments.
// - path.relative(): Returns the relative path from one path to another.   




// 15). The "NETWORK SPEED" test module in Node.js is used to measure the speed of network connections, such as download and upload speeds.
// 16). It allows you to perform network speed tests programmatically, which can be useful for applications that require network performance monitoring or testing.
// 17). The network speed test module is not built into Node.js, but there are several third-party libraries available that provide this functionality.
// 18). One popular library for performing network speed tests in Node.js is "speed-test".
// 19). You can install it using npm (Node Package Manager) with the following command:
// npm install speed-test
// 20). Once installed, you can use it in your Node.js application like this:
const speedTest = require('speed-test');
// 21). The speed-test module provides several methods to work with network speed tests, including:
// - speedTest(): Initiates a speed test and returns the results (download speed, upload speed, ping, etc.).
// - speedTest({ acceptLicense: true }): Accepts the license agreement for the speed test service.
// - speedTest({ acceptGdpr: true }): Accepts the GDPR agreement for the speed test service.
// - speedTest({ serverId: 'server-id' }): Specifies a specific server to test against.
// - speedTest({ maxTime: 5000 }): Sets the maximum time (in milliseconds) for the speed test to complete.
// - speedTest({ maxRetries: 3 }): Sets the maximum number of retries for the speed test in case of failure.
// - speedTest({ maxDownloadSpeed: 1000000 }): Sets the maximum download speed (in bytes per second) for the speed test.
// - speedTest({ maxUploadSpeed: 1000000 }): Sets the maximum upload speed (in bytes per second) for the speed test.
// - speedTest({ maxPing: 1000 }): Sets the maximum ping (in milliseconds) for the speed test.
// - speedTest({ maxJitter: 100 }): Sets the maximum jitter (in milliseconds) for the speed test.
// - speedTest({ maxPacketLoss: 0.1 }): Sets the maximum packet loss (in percentage) for the speed test.
// - speedTest({ maxLatency: 100 }): Sets the maximum latency (in milliseconds) for the speed test.
// - speedTest({ maxThroughput: 1000000 }): Sets the maximum throughput (in bytes per second) for the speed test.
// - speedTest({ maxBandwidth: 1000000 }): Sets the maximum bandwidth (in bytes per second) for the speed test.
// - speedTest({ maxConnections: 10 }): Sets the maximum number of connections for the speed test.


// REST OF WORK WLL ADDED LATER

// whenEVER I GET TIME I WILL ADD THE REST OF WORK