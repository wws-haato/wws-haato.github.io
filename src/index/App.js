import "./css/styles.css";
import { Column } from "../common/modules/column";

export function CreateLogoBanner() {
    return (
        <div class = "logo_banner">
            <img src="fig/common/logo_banner.png" alt="..." class="logo_banner"></img>
        </div>
        
    );
}

export function CreateAboutAndBulletinColumns(){
    var cols = new Column(3);
    cols.SetRowWidth("100%");
    cols.SetRatiosEqually();
    cols.SetMarginTop("10px");
    cols.InsertItem(0, "aaaa");
    cols.InsertItem(1, "b");
    cols.InsertItem(2, "aawwwaa");

    return cols.GenerateColumns();
}
  