"use client";

import KeplerGl from "@kepler.gl/components";
import { Provider } from "react-redux";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import store from "./store";

export default function Home() {
  return (
    <Provider store={store}>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
        }}
      >
        <AutoSizer>
          {({ height, width }) => (
            <KeplerGl id="KeplerGl Turbopack" width={width} height={height} />
          )}
        </AutoSizer>
      </div>
    </Provider>
  );
}
