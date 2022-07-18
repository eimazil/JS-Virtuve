class Kaitlente {
  constructor(skyliuKiekis) {
    this.size = skyliuKiekis;
  }
  render() {
    const mainEl = document.querySelector("main");

    const columns = Math.ceil(Math.sqrt(this.size));

    const width = 120 * columns + 2;

    const HTML = `<div style="width: ${width}px" class="kaitlente">
      <div class="top">
        ${'<div class="skyle"></div>'.repeat(this.size)}
      </div>
      <div class="bottom">
        ${`<div data-kaitlente-index=${this.size} class="jungiklis"></div>`.repeat(
          this.size
        )}
      </div>`;

    mainEl.innerHTML += HTML;
    this.enableClick();
  }
  enableClick() {
    const jungikliaiArr = Array.from(document.querySelectorAll(".jungiklis"));

    const skylesArr = Array.from(document.querySelectorAll(".skyle"));

    // jungikliaiArr.forEach((jungiklisEl) => {
    //   jungiklisEl.addEventListener("click", () => {
    //     const targetJungiklis = jungikliaiArr.indexOf(jungiklisEl);
    //     skylesArr[targetJungiklis].classList.toggle("karsta");
    //     jungikliaiArr[targetJungiklis].classList.toggle("karsta");
    //   });
    // });
    jungikliaiArr.forEach((jungiklisEl) => {
      jungiklisEl.addEventListener("click", (e) => {
        const targetJungiklis = e.target.closest(".jungiklis");

        const targetIndex = jungikliaiArr.findIndex(
          (jungiklis) => jungiklis === targetJungiklis
        );

        jungikliaiArr[targetIndex].classList.toggle("karsta");
        skylesArr[targetIndex].classList.toggle("karsta");
      });
    });
  }
}

// Kaitlente.enableClick();

export { Kaitlente };
