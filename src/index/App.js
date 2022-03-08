import "../common/css/image.css";

import { Column } from "../common/modules/column";
import { CreateSubtitle, merge} from "../common/object_creation";
import { Bulletin } from "../common/modules/bulletin";
import { Image } from "../common/modules/Image";

export function CreateLogoBanner() {
    var img = new Image();
    img.SetMarginTop("20px");
    img.SetWidth("65%");

    return img.get("fig/common/logo_banner.png");
}

export function CreateAboutAndBulletinColumns(){
    var cols = new Column(3);

    cols.SetRowWidth("95%");
    cols.SetRatiosEqually();
    cols.SetWidthRatios([25, 40, 40]);
    cols.SetMarginTop("20px");

    var bulletin = new Bulletin("500px");
    for(var i = 0; i < 100; ++i)
        bulletin.append(i.toString());

    cols.insert(0, CreateAboutColumn());
    cols.insert(1, CreateSubtitle("Video Release"), bulletin.get());
    cols.insert(2, CreateSubtitle("Announcement"), bulletin.get());

    return cols.get();
}

function CreateAboutColumn(){
    var components = [];
    components.push(CreateSubtitle("About"));
    var img = new Image();
    img.SetWidth("75%");

    components.push(img.get("fig/common/pfp.jpg"));
    

    return components;
}
  