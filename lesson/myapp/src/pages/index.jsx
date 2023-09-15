import React from "react";
import { styled } from "@mui/system";
const Container = styled("div")(props=>{
    console.log(props)
    return ({})
})
function Root() {
  return <Container></Container>;
}

export default React.memo(Root);
