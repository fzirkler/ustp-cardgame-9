Deployment (GitHub Pages)

This project includes a GitHub Actions workflow to deploy the built static site to GitHub Pages. The workflow is manual-only and will not run automatically; you must call it from the Actions tab.

How to deploy:

1. Go to the repository on GitHub.
2. Open the **Settings -> Pages** page and ensure Pages is either set to deploy from GitHub Actions or the repository is configured to allow Pages deployments from Actions.
3. In **Settings -> Actions -> General**, verify that workflows from Actions are allowed to publish to GitHub Pages. If this is your first deployment, you may be prompted to authorize the Actions workflow.
4. Open the **Actions** tab, select **Deploy to GitHub Pages**, click **Run workflow** and select the branch to publish (e.g., `main`).

After the workflow completes, your site will be available at:

`https://<owner>.github.io/ustp-cardgame-9/`

Replace `<owner>` with your GitHub username or organization name (e.g., `fzirkler`).

Note: The Vite configuration has been updated to set the base path for GitHub Pages during the workflow build (`GITHUB_PAGES=true`). The local dev server is unaffected.
