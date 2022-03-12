import "../css/image.css";
import Boarder from "./border";

export default class Youtube{
    constructor(){
        this.width = "100%";
        this.margin =  new Boarder();
        this.padding =  new Boarder();
        this.corner = new Boarder();

    }

    setMargin(ind, val){
        this.margin.set(ind, val);
    }
    setPadding(ind, val){
        this.padding.set(ind, val);
    }
    setCorner(ind, val){
        this.corner.set(ind, val);
    }

    setWidth(val){
        this.width = val;
    }

    /**
     * @param {string} link youtube link
     */
    get(link){
        if(link.includes("youtu.be")){
            const index = link.indexOf("youtu.be");
            link = link.substring(0, index).concat(
                "youtube.com", link.substring(index+"youtu.be".length, link.length));
        }

        if(!link.includes("embed")){
            const index = link.lastIndexOf("/");
            link = link.substring(0, index).concat(
                "/embed", link.substring(index, link.length));
        }
        <link rel="preload" href={link} as="document"></link>
        return (
            <iframe style={{
                width: this.width, 
                margin: this.margin.getStyle(), 
                padding: this.padding.getStyle()
            }} src={link}></iframe>
        );
    }

}
