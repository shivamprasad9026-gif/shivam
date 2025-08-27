# GitHub Pages Deployment Guide

Follow these step-by-step instructions to deploy Shivam Prasad's portfolio to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- Basic knowledge of Git commands

## Step 1: Create GitHub Repository

1. **Log in to GitHub** and click the "+" icon in the top right corner
2. **Select "New repository"**
3. **Repository name**: `shivam-portfolio` (or any name you prefer)
4. **Description**: "Professional portfolio of Shivam Prasad - Team Lead & Sales Professional"
5. **Set to Public** (required for free GitHub Pages)
6. **Do NOT initialize** with README, .gitignore, or license (we already have files)
7. **Click "Create repository"**

## Step 2: Initialize Local Repository

Open terminal/command prompt in your portfolio folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Professional portfolio for Shivam Prasad"

# Set main branch
git branch -M main

# Add remote origin (replace 'yourusername' with your GitHub username)
git remote add origin https://github.com/yourusername/shivam-portfolio.git

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click on "Settings"** tab (top right of repository page)
3. **Scroll down** to "Pages" section in the left sidebar
4. **Under "Source"**, select "Deploy from a branch"
5. **Select "main" branch** and "/ (root)" folder
6. **Click "Save"**

## Step 4: Access Your Portfolio

1. **Wait 2-5 minutes** for deployment to complete
2. **Your portfolio will be available at**:
   ```
   https://yourusername.github.io/shivam-portfolio
   ```
3. **GitHub will show the URL** in the Pages settings once it's ready

## Step 5: Custom Domain (Optional)

If you have a custom domain:

1. **Add a CNAME file** to your repository root:
   ```bash
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. **Configure DNS** with your domain provider:
   - Add CNAME record pointing to `yourusername.github.io`

## Updating Your Portfolio

To make changes to your portfolio:

```bash
# Make your changes to the files
# Then commit and push:

git add .
git commit -m "Update portfolio content"
git push
```

Changes will automatically deploy to GitHub Pages within a few minutes.

## Troubleshooting

### Common Issues:

1. **404 Error**: 
   - Ensure `index.html` is in the root directory
   - Check that GitHub Pages is enabled
   - Wait a few more minutes for deployment

2. **CSS/JS Not Loading**:
   - Check file paths in `index.html`
   - Ensure all files are committed and pushed

3. **Changes Not Showing**:
   - Clear browser cache
   - Wait 5-10 minutes for GitHub Pages to update
   - Check that changes were properly committed and pushed

### Verification Steps:

1. **Check repository files** are all present on GitHub
2. **Verify GitHub Pages is enabled** in Settings
3. **Test the live URL** in an incognito/private browser window

## Additional Tips

1. **Use descriptive commit messages** for better tracking
2. **Test locally** before pushing changes
3. **Keep backups** of your portfolio files
4. **Monitor GitHub Pages status** if issues arise

## Support

If you encounter issues:

1. Check GitHub Pages documentation
2. Verify all files are properly uploaded
3. Ensure repository is public
4. Contact GitHub support if needed

---

**Your portfolio should now be live and accessible to the world!**

Remember to share your portfolio URL:
`https://yourusername.github.io/shivam-portfolio`
