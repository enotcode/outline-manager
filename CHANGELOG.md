# Changelog

All notable changes to this project will be documented in this file.

## [1.3.0]

### Added

- Key rename functionality
- Updated toast notification styles

### Fixed

- Better text overflow handling for key titles

## [1.2.1]

### Added

- Error handling for key creation and deletion

### Fixed

- **Critical**: Fixed Docker runtime environment variables issue that caused 500 errors in production
- **Critical**: Fixed cache invalidation - new keys now appear immediately in the list after creation
- Removed unnecessary router.refresh() calls in favor of proper server-side cache revalidation
- Fixed permissions issue in Docker container

## [1.2.0]

### Added

- Key details view with ability to view and delete individual keys
- Docker support with docker-compose configuration

## [1.1.0]

### Added

- Key creation functionality
- Copy link button for sharing access keys
- Interactive UI with toast notifications
- Added metadata for better SEO

### Fixed

- Hover color for copy icon
- Stroke-width warnings in SVG components

## [1.0.0]

### Added

- Initial release of Outline Manager
- Display server information and usage statistics
- List all access keys with usage data
