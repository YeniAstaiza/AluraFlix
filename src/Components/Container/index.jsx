import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  min-height: 90vh;
  padding: 0px 15vw;
`

const StyledContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  `

const Container = ( { children }) => {
  return (
    <StyledContainer>
      <StyledContent>
        {children}
      </StyledContent>
    </StyledContainer>
  );
};

export default Container;