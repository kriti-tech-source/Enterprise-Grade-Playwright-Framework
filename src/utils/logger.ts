export class Logger {
  static info(message: string) {
    console.log(`[INFO] [${new Date().toISOString()}] ${message}`);
  }

  static error(message: string) {
    console.error(`[ERROR] [${new Date().toISOString()}] ${message}`);
  }

  static debug(message: string) {
    if (process.env.DEBUG === 'true') {
      console.log(`[DEBUG] ${message}`);
    }
  }
}