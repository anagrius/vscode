# TASK.md - Task 1: Replace Application Logo and Name for MacOS Bundle

## Objective

Replace the VSCode application logo and name in the MacOS bundle and successfully compile the application.

## Prerequisites

- Git installed
- Node.js (version recommended by VSCode build docs)
- Yarn package manager
- Xcode and macOS development tools
- Basic knowledge of macOS application bundles
- New application logo (in .icns format)
- New application name

## Steps

1. **Clone the VSCode Repository**

   ```bash
   git clone https://github.com/microsoft/vscode.git legalide
   cd legalide
   ```

2. **Install Dependencies**

   ```bash
   yarn
   ```

3. **Modify Product Configuration**

   - Edit `product.json` in the root directory:

   ```json
   {
     "nameShort": "LegalIDE",
     "nameLong": "LegalIDE - Document Crafting Environment",
     "applicationName": "legalide",
     "dataFolderName": ".legalide",
     "win32MutexName": "legalide",
     "licenseName": "Your License",
     "licenseUrl": "Your License URL",
     "win32DirName": "LegalIDE",
     "win32NameVersion": "LegalIDE",
     "win32RegValueName": "LegalIDE",
     "win32AppId": "Your App ID",
     "win32x64AppId": "Your x64 App ID",
     "win32arm64AppId": "Your ARM64 App ID",
     "win32UserAppId": "Your User App ID",
     "win32x64UserAppId": "Your x64 User App ID",
     "win32arm64UserAppId": "Your ARM64 User App ID",
     "win32AppUserModelId": "Your App Model ID",
     "win32ShellNameShort": "LegalIDE",
     "darwinBundleIdentifier": "com.yourcompany.legalide",
     "linuxIconName": "com.yourcompany.legalide",
     "reportIssueUrl": "Your Issue URL",
     "urlProtocol": "legalide"
   }
   ```

4. **Replace Application Icons**

   - Replace the icon files in `resources/darwin`:

   ```bash
   cp /path/to/your/legalide.icns resources/darwin/code.icns
   ```

   - Also replace icons in other relevant locations:

   ```bash
   cp /path/to/your/legalide.icns resources/darwin/code-insiders.icns
   cp /path/to/your/legalide.icns resources/darwin/code-stable.icns
   ```

5. **Update Application Name in Source Files**

   - Search for occurrences of "Visual Studio Code" and "Code" in the codebase:

   ```bash
   find . -type f -name "*.ts" -o -name "*.js" -o -name "*.html" | xargs grep -l "Visual Studio Code" | xargs sed -i '' 's/Visual Studio Code/LegalIDE/g'
   find . -type f -name "*.ts" -o -name "*.js" -o -name "*.html" | xargs grep -l "VS Code" | xargs sed -i '' 's/VS Code/LegalIDE/g'
   ```

6. **Update Package Information**

   - Modify `package.json` to reflect your application:

   ```bash
   sed -i '' 's/"name": "code"/"name": "legalide"/g' package.json
   sed -i '' 's/"displayName": "Visual Studio Code"/"displayName": "LegalIDE"/g' package.json
   ```

7. **Build the Application**

   ```bash
   yarn gulp compile
   yarn gulp optimize
   yarn gulp darwin-x64
   ```

8. **Test the Build**

   - Check the generated application in the `/.build/darwin/` directory
   - Verify the application name and icon are correctly displayed

9. **Create a DMG Installer (Optional)**
   ```bash
   yarn gulp vscode-darwin-x64-min
   yarn gulp vscode-darwin-x64-prepare-dmg
   yarn gulp vscode-darwin-x64-dmg
   ```

## Verification

- Launch the compiled application
- Verify the application appears with the new name in Dock, menu bar, and About dialog
- Confirm the new icon appears in Finder, Dock, and application switcher
- Check that application preferences are stored in the new location (~/Library/Application Support/LegalIDE)

## Troubleshooting

- If icon doesn't update, clear macOS icon cache:
  ```bash
  sudo rm -rfv /Library/Caches/com.apple.iconservices.store
  sudo find /private/var/folders/ -name com.apple.dock.iconcache -exec rm {} \;
  sudo find /private/var/folders/ -name com.apple.iconservices -exec rm -rf {} \;
  killall Dock
  killall Finder
  ```
- For build errors, check the VSCode wiki for current build requirements
