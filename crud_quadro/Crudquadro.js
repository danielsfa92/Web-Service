class QuadroCrud {
  constructor() {
    this.id = 0;
    this.quadros = new Map();
  }

  create(quadro) {
    this.quadros.set(++this.id, this.quadro);
  }

  read(id) {
    return this.quadros.get(id);
  }

  readAll() {
    return Array.from(this.quadros.values());
  }

  update(id, quadro) {
    for (let key of this.quadros.keys()) {
      if (key === id) {
        this.quadros.set(id, quadro);
        break;
      }
    }
  }

  delete(id) {
    this.quadros.delete(id);
  }
}

module.export = QuadroCrud;