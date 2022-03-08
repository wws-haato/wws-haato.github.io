import "./css/header.css";

export function CreateHeader() {
  return (
      <div class="header">
        <div class="language_toggle">
          <a href="https://virtualyoutuber.fandom.com/wiki/Akai_Haato">🇯🇵 日本語 </a> 
              | 
          <a href="https://virtualyoutuber.fandom.com/wiki/Akai_Haato">🇺🇸 English </a> 
        </div>

        <div class="button">Current Event</div>
        <div class="button">Previous Works</div>
        <div class="button">Contact</div>
      </div>
  );
}

export function CreateTopMarginedPageTitle(title){
    return <div class="page_title">{title}</div>
} 
