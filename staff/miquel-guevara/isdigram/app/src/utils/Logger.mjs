class Logger {
  static DEBUG = 0;
  static INFO = 1;
  static WARN = 2;
  static ERROR = 3;
  static FATAL = 4;

  level = Logger.DEBUG;

  #buildMessage(messages) {
    return `${new Date().toISOString()} - ${messages.join(" ")}`;
  }

  debug(...messages) {
    this.level < Logger.INFO &&
      console.debug(`🐵%c${this.#buildMessage(messages)}`, "color: #90D26D");
  }

  info(...messages) {
    this.level < Logger.WARN &&
      console.info(`🙉%c${this.#buildMessage(messages)}`, "color: #008DDA");
  }

  warn(...messages) {
    this.level < Logger.ERROR &&
      console.warn(`🙊%c${this.#buildMessage(messages)}`, "color: #FFC700");
  }

  error(...messages) {
    this.level < Logger.FATAL &&
      console.error(`🙈%c${this.#buildMessage(messages)}`, "color: #FF204E");
  }

  fatal(...messages) {
    console.error(
      `💩%c${this.#buildMessage(message)}`,
      "background-color: #E72929, color: #FFF455, padding: 0 .5rem"
    );
  }
}

export default Logger;
