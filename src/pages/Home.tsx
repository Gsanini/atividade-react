import React from "react";
import { Banner } from "../components/Banner/Banner";
import { Footer } from "../components/Footer/Footer"
import { SectionIcons } from "../components/SectionIcons/SectionIcons";
import { SectionContent } from "../components/SectionContent/SectionContent";
import img2 from "../assets/image1.jpg"
import img3 from "../assets/image2.jpg"
import img4 from "../assets/image3.jpg"


const texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, enim perferendis, quod ea ipsam vel blanditiis doloremque pariatur aut distinctio velit culpa. Reprehenderit possimus tenetur earum ipsa. Ipsam, aliquam. Reiciendis."

export const Home : React.FC = () => {
    return(
        <React.Fragment>
            <Banner  titulo="Minha primeira página com React."/>
            <SectionIcons/>
            <SectionContent titulo="Section-1" texto={texto} urlImage={img2}/>
            <SectionContent titulo="Section-2" texto={texto} urlImage={img3} reverse/>
            <SectionContent titulo="Section-3" texto={texto} urlImage={img4}/>
            <Banner  titulo="Contato."/>
            <Footer/>
        </React.Fragment>
    )
}