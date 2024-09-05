import Styles from './styles';

type Prefix = string | (() => string);

export class Color {
  public color: string;
  public prefix: Prefix;
  private disabled = false;

  public constructor(color: string, prefix: Prefix = '') {
    this.color = color;
    this.prefix = prefix;
  }

  public log(message: string) {
    if (!this.disabled) {
      let prefix = this.prefix;
      if (prefix instanceof Function) {
        prefix = prefix();
      }
      console.log([this.color, prefix, message, Styles.Reset].join(''));
    }
  }

  public disable() {
    this.disabled = true;
  }
}

export class Blue extends Color {
  public constructor(prefix: Prefix = '[Info]: ') {
    super(Styles.FgBlue, prefix);
  }
}

export class Green extends Color {
  public constructor(prefix: Prefix = '[Done]: ') {
    super(Styles.FgGreen, prefix);
  }
}

export class Red extends Color {
  public constructor(prefix: Prefix = '[Error]: ') {
    super(Styles.FgRed, prefix);
  }
}

export class Yellow extends Color {
  public constructor(prefix: Prefix = '[Warn]: ') {
    super(Styles.FgYellow, prefix);
  }
}

export class Black extends Color {
  public constructor(prefix: Prefix = '') {
    super(Styles.FgBlack, prefix);
  }
}

export class White extends Color {
  public constructor(prefix: Prefix = '') {
    super(Styles.FgWhite, prefix);
  }
}
