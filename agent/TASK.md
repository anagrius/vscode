# TASK.md - Task 1: Replace Application Logo and Name for MacOS Bundle

## Objective

Replace the VSCode application logo and name in the MacOS bundle and successfully compile the application.

3. **Modify Product Configuration**

   - Edit `product.json` in the root directory:

   ```json
   {
   	"nameShort": "Truncate",
   	"nameLong": "Truncate",
   	"applicationName": "Truncate",
   	"dataFolderName": ".Truncate",
   	"win32MutexName": "Truncate",
   	"licenseName": "Your License",
   	"licenseUrl": "Your License URL",
   	"win32DirName": "Truncate",
   	"win32NameVersion": "Truncate",
   	"win32RegValueName": "Truncate",
   	"win32AppId": "Your App ID",
   	"win32x64AppId": "Your x64 App ID",
   	"win32arm64AppId": "Your ARM64 App ID",
   	"win32UserAppId": "Your User App ID",
   	"win32x64UserAppId": "Your x64 User App ID",
   	"win32arm64UserAppId": "Your ARM64 User App ID",
   	"win32AppUserModelId": "Your App Model ID",
   	"win32ShellNameShort": "Truncate",
   	"darwinBundleIdentifier": "com.yourcompany.Truncate",
   	"linuxIconName": "com.yourcompany.Truncate",
   	"reportIssueUrl": "Your Issue URL",
   	"urlProtocol": "Truncate"
   	...
   }
   ```

4. **Replace Application Icons**

   - Replace the icon files in `resources/darwin`:

   ```bash
   cp /path/to/your/truncate.icns resources/darwin/truncate.icns
   ```

Then configure the bundle to use that icon.

5. **Update Application Name in Source Files**

   - Search for occurrences of "Visual Studio Code" and "Code" in the codebase:

   ```bash
   find . -type f -name "*.ts" -o -name "*.js" -o -name "*.html" | xargs grep -l "Code - OSS" | xargs sed -i '' 's/Code - OSS/Truncate/g'
   find . -type f -name "*.ts" -o -name "*.js" -o -name "*.html" | xargs grep -l "Code - OSS" | xargs sed -i '' 's/Code - OSS/Truncate/g'
   ```
