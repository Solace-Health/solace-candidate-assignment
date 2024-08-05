"use client";

import { useEffect, useState, ChangeEvent } from "react";
import { Advocate } from "./types";
import { isSearchTermFound, serachspecialties } from "./helpers";

import "./page.css";

export default function Home() {
	const [advocates, setAdvocates] = useState<Array<Advocate>>([]);
	const [filteredAdvocates, setFilteredAdvocates] = useState<Array<Advocate>>([]);

	useEffect(() => {
		console.log("fetching advocates...");
		fetch("/api/advocates").then((response) => {
			response.json().then((jsonResponse) => {
				setAdvocates(jsonResponse.data);
				setFilteredAdvocates(jsonResponse.data);
			});
		});
	}, []);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const searchTerm = e.target.value;
		const searchImput = document.getElementById("search-term");

		if (searchImput !== null) {
			searchImput.innerHTML = searchTerm;
		}

		console.log("filtering advocates...");

		const filteredAdvocates = advocates.filter((advocate: Advocate) => {
			return (
				isSearchTermFound(advocate.firstName, searchTerm) ||
				isSearchTermFound(advocate.lastName, searchTerm) ||
				isSearchTermFound(advocate.city, searchTerm) ||
				isSearchTermFound(advocate.degree, searchTerm) ||
				serachspecialties(advocate.specialties, searchTerm) ||
				isSearchTermFound(advocate.yearsOfExperience.toString(), searchTerm) ||
				isSearchTermFound(advocate.phoneNumber.toString(), searchTerm)
			);
		});

		setFilteredAdvocates(filteredAdvocates);
	};

	const onClick = () => {
		console.log(advocates);
		setFilteredAdvocates(advocates);
	};

	return (
		<main style={{ margin: "24px" }}>
			<div className='top-section'>
				<h1 className='top-section__title'>Solace Advocates</h1>
				<div className='top-section__search'>
					<p>Search</p>
					<p>
						Searching for: <span id='search-term'></span>
					</p>
					<input style={{ border: "1px solid black" }} onChange={onChange} />
					<button className='top-section__reset-button' onClick={onClick}>
						Reset Search
					</button>
				</div>
			</div>
			<table>
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>City</th>
						<th>Degree</th>
						<th>Specialties</th>
						<th>Years of Experience</th>
						<th>Phone Number</th>
					</tr>
				</thead>
				<tbody>
					{filteredAdvocates.map((advocate) => {
						return (
							<tr key={`${advocate.firstName}${advocate.lastName}`}>
								<td>{advocate.firstName}</td>
								<td>{advocate.lastName}</td>
								<td>{advocate.city}</td>
								<td>{advocate.degree}</td>
								<td>
									{advocate.specialties.map((s, idx) => (
										<div key={`${s}${idx}`}>{s}</div>
									))}
								</td>
								<td>{advocate.yearsOfExperience}</td>
								<td>{advocate.phoneNumber}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</main>
	);
}
