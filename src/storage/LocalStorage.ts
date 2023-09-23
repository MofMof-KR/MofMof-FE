export class LocalStorage {
  private key;
  constructor() {
    this.key = 'ACCESS_TOKEN';
  }

  save(token: string) {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(this.key, `Bearer ${token}`);
    }
  }

  get() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.key);
    }
    return null;
  }

  delete() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.key);
    }
  }
}
