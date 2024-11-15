import React from "react";

export const Course = ({ image, title, description }) => {

    //Aşağıdaki kullanım biçimi amatör kullanım biçimidir.

    // console.log({title, description})

    // const title = props.title;
    // const description = props.description;

    // const {title, description} = props;

    //Yukarıda tanımlanan şekliyle props isimleri tanımlanır ve return kısmında jsx formatında çıktı alınır.
    return (
        <>
            <div className="card">
                <div className="card-image">
                    <figure>
                        <img src={image} alt="" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                        </div>
                    </div>
                    <div className="content">
                        {description}
                    </div>
                </div>
            </div>
        </>
    );
}
