class CurrentDate {
   constructor() {
      this.dateCurrent = new Date();
   }

   FullDate() {
      const format = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      const convertBR = this.dateCurrent.toLocaleDateString("pt-BR", format);
      const date = convertBR[0].toUpperCase() + convertBR.substr(1);

      return date;
   }

   ConvertHours(timestamp) {
      const hours = new Date(timestamp * 1000);
      function pad(s) {
         return s < 10 ? "0" + s : s;
      }
      return [hours.getHours(), hours.getMinutes()].map(pad).join(":");
   }
}

export default CurrentDate;
