const fs = require("fs");
const path = require("path");
const quranPath = "أحمد العجمي";
const arabicNamesFilePath = "arabic_names.txt";
fs.readdir(quranPath, (err, files) => {
  if (err) {
    return;
  }

  fs.readFile(arabicNamesFilePath, "utf8", (err, data) => {
    if (err) {
      return;
    }
    const arabicNames = data.trim().split("\n");
    // console.log(data);
    files.forEach((file, index) => {
      const oldFilePath = path.join(quranPath, file);
      const newFileName = `${index + 1}. ${arabicNames[index].trim()}.mp3`; //let it be 1.الفاتحة
      const newFilePath = path.join(quranPath, newFileName);

      fs.rename(oldFilePath, newFilePath, (err) => {
        if (err) {
          console.error("Error renaming file:", err);
        }
      });
    });
  });
});
