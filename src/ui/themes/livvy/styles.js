import base from "../light/styles";
import deepmerge from "deepmerge";

const styles = {
    primaryFontColor: "#3333ff",
    primaryBackgroundColor: "#FCD102",
}

export default deepmerge(base, styles);
