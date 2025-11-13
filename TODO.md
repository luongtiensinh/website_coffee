# TODO: Reorganize Project Structure

## Current Issues
- server.js (backend) is in src/ (frontend folder)
- CSS files are scattered: some in src/styles/, some in src/pages/
- Admin components are in src/pages/admin/ instead of src/components/

## Proposed New Structure
- Move server.js to root directory
- Move all CSS files to src/styles/
- Move admin components from src/pages/admin/ to src/components/admin/
- Update all import statements accordingly

## Steps
- [x] Move server.js from src/ to root
- [x] Move Admin.css from src/pages/ to src/styles/
- [x] Move Login.css from src/pages/ to src/styles/
- [x] Move Register.css from src/pages/ to src/styles/
- [x] Move admin components from src/pages/admin/ to src/components/admin/
- [x] Update imports in Admin.jsx for CSS and admin components
- [x] Update imports in Login.jsx for CSS
- [x] Update imports in Register.jsx for CSS
- [x] Update package.json scripts if needed (server script points to server.js in root)
- [x] Test the app to ensure everything works
