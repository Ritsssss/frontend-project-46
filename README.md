# JSON/YAML Compare Tool

[![Actions Status](https://github.com/Ritsssss/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Ritsssss/frontend-project-46/actions)
[![Node CI](https://github.com/Ritsssss/frontend-project-46/actions/workflows/main.yml/badge.svg)](https://github.com/Ritsssss/frontend-project-46/actions/workflows/main.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/9ebf56425ca1f3f94b78/maintainability)](https://codeclimate.com/github/Ritsssss/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/9ebf56425ca1f3f94b78/test_coverage)](https://codeclimate.com/github/Ritsssss/frontend-project-46/test_coverage)

## Overview
A CLI tool that compares two JSON or YAML files and outputs their differences in a specified format (stylish, plain, or json). Built in JavaScript using the Commander library.

### Features
- Compares two files and outputs their difference in a structured format.
- Supports three output formats: stylish (default), plain, and json.
- Tested with Jest and integrated with GitHub Actions for continuous testing.
- Code quality monitored with CodeClimate.

### Demonstration
- **The default format**: [View Demo](https://asciinema.org/a/nhTS8n70ETNDDzjIKFOlsGk9d)
- **Plain format**: [View Demo](https://asciinema.org/a/rDK71Y6qP2vybzS4LFhiqjgwU)
- **JSON format**: [View Demo](https://asciinema.org/a/EhqFsICJdl5UJJkh4mtU6WmCt)

## Installation
```sh
git clone https://github.com/Ritsssss/frontend-project-46.git # Clone the repository
cd frontend-project-46 # Navigate into the project directory
make install # Install dependencies 
npm link # Enable the CLI tool to be used globally
```

## Usage
```sh
gendiff -h # Display help 
gendiff -V # Show version 
gendiff file1 file2 # Compare two files (default format: stylish) 
gendiff --format `format` file1 file2 # Compare files in the preferred format (available formats: stylish, plain, json)
```