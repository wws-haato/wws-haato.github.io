import "./css/header.css";

export default function CreateHeader() {
  return (
    <section class="header">
      <section class="language_toggle">
        <a href="https://virtualyoutuber.fandom.com/wiki/Akai_Haato">🇯🇵 日本語 </a> 
            | 
        <a href="https://virtualyoutuber.fandom.com/wiki/Akai_Haato">🇺🇸 English </a> 
      </section>

      <element class="button">Current Event</element>
      <element class="button">Previous Works</element>
      <element class="button">Contact</element>

    </section>
  );
}

