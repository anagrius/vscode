# Landing Page Structure

This document outlines the HTML structure for the landing page (index.html) of the Truncate website.

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Truncate - AI Legal Work Environment</title>
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
						<li><a href="index.html" class="active">Home</a></li>
						<li><a href="download.html">Download</a></li>
					</ul>
				</nav>
			</div>
		</header>

		<!-- Hero Section -->
		<section class="hero">
			<div class="container">
				<div class="hero-content">
					<h1>Truncate: AI Legal Work Environment</h1>
					<p class="subtitle">
						A customized VS Code environment with AI tools for legal
						professionals
					</p>
					<p>
						Streamline your legal workflow with powerful AI-assisted document
						analysis, contract review, and research capabilities in a secure
						environment.
					</p>
					<a href="download.html" class="cta-button">Download Now</a>
				</div>
				<div class="hero-image">
					<img
						src="assets/images/screenshots/truncate-interface.png"
						alt="Truncate Interface Screenshot"
					/>
				</div>
			</div>
		</section>

		<!-- Features Section -->
		<section class="features">
			<div class="container">
				<h2>Key Features</h2>
				<div class="feature-grid">
					<!-- Feature 1 -->
					<div class="feature-card">
						<div class="feature-icon">
							<!-- Icon for document analysis -->
						</div>
						<h3>AI-powered Document Analysis</h3>
						<p>
							Automatically extract key information from legal documents with
							advanced AI capabilities.
						</p>
					</div>

					<!-- Feature 2 -->
					<div class="feature-card">
						<div class="feature-icon">
							<!-- Icon for contract review -->
						</div>
						<h3>Contract Review Automation</h3>
						<p>
							Identify risks, obligations, and important clauses with
							intelligent contract analysis.
						</p>
					</div>

					<!-- Feature 3 -->
					<div class="feature-card">
						<div class="feature-icon">
							<!-- Icon for legal research -->
						</div>
						<h3>Legal Research Assistance</h3>
						<p>
							Find relevant cases and statutes with AI-assisted research tools
							integrated into your workflow.
						</p>
					</div>

					<!-- Feature 4 -->
					<div class="feature-card">
						<div class="feature-icon">
							<!-- Icon for security -->
						</div>
						<h3>Secure Environment</h3>
						<p>
							Handle confidential documents with privacy controls designed for
							legal professionals.
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Call to Action -->
		<section class="cta">
			<div class="container">
				<h2>Get Started Today</h2>
				<p>
					Download Truncate for your platform and transform your legal workflow.
				</p>
				<div class="download-buttons">
					<a href="download.html#macos" class="download-button">
						<!-- macOS icon -->
						Download for macOS
					</a>
					<a href="download.html#windows" class="download-button">
						<!-- Windows icon -->
						Download for Windows
					</a>
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
2. **Hero Section**: Main headline, brief description, and prominent call-to-action
3. **Features Section**: Four feature cards highlighting key capabilities
4. **Call to Action**: Secondary prompt to download with platform-specific buttons
5. **Footer**: Minimal footer with copyright information

## Responsive Behavior

- On mobile devices, the feature grid should stack vertically
- The hero section should adjust to a vertical layout on smaller screens
- Navigation should collapse to a hamburger menu on mobile
