import axios from "axios";
import { useState, useEffect } from "react";

export const API = () => {

    const [occupationList, setOccupationsList] = useState([])
    const [stateList, setStates] = useState([])

    useEffect(() => {
        const fetchOccupations = async () => {
            try {
                const res = await axios.get(
                    "https://frontend-take-home.fetchrewards.com/form"
                );
                const { occupations } = res.data;

                if (occupationList.length === 0) {
                    setOccupationsList(occupations)
                }
            } catch (e) {
                console.log(e);
            }
        };
        fetchOccupations()
    }, [occupationList]);

    useEffect(() => {
        const fetchStates = async () => {
            try {
                const res = await axios.get(
                    "https://frontend-take-home.fetchrewards.com/form"
                );
                const { states } = res.data;

                if (stateList.length === 0) {
                    setStates(states)
                }
            } catch (e) {
                console.log(e);
            }
        };
        fetchStates()
    }, [stateList]);

    const postUser = async (newUser) => {
        try {
            const resp = await axios.post("https://frontend-take-home.fetchrewards.com/form", newUser)

            return resp
        } catch (e) {
            console.log(e)
        }
    }

    return [occupationList, stateList, postUser];
}