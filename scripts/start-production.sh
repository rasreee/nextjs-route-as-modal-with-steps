NODE_MODULES_DIR=""
if [[ -d "$(find . -name node_modules)" ]]; then
  echo "Found 'node_modules' directory"
else
  echo "No 'node_modules' directory found"
  echo "Running 'yarn install'"
  yarn install
fi

BUILD_DIRNAME=".next"

existingBuildDir=$(find . -name $BUILD_DIRNAME)

if [[ -d "$existingBuildDir" ]]; then
  echo "Found build cache"
else
  echo "No build found at $BUILD_DIRNAME"
  echo "Running 'yarn build'"
  yarn build
fi

yarn start
