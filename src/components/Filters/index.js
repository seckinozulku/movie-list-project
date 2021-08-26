import {
	FilterArea,
	FilterName,
	FilterWrapper,
	SelectBox,
	Title,
	Section,
	SelectOption,
	GenreButton,
	Genres, Range, RangeLabel, Labels, SearchButton
} from "./style";
import {useContext, useState} from "react";
import {GlobalContext} from "../../context/GlobalState";

const Filters = ({setFilters}) => {
	const { genres } = useContext(GlobalContext);
	const [selectedFilters, setSelectedFilters] = useState({
		sortByFilter: null,
		genresFilter: null,
		rateFilter: null
	});

	const handleFilterChange = (value, type) => {
		setSelectedFilters({
			...selectedFilters,
			[type]: value
		});
	};

	const handleGenreChange = (value) => {
		let temp = selectedFilters?.genresFilter || [];
		if (temp?.includes(value)) {
			temp = temp?.filter((item) => item !== value);
		} else {
			temp.push(value);
		}

		setSelectedFilters({
			...selectedFilters,
			genresFilter: temp
		});
	};

	const handleSearch = () => {
		setFilters(selectedFilters);
	};


	return (
		<>
			<FilterWrapper>
				<Section>
					<Title>Filters</Title>
				</Section>
				<Section>
					<FilterArea>
						<FilterName>Sort Results By</FilterName>
						<SelectBox onChange={(e) => handleFilterChange(e.target.value, "sortByFilter")}>
							<SelectOption value="popularity.desc">Popularity Descending</SelectOption>
							<SelectOption value="release_date.desc">Release Date Descending</SelectOption>
							<SelectOption value="original_title.asc">Title (A-Z)</SelectOption>
							<SelectOption value="original_title.desc">Title (Z-A)</SelectOption>
							<SelectOption value="vote_average.desc">Vote Average Descending</SelectOption>
						</SelectBox>
					</FilterArea>
				</Section>
				<Section>
					<FilterArea>
						<FilterName>Genres</FilterName>
						<Genres>
							{genres?.map((item) =>
								<GenreButton key={item?.id} onClick={() => handleGenreChange(item?.id)}
									isActive={selectedFilters?.genresFilter?.includes(item?.id)}>
									{item?.name}
								</GenreButton>
							)}
						</Genres>
					</FilterArea>
				</Section>
				<Section noBorder>
					<FilterArea>
						<FilterName>Minimum User Rate</FilterName>
						<Range
							onChange={(e) => handleFilterChange(e?.target?.value, "rateFilter")}
							type="range"
							min="0"
							max="10"
							step="1"
						/>
						<Labels>
							<RangeLabel>0</RangeLabel>
							<RangeLabel>50</RangeLabel>
							<RangeLabel>100</RangeLabel>
						</Labels>
					</FilterArea>
				</Section>
			</FilterWrapper>
			<SearchButton onClick={handleSearch}>Search</SearchButton>
		</>
	);
};

export default Filters;
