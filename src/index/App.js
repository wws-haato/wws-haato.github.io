import "./css/styles.css";
import { Column } from "../common/modules/column";
import { CreateSubtitle } from "../common/object_creation";

export function CreateLogoBanner() {
    return (
        <div class = "logo_banner">
            <img src="fig/common/logo_banner.png" alt="..." class="logo_banner"></img>
        </div>
        
    );
}

export function CreateAboutAndBulletinColumns(){
    var cols = new Column(3);
    cols.SetRowWidth("95%");
    cols.SetRatiosEqually();
    cols.SetWidthRatios([25, 40, 40]);
    cols.SetMarginTop("25px");

    cols.InsertItem(0, CreateSubtitle("About"));
    cols.InsertItem(1, CreateSubtitle("Video Release"));
    cols.InsertItem(2, CreateSubtitle("News"));

    return cols.GenerateColumns();
}
  