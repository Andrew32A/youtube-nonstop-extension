function clickContinueButton() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    const text = button.innerText.trim();

    // check if the button text matches what you expect
    // (depending on YouTube’s language/settings, this might need changes, since it's for personal use it's fine for now)
    if (text === "Yes" || text === "Continue") {
      // ensure the button is visible (not hidden by CSS)
      if (button.offsetParent !== null) {
        button.click();
        console.log("Auto-clicked the continue button.");
      }
    }
  });
}

// use a MutationObserver to watch for new nodes being added to the page.
const observer = new MutationObserver((mutationsList) => {
  for (let mutation of mutationsList) {
    if (mutation.addedNodes.length > 0) {
      clickContinueButton();
    }
  }
});

// start observing the document body for any changes in its child nodes or subtrees
observer.observe(document.body, { childList: true, subtree: true });

// just in case, also run the check periodically (every 1 second)
setInterval(clickContinueButton, 1000);
