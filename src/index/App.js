import "./css/styles.css";
import { Column } from "../common/modules/column";
import { CreateSubtitle, MergeObjects } from "../common/object_creation";
import { Bulletin } from "../common/modules/bulletin";

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

    var bulletin = new Bulletin("200px");

    cols.InsertItem(0, MergeObjects(CreateSubtitle("About"), bulletin.Generate()));
    cols.InsertItem(1, MergeObjects(CreateSubtitle("Video Release"), bulletin.Generate()));
    cols.InsertItem(2, MergeObjects(CreateSubtitle("Announcement"), bulletin.Generate()));

    return cols.Generate();
}
  