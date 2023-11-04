import Image from "next/image";

const SeaZoomBackground = ({ objPos = "-30vw -70vh" }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        overflow: "hidden",
        left: 0,
        top: 0,
        zIndex: -1,
      }}
    >
      <Image
        src="/assets/background/ocean_bg_large.png"
        alt="Background"
        width="0"
        height="0"
        sizes="100vw"
        style={{
          zIndex: -1,
          width: "3024px",
          height: "1964px",
          objectFit: "cover",
          objectPosition: objPos,
        }}
      />
    </div>
  );
};

export default SeaZoomBackground;
