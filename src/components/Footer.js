import React from "react";


let Footer = (props) => {
    console.log(props.className ? "data " : "non");

    let cls = props.className ? props.className : " ";

    return (
        <div className={"footer " + cls}>
            <h2>About us</h2>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus sapien eget nulla posuere, et vestibulum mauris tempor. Vestibulum gravida tempus ante, quis fermentum orci auctor ac. Vestibulum nec leo orci. Maecenas sit amet turpis at metus dignissim auctor. Phasellus eget tellus feugiat, auctor augue a, sagittis magna. Integer blandit odio lacus. Duis a blandit arcu. Aenean ut enim sed mi fringilla vestibulum eget in diam. Nullam sollicitudin quam at erat posuere mollis. Aliquam erat volutpat. In ultricies molestie odio, at porta nulla egestas vitae. Fusce orci est, elementum vel ex eu, volutpat hendrerit nibh. Nam feugiat eu nulla id ornare. </div>
        </div>
    )
}

export default Footer;