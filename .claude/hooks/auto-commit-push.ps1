# Auto-save hook for the SLK Media Agency website project.
# Runs every time Claude Code finishes working. If any file changed, it
# commits the change to git. If the GitHub remote exists, it also pushes,
# which makes Vercel redeploy the live site automatically.

$ErrorActionPreference = "Continue"

# Nothing to do when no files changed
$changes = git status --porcelain
if (-not $changes) { exit 0 }

git add -A | Out-Null
$stamp = Get-Date -Format "yyyy-MM-dd HH:mm"
git commit --quiet -m "Site update ($stamp)" | Out-Null
if ($LASTEXITCODE -ne 0) { exit 0 }

$message = "Auto-saved your site changes to git."

# Push only when a GitHub remote has been connected
$remotes = git remote
if ($remotes -and ($remotes -contains "origin")) {
    git push origin HEAD --quiet 2>&1 | Out-Null
    if ($LASTEXITCODE -eq 0) {
        $message = "Auto-saved your site changes and pushed them to GitHub. Vercel will redeploy the live site in about two minutes."
    } else {
        $message = "Auto-saved your site changes to git. Pushing to GitHub did not work this time; it will retry after the next change."
    }
}

Write-Output ("{""systemMessage"": ""$message""}")
exit 0
