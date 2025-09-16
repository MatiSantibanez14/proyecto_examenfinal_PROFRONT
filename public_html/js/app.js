const { createApp } = Vue;

createApp({
  data() {
    return {
      grade1: null,
      grade2: null,
      grade3: null,
      attendance: null,
      calcResult: null,
      calcStatus: null,
      calcMessage: '',

      regName: '',
      regEmail: '',
      regPass: '',
      regPass2: ''
    };
  },
  methods: {
    validateAndCalculate(event) {
      const form = event.target; // referencia al <form>
      if (!form.checkValidity()) {
        form.reportValidity(); // muestra globos nativos
        return;
      }
      this.calculate();
    },
    calculate() {
      const g1 = Number(this.grade1);
      const g2 = Number(this.grade2);
      const g3 = Number(this.grade3);
      const att = Number(this.attendance);

      const avg = (g1 * 0.35) + (g2 * 0.35) + (g3 * 0.30);
      this.calcResult = avg.toFixed(2);

      if (avg >= 40 && att >= 80) {
        this.calcStatus = 'Aprobado';
        this.calcMessage = 'Cumple requisitos de promedio y asistencia.';
      } else {
        this.calcStatus = 'Reprobado';
        let reasons = [];
        if (avg < 40) reasons.push('Promedio menor a 40.');
        if (att < 80) reasons.push('Asistencia menor a 80%.');
        this.calcMessage = reasons.join(' ');
      }
    },
    resetCalc() {
      this.grade1 = this.grade2 = this.grade3 = this.attendance = null;
      this.calcResult = null;
      this.calcStatus = null;
      this.calcMessage = '';
    },
    validateAndRegister(event) {
      const form = event.target;
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      if (this.regPass !== this.regPass2) {
        alert("Las contraseñas no coinciden.");
        return;
      }
      alert("El registro se ha realizado correctamente");
      this.resetReg();
    },
    resetReg() {
      this.regName = '';
      this.regEmail = '';
      this.regPass = '';
      this.regPass2 = '';
    }
  }
}).mount('#app');


