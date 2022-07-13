class Person {
  constructor() {
    this._todoBody = document.getElementById("todoBody");
  }
  get clearing() {
    while (this._todoBody.firstChild) {
      this._todoBody.removeChild(this._todoBody.firstChild);
    }
  }
}
