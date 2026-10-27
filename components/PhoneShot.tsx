export default function PhoneShot({ src, alt, width = 260 }: { src: string; alt: string; width?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={{
        display: "block",
        width: "100%",
        maxWidth: `${width}px`,
        height: "auto",
        borderRadius: "34px",
        border: "7px solid #1b1f27",
        boxShadow: "0 18px 40px rgba(32,36,46,0.18)",
        background: "#1b1f27",
      }}
    />
  );
}
