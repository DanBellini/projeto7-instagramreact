import Postbox from "./Postsbox";
import Sidebar from "./Sidebar";
import Storiesbox from "./Stories";

export default function Page(){
    return(
        <div class="corpo">
        <div class="esquerda">
            <Storiesbox />
            <Postbox/>
        </div>
        <Sidebar />

      </div>
    )
}
