/* eslint-disable @typescript-eslint/explicit-function-return-type */
// Thanks to: https://dev.to/rolanddoda/deploy-to-github-pages-like-a-pro-with-github-actions-4hdg

const execa = require("execa");
const fs = require("fs");

const sourceBranch = "staging";
const targetBranch = "master";

(async () => {
  try {
    await execa("git", ["checkout", "--orphan", targetBranch]);
    console.log("Building...");
    await execa("npm", ["run", "build"]);

    // Keep anything that we want aside from the built code.
    if (fs.existsSync(".www-resources")) {
      await execa("cp", ["-a", ".www-resources/.", "dist"]);
    }
    // Understand if it's dist or build folder.
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", [
      "--work-tree",
      folderName,
      "commit",
      "-m",
      targetBranch,
    ]);
    console.log(`Pushing to ${targetBranch}...`);
    await execa("git", ["push", "origin", `HEAD:${targetBranch}`, "--force"]);
    await execa("rm", ["-r", folderName]);
    await execa("git", ["checkout", "-f", sourceBranch]);
    await execa("git", ["branch", "-D", targetBranch]);
    console.log("Successfully deployed!");
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();
