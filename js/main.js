const end = document.getElementById("end");
const lowestNote = document.getElementById("lowestNote");
const error = document.getElementById("error");
const result = document.getElementById("result");

const tones = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "H"];

const standardZeroFret = ["E", "A", "D", "G", "H", "E"];

function shiftTone(baseTone, semitoneShift) {
  const baseIndex = tones.indexOf(baseTone);
  const newIndex = (baseIndex + semitoneShift + tones.length) % tones.length;
  return tones[newIndex];
}

end.addEventListener("click", function () {
  const value = lowestNote.value.toUpperCase().trim();
  const drop = document.getElementById("drop").checked;
  const standart = document.getElementById("standart").checked;

  if (!tones.includes(value)) {
    error.textContent = "špatný tón";
    result.textContent = "";
    return;
  }

  if (!drop && !standart) {
    error.textContent = "vyber způsob hraní";
    result.textContent = "";
    return;
  }

  error.textContent = "";

  
  const shift = (tones.indexOf(value) - tones.indexOf("E") + tones.length) % tones.length;

  let results = [];

  if (standart) {
    results = standardZeroFret.map(note => shiftTone(note, shift));
    result.textContent = `Naladění (standard): ${results.join(" - ")}`;
  }

  if (drop) {
    const droped = ["E", "H", "E", "A", "C#", "F#"];
    results = droped.map(note => shiftTone(note, shift));
    result.textContent = `Naladění (drop): ${results.join(" - ")}`;
  }
});


