# Repository Setup Guide for DevSecOps-PFA Project

## 1. Introduction

This guide outlines the steps to set up our repository for the DevSecOps-PFA project. It covers:
- Installing Git on your operating system.
- Creating a repository on GitHub/GitLab.
- Cloning the repository locally.
- Making an initial commit.
- Documenting the process for both DevOps and Cybersecurity perspectives.

## 2. Prerequisites

- **Computer with Internet Access**
- **Git Installed** (instructions provided below)
- **GitHub or GitLab Account**

## 3. Installing Git

### Windows
1. Download Git from [git-scm.com/download/win](https://git-scm.com/download/win).
2. Run the installer and follow the default prompts.
3. Verify the installation by opening Command Prompt and running:
   ```bash
   git --version
   ```

### macOS
1. **Using Homebrew:**  
   Open Terminal and run:
   ```bash
   brew install git
   ```
2. **Or Download:**  
   Get Git from [git-scm.com/download/mac](https://git-scm.com/download/mac).
3. Verify installation:
   ```bash
   git --version
   ```

### Linux (Debian/Ubuntu)
1. Update package lists:
   ```bash
   sudo apt-get update
   ```
2. Install Git:
   ```bash
   sudo apt-get install git
   ```
3. Verify installation:
   ```bash
   git --version
   ```

## 4. Creating the Repository on GitHub/GitLab

1. **Log In:**  
   Sign into your GitHub ([github.com](https://github.com)) or GitLab ([gitlab.com](https://gitlab.com)) account.
2. **New Repository:**  
   Click on “New Repository.”
3. **Set Repository Name:**  
   Name your repository `DevSecOps-PFA`.
4. **Initialize Repository:**  
   Optionally, add a README.md to outline the project.
5. **Set Visibility:**  
   Choose whether the repo is Public or Private.
6. **Create:**  
   Click “Create Repository.”

## 5. Cloning the Repository Locally

1. **Copy Repository URL:**  
   From your repository page, copy the HTTPS URL.
2. **Open Terminal:**  
   Navigate to your desired directory.
3. **Clone Repository:**  
   Run:
   ```bash
   git clone https://github.com/your-username/DevSecOps-PFA.git
   ```
4. **Navigate Into the Directory:**
   ```bash
   cd DevSecOps-PFA
   ```

## 6. Initial Commit Process

1. **Create an Initialization File:**  
   Create a file named `INIT.txt` with the initial project message:
   ```bash
   echo "Project Initialization - DevSecOps PFA" > INIT.txt
   ```
2. **Stage the File:**  
   Add the file to the staging area:
   ```bash
   git add INIT.txt
   ```
3. **Commit the File:**  
   Commit with a clear, descriptive message:
   ```bash
   git commit -m "Initial commit: Added INIT.txt for project initialization"
   ```
4. **Push to Remote Repository:**  
   Push your commit:
   ```bash
   git push origin main
   ```

## 7. Documenting the Process

### Purpose
Documenting each step ensures all team members understand the setup process, making it easier to troubleshoot, onboard new members, and maintain security through clear version history.

### What to Document
- **Git Installation:**  
  Include instructions and links for installing Git on Windows, macOS, or Linux.
  
- **Repository Creation:**  
  Detail the steps for creating the repository on GitHub/GitLab, with screenshots if possible.
  
- **Cloning the Repo:**  
  Provide the exact commands to clone the repository.
  
- **Initial Commit:**  
  Record the commands used for staging, committing, and pushing changes. Explain the importance of clear commit messages.
  
- **Commit Guidelines:**  
  - Use the imperative mood (e.g., "Add", "Fix", "Implement").
  - Write clear and descriptive messages.
  - Reference any related tasks or issues if applicable.
  
- **Troubleshooting Section:**  
  - Common issues such as authentication errors.
  - How to resolve merge conflicts.
  - Links to additional Git resources.

### Organizing the Documentation
- **File Location:**  
  Save this document as `Repository_Setup_Guide.md` in your project repository.
  
- **Shared Folder:**  
  Maintain a shared documentation folder (Google Drive, OneDrive, etc.) for:
  - Project scope and objectives.
  - Setup guides.
  - Research summaries (including “Git Basics for Security”).
  - Weekly reports and meeting notes.

## 8. Git Basics for Security (Cybersecurity Perspective)

### Security Benefits of Version Control
- **Audit Trail:**  
  Each commit records changes with timestamps, authors, and commit messages, creating a clear history for tracking vulnerabilities.
  
- **Rollback Capabilities:**  
  Git allows you to revert to previous, stable versions of your code, minimizing the risk if insecure code is committed.
  
- **Branch Isolation:**  
  Isolate new features or security updates in branches. This helps prevent introducing insecure code into the main branch.
  
- **Collaboration & Accountability:**  
  Transparent commit histories promote accountability and facilitate peer reviews, ensuring that secure coding practices are followed.
  
- **Enforcing Secure Practices:**  
  Regular commits and code reviews ensure that any potential security issues are identified and addressed promptly.

### Resources for Learning Git
- [Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials/what-is-version-control)
- [Git SCM Book](https://git-scm.com/book/en/v2)
- [GitHub Docs](https://docs.github.com/en)

## 9. Next Steps

After completing this setup, the next steps include:
- **Developing the “Hello World” Web Application:**  
  Create your basic application using Flask or Express.
- **Integrating Security Practices:**  
  Begin incorporating security checks and further secure coding practices as outlined in the “Git Basics for Security” summary.
- **Scheduling a Review:**  
  Organize a meeting at the end of Week 1 to ensure the repository is functioning properly and the documentation is complete.
