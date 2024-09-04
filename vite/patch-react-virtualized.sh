#!/bin/bash

# Patch for an issue with react-virtualized output having an invalid import
# https://github.com/bvaughn/react-virtualized/issues/1212

if [[ -f "node_modules/react-virtualized/dist/es/WindowScroller/utils/onScroll.js" ]]; then
    sed -i -e '/import { bpfrpt_proptype_WindowScroller } from "..\/WindowScroller.js";/d' node_modules/react-virtualized/dist/es/WindowScroller/utils/onScroll.js
fi
