import Image from "next/image";

export default function Shop() {
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
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
          objectPosition: "center -85vh",
        }}
      />
    </div>
  );
}
