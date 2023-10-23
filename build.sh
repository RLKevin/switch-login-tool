#!/bin/bash

EXTENSION_NAME="switch-login"
OUTPUT_XPI="$EXTENSION_NAME.xpi"

# Clean up any previous XPI file
rm -f "$OUTPUT_XPI"

# Create the XPI file
zip -r "$OUTPUT_XPI" *

echo "XPI file created: $OUTPUT_XPI"
