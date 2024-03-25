import { useWindowResize } from "./19-1-resizeHook";

// Usage
function Resize() {
  const { width, height } = useWindowResize();

  return (
    <div>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </div>
  );
}
export default Resize;
