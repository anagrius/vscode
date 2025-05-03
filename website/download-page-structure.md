# Download Page Structure

This document outlines the HTML structure for the download page (download.html) of the Truncate website.

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Download Truncate - AI Legal Work Environment</title>
		<link rel="stylesheet" href="assets/css/styles.css" />
		<link rel="icon" href="assets/images/favicon.ico" />
		<!-- Add Google Fonts link here (e.g., Inter, Roboto) -->
	</head>
	<body class="dark-theme">
		<!-- Header -->
		<header>
			<div class="container">
				<div class="logo">
					<a href="index.html">
						<img src="assets/images/logo.svg" alt="Truncate Logo" />
					</a>
				</div>
				<nav>
					<ul>
						<li><a href="index.html">Home</a></li>
						<li><a href="download.html" class="active">Download</a></li>
					</ul>
				</nav>
			</div>
		</header>

		<!-- Download Section -->
		<section class="download" id="download">
			<div class="container">
				<h1>Download Truncate</h1>
				<p class="subtitle">
					Get the latest version of Truncate for your platform
				</p>

				<div class="version-info">
					<p>Current Version: <span class="version">1.0.0</span></p>
					<p>Released: <span class="release-date">March 5, 2025</span></p>
				</div>

				<div class="download-options">
					<!-- macOS Downloads -->
					<div class="download-platform" id="macos">
						<h2>macOS</h2>
						<div class="download-buttons">
							<a href="#" class="download-button">
								<!-- macOS icon -->
								Download for macOS (ARM64)
								<span class="file-info">Truncate-1.0.0-arm64.dmg (120 MB)</span>
							</a>
							<a href="#" class="download-button">
								<!-- macOS icon -->
								Download for macOS (Intel)
								<span class="file-info">Truncate-1.0.0-x64.dmg (125 MB)</span>
							</a>
						</div>
					</div>

					<!-- Windows Downloads -->
					<div class="download-platform" id="windows">
						<h2>Windows</h2>
						<div class="download-buttons">
							<a href="#" class="download-button">
								<!-- Windows icon -->
								Download for Windows (x64)
								<span class="file-info"
									>Truncate-1.0.0-win32-x64.exe (115 MB)</span
								>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- System Requirements -->
		<section class="system-requirements">
			<div class="container">
				<h2>System Requirements</h2>

				<div class="requirements-grid">
					<!-- macOS Requirements -->
					<div class="requirements-platform">
						<h3>macOS</h3>
						<ul>
							<li>macOS 11.0 or higher</li>
							<li>Apple Silicon or Intel processor</li>
							<li>8 GB RAM (16 GB recommended)</li>
							<li>1 GB available disk space</li>
						</ul>
					</div>

					<!-- Windows Requirements -->
					<div class="requirements-platform">
						<h3>Windows</h3>
						<ul>
							<li>Windows 10 (64-bit) or higher</li>
							<li>x64 processor</li>
							<li>8 GB RAM (16 GB recommended)</li>
							<li>1 GB available disk space</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<!-- Installation Instructions -->
		<section class="installation">
			<div class="container">
				<h2>Installation Instructions</h2>

				<div class="installation-grid">
					<!-- macOS Installation -->
					<div class="installation-platform">
						<h3>macOS</h3>
						<ol>
							<li>Download the appropriate .dmg file for your processor</li>
							<li>Open the .dmg file</li>
							<li>Drag Truncate to your Applications folder</li>
							<li>Launch Truncate from your Applications folder</li>
						</ol>
					</div>

					<!-- Windows Installation -->
					<div class="installation-platform">
						<h3>Windows</h3>
						<ol>
							<li>Download the .exe installer</li>
							<li>Run the installer</li>
							<li>Follow the installation wizard</li>
							<li>Launch Truncate from the Start menu</li>
						</ol>
					</div>
				</div>
			</div>
		</section>

		<!-- Footer -->
		<footer>
			<div class="container">
				<div class="copyright">
					<p>&copy; 2025 Truncate. All rights reserved.</p>
				</div>
			</div>
		</footer>

		<script src="assets/js/main.js"></script>
	</body>
</html>
```

## CSS Considerations

The CSS should implement the dark theme with teal accents as specified in the architecture plan:

- Dark background (#121212)
- Slightly lighter sections (#1E1E1E)
- White text (#FFFFFF)
- Teal accent color (#00B3A4)
- Responsive design with mobile-first approach

## Key Components

1. **Header**: Simple navigation with logo and links to Home and Download pages
2. **Download Section**: Clear download options for each platform with version information
3. **System Requirements**: Minimum hardware and software requirements for each platform
4. **Installation Instructions**: Step-by-step guide for installing on each platform
5. **Footer**: Minimal footer with copyright information

## Responsive Behavior

- On mobile devices, the download options should stack vertically
- The requirements and installation grids should adjust to a vertical layout on smaller screens
