import axios from "axios";
import { useState, useEffect } from "react";

export const API = () => {

    const [occupationList, setOccupationsList] = useState([])
    const [stateList, setStates] = useState([])
    const [selectedOccupation, setSelectedOccupation] = useState([])
    const [selectedState, setSelectedState] = useState("")

    useEffect(() => {
        const fetchOccupations = async () => {
            try {
                const res = await axios.get(
                    "https://frontend-take-home.fetchrewards.com/form"
                );
                const { occupations } = res.data;

                setOccupationsList(occupations)
                setSelectedOccupation(occupations[5])
            } catch (e) {
                console.log(e);
            }
        };
        fetchOccupations()
    }, []);

    useEffect(() => {
        const fetchStates = async () => {
            try {
                const res = await axios.get(
                    "https://frontend-take-home.fetchrewards.com/form"
                );
                const { states } = res.data;

                setStates(states)
                setSelectedState(states[13].abbreviation)
            } catch (e) {
                console.log(e);
            }
        };
        fetchStates()
    }, []);
    
    return [occupationList, stateList, selectedOccupation, selectedState, setSelectedOccupation, setSelectedOccupation];
}