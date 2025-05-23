// Function to add GitHub PR link
function addGitHubLink() {
  // Check if we're on a Graphite PR page
  const url = window.location.href;
  const match = url.match(
    /https:\/\/app\.graphite\.dev\/github\/pr\/([^/]+)\/([^/]+)\/(\d+)/
  );

  if (!match) return;

  const [_, owner, repo, prNumber] = match;
  const githubUrl = `https://github.com/${owner}/${repo}/pull/${prNumber}`;

  // Find the "More actions" button
  const moreActionsButtons = Array.from(
    document.querySelectorAll("button")
  ).filter((button) => {
    const labelledBy = button.getAttribute("aria-labelledby");
    if (!labelledBy) return false;

    const label = document.getElementById(labelledBy);
    return label && label.textContent === "More actions";
  });

  if (moreActionsButtons.length === 0) return;

  // Create GitHub link button
  const githubLink = document.createElement("a");
  githubLink.href = githubUrl;
  githubLink.target = "_blank";
  githubLink.rel = "noopener noreferrer";
  githubLink.className = "github-pr-link";
  githubLink.style.display = "inline-flex";
  githubLink.style.alignItems = "center";
  githubLink.style.justifyContent = "center";
  githubLink.style.padding = "6px 12px";
  githubLink.style.marginRight = "8px";
  githubLink.style.borderRadius = "4px";
  githubLink.style.backgroundColor = "#2da44e";
  githubLink.style.color = "white";
  githubLink.style.fontWeight = "500";
  githubLink.style.textDecoration = "none";
  githubLink.style.fontSize = "14px";
  githubLink.style.transition = "background-color 0.2s";

  githubLink.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style="margin-right: 6px;">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
    </svg>
    View on GitHub
  `;

  // Add hover effect
  githubLink.addEventListener("mouseover", () => {
    githubLink.style.backgroundColor = "#2c974b";
  });

  githubLink.addEventListener("mouseout", () => {
    githubLink.style.backgroundColor = "#2da44e";
  });

  // Insert the link before the "More actions" button
  const moreActionsButton = moreActionsButtons[0];
  moreActionsButton.parentNode.insertBefore(githubLink, moreActionsButton);
}

// Run when page loads
addGitHubLink();

// Also run when the DOM changes, as Graphite is a SPA
const observer = new MutationObserver(() => {
  // Check if our link already exists
  if (!document.querySelector(".github-pr-link")) {
    addGitHubLink();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
