// declare global {
interface Window {
    versions: {
        getServers: () => Promise<string[]>,
        upload: (path: string) => Promise<bool>
    };
}
// }
// declare var window: Window;