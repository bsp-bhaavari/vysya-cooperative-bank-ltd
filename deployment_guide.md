# Website Deployment Guide for vcbltkr.com

This guide provides the steps to deploy the website using the pre-compiled build.zip file.

The deployment package is located at:
/Users/saieeshwar/Projects/Work/work/vysya-cooperative-bank/build.zip

---

## Option 1: Deploying via Bluehost (Recommended & Safest)

Use this option if you want to keep your current hosting and email configurations active without DNS propagation delays.

### Step 1: Log in to Bluehost
1. Open your browser and go to www.bluehost.in
2. Click Login in the top-right corner, select Hosting Login, and enter your credentials.

### Step 2: Open File Manager
1. In the Bluehost Dashboard, click on Advanced (or cPanel) on the left sidebar.
2. Under the Files section, click on File Manager.

### Step 3: Navigate to Website Root
1. Double-click the public_html folder in the File Manager directory listing.

### Step 4: Backup Existing Files
1. Click Select All from the top toolbar.
2. Click Compress in the top toolbar, select Zip Archive, name it backup_old_site.zip, and click Compress Files.
3. Create a new folder named old_website_backup and move all files except backup_old_site.zip into it.

### Step 5: Upload and Extract build.zip
1. Click the Upload button in the top toolbar.
2. Select the file build.zip from your computer.
3. Wait for the upload to reach 100% and turn green, then go back to the public_html directory.
4. Right-click build.zip and select Extract.
5. Set the extraction path to /public_html and confirm.
6. Delete the build.zip file once extraction completes.

---

## Option 2: Deploying via BigRock (Hosting Switch)

Use this option if you want to switch your active web hosting from Bluehost to BigRock.

### Step 1: Update Name Servers
1. Log in to the BigRock Control Panel at myorders.bigrock.in
2. Locate the Name Servers & DNS section.
3. Click the Name Servers button.
4. Replace the current Bluehost name servers (ns1.bluehost.in, ns2.bluehost.in) with your BigRock hosting name servers.
5. Click Update Name Servers. (Note: DNS changes can take 1 to 24 hours to take effect).

### Step 2: Open File Manager in BigRock
1. In the BigRock Control Panel, go to your active hosting order.
2. Click Manage Web Hosting to log into cPanel.
3. Open the File Manager and double-click the public_html folder.

### Step 3: Backup Existing Files
1. Click Select All from the top toolbar.
2. Click Compress, select Zip Archive, name it backup_old.zip, and click Compress Files.
3. Create a new folder named old_site_backup and move the old files into it.

### Step 4: Upload and Extract build.zip
1. Click the Upload button in the top toolbar.
2. Select build.zip from your computer.
3. Once the upload finishes, return to public_html.
4. Right-click build.zip, select Extract, set the extraction path to /public_html, and confirm.
5. Delete the build.zip file.
