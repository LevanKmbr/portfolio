// მივიღოთ ღილაკი
const backToTopBtn = document.getElementById("backToTop");

// მოვუსმინოთ scroll-ს
window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// ღილაკზე კლიკი — გვერდი ზევით გაიტანოს სუფთად
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ------------------------------

const copyEmailBtn = document.getElementById("copyEmailBtn");
const emailText = document.getElementById("emailText");
const copyMsg = document.getElementById("copyMsg");

copyEmailBtn.addEventListener("click", () => {
  // Email-ის ტექსტის დაკოპირება clipboard-ში
  navigator.clipboard
    .writeText(emailText.textContent)
    .then(() => {
      // წარმატების შემთხვევაში
      copyMsg.style.display = "inline";
      setTimeout(() => {
        copyMsg.style.display = "none";
      }, 1500); // 1.5 წამში ქრება
    })
    .catch((err) => {
      console.error("Copy failed:", err);
    });
});

// ეფექტები

document.addEventListener("click", function (e) {
  const smoke = document.createElement("span");
  smoke.className = "smoke";
  smoke.style.left = e.clientX + "px";
  smoke.style.top = e.clientY + "px";
  document.body.appendChild(smoke);

  setTimeout(() => {
    smoke.remove();
  }, 1500);
});
