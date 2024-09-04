import KeplerGl from "@kepler.gl/components";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";

export function Map() {
  return (
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
          <KeplerGl id="KeplerGl RSBuild" width={width} height={height} />
        )}
      </AutoSizer>
    </div>
  );
}
