import 'requestidlecallback/index';

// TODO: replace console.log with fetch to the error dump endpoint
export class Logger {
    private pendingLogs: Array<Error | string> = [];
    private static _lazy: Logger;

    static get instance(): Logger {
        if (!Logger._lazy) {
            Logger._lazy = new Logger();
        }

        return Logger._lazy;
    }

    flushPendingLogs(): void {
        this.pendingLogs.map(log => requestIdleCallback((idleTime) => {
            if (idleTime.timeRemaining() > 0) {
                console.log('error from pending', log);
            }
        }, { timeout: 1000 }));

        this.pendingLogs = [];
    }

    error(errorPayload: Error | string): void {
        requestIdleCallback((idleTime) => {
            if (idleTime.timeRemaining() > 8) {
                console.log('error', errorPayload);
            } else {
                this.pendingLogs.push(errorPayload);
                this.flushPendingLogs();
            }
        }, { timeout: 10 })
    }
}

export const LoggerInstance = Logger.instance;
