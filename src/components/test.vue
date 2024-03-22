<template>
  <div>
    <input type="file" @change="handleFileUpload">
    <pre>{{ jsonData }}</pre>
  </div>
</template>

<script>
import XLSX from 'xlsx';

export default {
  data() {
    return {
      jsonData: null
    };
  },
  methods: {
    handleFileUpload(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  if (file instanceof Blob) {
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const range = XLSX.utils.decode_range(worksheet['!ref']);
      const header = [];
      const json = [];

      for (let C = range.s.c; C <= range.e.c; ++C) {
        const cell = worksheet[XLSX.utils.encode_cell({ r: range.s.r, c: C })];
        header.push(cell ? cell.v : XLSX.utils.encode_col(C));
      }

      for (let R = range.s.r + 1; R <= range.e.r; ++R) {
        const row = {};
        for (let C = range.s.c; C <= range.e.c; ++C) {
          const cell = worksheet[XLSX.utils.encode_cell({ r: R, c: C })];
          if (cell) {
            row[header[C]] = cell.v;
          }
        }
        json.push(row);
      }

      this.jsonData = JSON.stringify(json, null, 2);
    };

    reader.readAsArrayBuffer(file);
  } else {
    console.error("File type is not supported.");
  }
}

  }
};
</script>
