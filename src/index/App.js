import "./css/styles.css";
import { Column } from "../common/modules/column";
import { CreateSubtitle, merge } from "../common/object_creation";
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
    for(var i = 0; i < 100; ++i)
        bulletin.append(i.toString());

    cols.insert(0, CreateSubtitle("About"), bulletin.get());
    cols.insert(1, CreateSubtitle("Video Release"), bulletin.get());
    cols.insert(2, CreateSubtitle("Announcement"), bulletin.get());

    return cols.get();
}
  