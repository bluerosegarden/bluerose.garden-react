
function Heading({heading_size, heading_text_classes, text}: {heading_size: string, heading_text_classes: string, text:string}){
    switch(heading_size){
        case "h2":
            return (<h2 className={heading_text_classes}>{text}</h2>);
        case "h3":
            return (<h3 className={heading_text_classes}>{text}</h3>);


    }
    

}



export default function HeadingWithBorder({color, heading_size, text}:{color:string, heading_size: string, text:string}){

 let border_line_classes: string = "h-2 rounded justify-self-center self-center ";
    let heading_text_classes: string = "text-center font-bold my-5 lg:my-0 justify-self-center md:mx-4";

    switch (color){
        case "blue":
            border_line_classes += " bg-blue";
            heading_text_classes += " text-blue"
            break;
        case "rose":
            border_line_classes += " bg-rose";
            heading_text_classes += " text-rose"
            break;
        case "garden":
            border_line_classes += " bg-garden";
            heading_text_classes += " text-garden"
            break;
        case "magic":
            border_line_classes += " bg-magic";
            heading_text_classes += " text-magic"
            break;
        default:
            border_line_classes += " bg-magic";
            heading_text_classes += " text-magic"
            break;
    }

    switch (heading_size){
        case "h2":
            heading_text_classes += " text-4xl"
            border_line_classes += " lg:w-3/6 w-5/6"
            break;
        case "h3":
            heading_text_classes += " text-3xl"
            border_line_classes += " lg:w-2/6 w-4/6"
            break;
    }

    return (
    <div className=" mb-10 flex sm:flex-row flex-col justify-center align-items-center">
            <div className={border_line_classes}/>
            <Heading heading_size={heading_size} heading_text_classes={heading_text_classes} text={text} />
            <div className={border_line_classes}/>
    </div>
    );
}
