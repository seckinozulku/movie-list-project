import styled, {css} from "styled-components/macro";

export const FilterWrapper = styled.div`
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  box-sizing: border-box;
  padding: 10px 0;
  width: 100%;
`;

export const Section = styled.div`
  ${({noBorder}) => !noBorder &&
          css`
            &:after {
              border-bottom: 1px solid #e3e3e3;
              content: '';
              display: block;
              width: 100%;
            }
          `}
`;

export const Title = styled.div`
  font-weight: 600;
  padding: 10px;
`;

export const FilterName = styled.div`

`;

export const FilterArea = styled.div`
  padding: 10px;
`;

export const SelectBox = styled.select`
  background-color: #C7CDD5;
  border: 0;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 15px;
  height: 35px;
  margin: 10px 0;
  text-transform: capitalize;
  width: 100%;
`;

export const SelectOption = styled.option`
  background-color: white;
  font-size: 15px;
  text-transform: capitalize;
`;

export const Logo = styled.img`
  margin-top: 7px;
  width: 120px;
`;

export const Genres = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const GenreButton = styled.li`
  border: 1px solid #e3e3e3;
  border-radius: 20px;
  cursor: pointer;
  display: inline-flex;
  margin: 0 5px 5px 0;
  padding: 10px;

  ${({isActive}) => isActive &&
          css`
            background-color: #43C7EB;
            color: white;
          `}
`;

export const Range = styled.input`
  width: 100%;
`;

export const Labels = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RangeLabel = styled.div`

`;

export const SearchButton = styled.button`
  background-color: #01B4E4;
  border: 0;
  border-radius: 20px;
  color: white;
  font-size: 15px;
  font-weight: 600;
  height: 40px;
  margin-top: 10px;
  width: 100%;
`;
