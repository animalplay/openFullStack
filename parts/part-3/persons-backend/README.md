To set eslint, first install like dev dependecie npm install eslint -D

Then use the binary to configure eslint, this is the path: .\node_modules\.bin\eslint --init

Add to package.json the next script: "lint": "eslint ." this to use to indetify errors

You can also modify the setting extensions for more customization or use package like standard npm install standard -D

to use standar, add extends: "./node_modules