import Cl_profesor from "./Cl_profesor.js";

export default class Cl_contratado extends Cl_profesor {
    constructor(nombre, bono, horas) {
        super(nombre, bono);
        this._horas = +horas;
    }

    ingresoTotal() {
        return this._bono + (this._horas * 10);
    }
}