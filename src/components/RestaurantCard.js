import { LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla
    } = resData?.card.card.info;

    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo"
            src={LOGO_URL + cloudinaryImageId}>
                
            </img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")} </h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo} </h4>
            <h4>{sla.slaString}</h4>
        </div>
    );
}

export default RestaurantCard;