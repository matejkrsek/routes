import { NavLink } from "react-router-dom";


export default function Home(){
    return(

<div className="home">
<h2>Welcome in the Shopping Lists Application.</h2>
<p>This app gives you a possibility of creating your perosnal or public shopping lists! It is so great!!!</p>
<p>You can add indredients of your own taste</p>
<p>Always wanted to share your shopping list with your family members? No problem with us!</p>
<br></br>
<span>
    <NavLink to="shoppingLists">Go to shopping lists</NavLink>
</span>

</div>


    )
}