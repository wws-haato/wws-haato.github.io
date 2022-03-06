import "./styles.css";

export default function TitledBlockApp(title) {
  return (
    <div id="titled_block">
      <div id="title" class="title">
        {title}
      </div>
    </div>
  );
}

