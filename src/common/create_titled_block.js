import "./css/titled_block.css";

export default function CreateTitledBlock(title) {
  return (
    <div id="titled_block">
      <div id="title" class="title">{title}</div>
    </div>
  );
}

