### Hexlet tests and linter status:
[![Actions Status](https://github.com/Ritsssss/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Ritsssss/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/9ebf56425ca1f3f94b78/maintainability)](https://codeclimate.com/github/Ritsssss/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/9ebf56425ca1f3f94b78/test_coverage)](https://codeclimate.com/github/Ritsssss/frontend-project-46/test_coverage)
[![Node CI](https://github.com/Ritsssss/frontend-project-46/actions/workflows/main.yml/badge.svg)](https://github.com/Ritsssss/frontend-project-46/actions/workflows/main.yml)

**Step 4: Comparison of Flat JSON Files**
Command: `gendiff filepath1.json filepath2.json`

- Keys are displayed in alphabetical order.
- If a key is present in both files with the same value, it has no + or -.
- A key with - means the value was removed or changed in the first file.
- A key with + means the value was changed or added in the second file.

Asciinema: https://asciinema.org/a/AEh5U7iFYZSCH9di1vfhy5eXB

**Step 6: Comparison of Flat YAML files**
Command: `gendiff filepath1.yml filepath2.yml`

Same result expected as in Step 4

Asciinema: https://asciinema.org/a/HYDRk1IfyMX8zHT471YPSIrRi

**Step 7: Comparison of Nested JSON & YML files**
Command: `gendiff filepath1.ext filepath2.ext`

- The program compares two files, including nested objects. 
- The default output format is **Stylish**.

Asciinema: https://asciinema.org/a/nhTS8n70ETNDDzjIKFOlsGk9d