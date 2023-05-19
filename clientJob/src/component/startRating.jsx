import { Card } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export function StarRating(props){
    const totalStars = 5;
    const activeStars = props.star;

    return(<>
        <Card>

        {[...new Array(totalStars)].map((arr, index) => {
        return index < activeStars ? <StarIcon /> : <StarBorderIcon />;
      })}

        </Card>

    
    </>);
}