type VideoProps = {
  source: string;
};

function Video({ source }: VideoProps) {
  return (
    <div>
      <div style={{ position: "relative", paddingTop: 56.25 + "%" }}>
        <iframe
          width="560"
          height="315"
          src={source}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 100 + "%",
            height: 100 + "%",
          }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Video;
