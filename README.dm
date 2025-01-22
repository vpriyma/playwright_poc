INSTALL PACKAGES
npm install

RUN TEST
npx playwright test {filename}

CONSOLE DEBUGGING
The DEBUG=pw:api command is for enabling Playwright debugging.

- If you're using Windows Command Prompt, use set DEBUG=pw:api.

- For PowerShell, use $env:DEBUG="pw:api".

- On Linux/Mac, the original command works fine.

Run your script in the same terminal after setting this to see the debug output. No extra library is needed.

INSPECTOR
$env:PWDEBUG=1  
or use  
await page.pause();